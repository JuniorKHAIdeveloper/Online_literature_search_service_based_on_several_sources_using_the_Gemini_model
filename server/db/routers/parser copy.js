const express = require("express");
const Site = require("../models/site");
const router = new express.Router();
const cheerio = require("cheerio");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const fs = require("fs").promises;
const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");
const { google } = require("googleapis");

router.post("/search", async (req, res) => {
  const { search } = req.body;
  const sites = await Site.find({});

  try {
    function fetchSearchResults(searchTerm, site) {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`${site.siteSearchUrl}${searchTerm}`);
          const data = await response.text();
          const $ = cheerio.load(data);

          const parent = $(site.containerSelector);
          const card = parent.children(site.itemSelector).first();

          const image = $(card).find(site.imageSelector).first().attr("src");
          const dataImg = $(card)
            .find(site.imageSelector)
            .first()
            .attr("data-src");

          let imgUrl;
          if (dataImg) {
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

router.post("/gemini", async (req, res) => {
  try {
    // const scriptId =
    //   "1goEaR7Nol4Pg4LrxVmwBEEnwqeEwWhi_0e5n3qVoRN55ffgPyOJbN0Bz";
    // If modifying these scopes, delete token.json.
    const SCOPES = ["https://www.googleapis.com/auth/script.scriptexecution"];
    // The file token.json stores the user's access and refresh tokens, and is
    // created automatically when the authorization flow completes for the first
    // time.
    const TOKEN_PATH = path.join(process.cwd(), "token.json");
    const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

    /**
     * Reads previously authorized credentials from the save file.
     *
     * @return {Promise<OAuth2Client|null>}
     */
    async function loadSavedCredentialsIfExist() {
      try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
      } catch (err) {
        return null;
      }
    }

    /**
     * Serializes credentials to a file compatible with GoogleAuth.fromJSON.
     *
     * @param {OAuth2Client} client
     * @return {Promise<void>}
     */
    async function saveCredentials(client) {
      const content = await fs.readFile(CREDENTIALS_PATH);
      const keys = JSON.parse(content);
      const key = keys.installed || keys.web;
      const payload = JSON.stringify({
        type: "authorized_user",
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
      });
      await fs.writeFile(TOKEN_PATH, payload);
    }

    /**
     * Load or request or authorization to call APIs.
     *
     */
    async function authorize() {
      let client = await loadSavedCredentialsIfExist();
      console.log(client)
      if (client) {
        return client;
      }
      client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
      });
      if (client.credentials) {
        await saveCredentials(client);
      }
      return client;
    }

    /**
     * Creates a new script project, upload a file, and log the script's URL.
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
    async function callAppsScript(auth) {
      const script = google.script({ version: "v1", auth });
      
      script.scripts.run({
        scriptId: "1SMBHFHnRCNez0wNIuUIItzj0EqoeX1IB-CFhCFn2h08Jr9AeHAqYGyZe",
        function: "myFunction",
        resource: {
          // Optional: Pass data to the Apps Script function
        }
      }, (err, res) => {
        if (err) {
          console.error('The API returned an error: ' + err);
          return;
        }
    
        console.log('Function result:', res.data);
      });
    }

    authorize().then(callAppsScript).catch(console.error);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

module.exports = router;
