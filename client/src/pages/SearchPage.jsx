import React from "react";
import ResultsTable from "../components/search/ResultsTable";
import Search from "../components/search/Search";
import Typography from "@mui/material/Typography";
import messages from "../helpers/messages";
import Loader from "../core/Loader";

const SearchPage = ({
  results,
  setResults,
  isAuth,
  isXsScreen = "false",
  setArtIntResults,
  isArtInt,
  setArtInt,
  setArtIntModalOpen,
  isSearching,
  setIsSearching,
  query,
  setQuery,
  setAlert,
}) => {
  const handleSubmit = () => {
    setIsSearching(true);
    if (!isArtInt) {
      fetch("/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: query }),
      })
      .then((response) => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(text) })
        }

        return response.json();
      })
        .then((data) => {
          setResults(data.results);
          setIsSearching(false);
        })
        .catch((error) => {
          console.error(error);
          setIsSearching(false);
          setAlert({ type: "error", message: JSON.parse(error.message) });
        });
    } else {
      fetch("/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: query }),
      })
        .then((response) => {
          if (!response.ok) {
            return response.text().then(text => { throw new Error(text) })
          }
  
          return response.json();
        })
        .then((data) => {
          setArtIntResults(data.results);
          setIsSearching(false);
          setArtIntModalOpen(true);
        })
        .catch((error) => {
          console.error(error);
          setIsSearching(false);
          setAlert({ type: "error", message: JSON.parse(error.message) });
        });
    }
  };

  const renderMessage = (messages, message, index) => {
    const isLastMessage = messages.search.length === index + 1;

    if (isXsScreen && !isLastMessage) {

      return (
        <>
          <h4 style={{ textAlign: "justify" }}>{message}</h4>
        </>
      );
    } else if (isXsScreen && isLastMessage && !isAuth) {

      return (
        <>
          <h4 style={{ textAlign: "justify" }}>{message}</h4>
        </>
      );
    } else if (isLastMessage && !isAuth) {

      return (
        <>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "justify" }}>
            {message}
          </Typography>
          <br />
        </>
      );
    } else if (!isLastMessage) {

      return (
        <>
          <Typography variant="h6" gutterBottom sx={{ textAlign: "justify" }}>
            {message}
          </Typography>
          <br />
        </>
      );
    }
  };

  return (
    <>
      {!Boolean(results?.length) && (
        <>
          {messages.search.map((message, index) => {
            const renderedMessage = renderMessage(messages, message, index);

            return renderedMessage;
          })}
        </>
      )}
      <Search
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        isArtInt={isArtInt}
        setArtInt={setArtInt}
        results={results}
        isAuth={isAuth}
      />
      {isSearching && <Loader isArtInt={isArtInt} />}
      {Boolean(results?.length) && (
        <ResultsTable
          isXsScreen={isXsScreen}
          results={results}
          isAuth={isAuth}
        />
      )}
    </>
  );
};

export default SearchPage;
