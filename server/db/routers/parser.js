const express = require("express");
const Site = require("../models/site");
const router = new express.Router();
const cheerio = require("cheerio");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const fs = require("fs");
const { checkBodyFields } = require("../functions/security");


router.post("/search", async (req, res) => {
  const { search } = req.body;

  try {
    checkBodyFields(req.body)
  } catch (error) {
    res.status(500).json(error.message);

    return;
  }

  const sites = await Site.find({});

  try {
    function fetchSearchResults(searchTerm, site) {
      return new Promise(async (resolve, reject) => {
        const startTime = Date.now(); // Start time of the request
        try {
          let searchTermArr = searchTerm.split(" ");
          let delimetr =
            site.siteSearchUrl.includes("balka") ||
            site.siteSearchUrl.includes("book-ye") ||
            site.siteSearchUrl.includes("bukva") ||
            site.siteSearchUrl.includes("readeat")
              ? "+"
              : encodeURIComponent(" ");
          let searchTermEncrypted = searchTermArr.join(delimetr);
          let url = `${site.siteSearchUrl}${searchTermEncrypted}`;

          if (process.env.DEBUG === "true") {
            console.log(`${site.siteName}: ${url}`);
          }
          
          const response = await fetch(url);

          const data = await response.text();

          if (process.env.DEBUG === "true") {
            // Save fetched HTML to file
            fs.writeFileSync(`${site.siteName}.html`, data);
          }

          const $ = cheerio.load(data);

          const parent = $(site.containerSelector);
          const card = parent.children(site.itemSelector).first();
          const image = $(card).find(site.imageSelector).first().attr("src");
          const dataImg = $(card)
            .find(site.imageSelector)
            .first()
            .attr("data-src");

          let imgUrl;
          if (dataImg && !dataImg.includes("placeholder")) {
            imgUrl = dataImg;
          } else {
            imgUrl = image;
          }

          const title = $(card).find(site.titleSelector).first().text();
          const author = $(card).find(site.authorSelector).first().text();
          const price = $(card).find(site.priceSelector).first().text();
          const available = $(card).find(site.availabelSelector).first().text();
          const bookUrl = $(card)
            .find(site.bookUrlSelector)
            .first()
            .attr("href");

          const parsePrice = (string) => {
            return string
              .replace(/ /g, "")
              .replace("грн.", "")
              .replace("грн", "")
              .replace("₴", "")
              .trim();
          };

          if (Boolean(title)) {
            const endTime = Date.now(); // End time of the request
            const elapsedTime = endTime - startTime; // Calculate time difference
            resolve({
              source: site.siteName,
              image: imgUrl?.includes("http")
                ? imgUrl
                : `${site.siteUrl}${imgUrl}`,
              title,
              author,
              price: parsePrice(price),
              available: available || "В наявності",
              bookUrl: bookUrl?.includes("http")
                ? bookUrl
                : `${site.siteUrl}${bookUrl}`,
              benchmark: `${elapsedTime / 1000}s`, // Add benchmark to the result
            });
          } else {
            resolve(null);
          }
        } catch (error) {
          reject(error);
        }
      });
    }

    function startSearch() {
      const promises = sites.map((site) => fetchSearchResults(search, site));
      return Promise.all(promises);
    }

    const results = await startSearch();

    res.status(200).send({ results });
  } catch (e) {
    res.status(500).send();
  }
});

const askGemini = async (prompt) => {
  const queries = [
    "запропонуй 5 книг у вигляді json масиву об'єктів з полями name, author, shortDescription",
    "shortDescription має бути не менше 30 слів і не більше 40 слів",
    "мені потрібен тільки json об'єкт в результаті, ніякого зайвого тексту",
    "прибери всі подвійні лапки з результату",
    "значення полів у json повинні бути українською",
    "книги які повинні бути в українських онлайн крамницях",
  ];

  const query = queries.join(". ");
  const url = process.env.GOOGLE_APPS_SCRIPT_URL;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: `${query}${prompt}.` }),
  };
  const response = await fetch(url, options);
  const data = await response.json();

  if (process.env.DEBUG === "true") {
    console.log(data.prompt);
  }
  
  const text = data.candidates[0].content.parts[0].text;

  return text;
};

function extractBetweenBrackets(str) {
  const startIdx = str.indexOf("[");
  const endIdx = str.indexOf("]");

  if (startIdx === -1 || endIdx === -1) {
    return "";
  }

  return str.substring(startIdx, endIdx + 1);
}

function removeMultipleSpaces(str) {
  const regex = /\s{2,}/g;
  return str.replace(regex, "");
}

router.post("/gemini", async (req, res) => {
  try {
    checkBodyFields(req.body)
  } catch (error) {
    res.status(500).json(error.message);
  }
  
  try {
    const { prompt } = req.body;

    let text = await askGemini(prompt);

    const string = extractBetweenBrackets(text);
    const str1 = string.replaceAll("\n  ", "");
    let str2 = removeMultipleSpaces(str1);

    if (process.env.DEBUG === "true") {
      console.log(str2.indexOf('"'));
    }

    if (str2.indexOf('"') > 7) {
      str2 = str2
        .replaceAll("name", '"name"')
        .replaceAll("author", '"author"')
        .replaceAll("shortDescription", '"shortDescription"');
    }

    if (process.env.DEBUG === "true") {
      console.log(str2);
    }

    const json = JSON.parse(str2);
    res.status(200).send({ results: json });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
