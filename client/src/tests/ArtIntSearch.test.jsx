import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Search from "../components/search/Search";
import React from "react";
import SearchArtIntModal from "../components/search/SearchArtIntModal";

// Mocking useState hook
jest.mock("react", () => {
  const originalModule = jest.requireActual("react");
  return {
    ...originalModule,
    useState: jest.fn(),
  };
});

jest.setTimeout(30000);

let geminiResults = [];


describe("ArtIntSearch", () => {
  it("shows the text when isArtInt changes to true", () => {
    const setQuery = jest.fn();
    const handleSubmit = jest.fn();
    const query = "";
    const results = [];

    // Mocking useState return values
    const mockSetIsArtInt = jest.fn();
    React.useState.mockReturnValue([false, mockSetIsArtInt]);

    const { getByTestId, queryByText, rerender } = render(
      <Search
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        results={results}
        isAuth={true}
      />
    );

    // Verify the text is not initially visible
    expect(queryByText("Розпочніть свою подорож разом з Gemini! Введіть довільний запит, наприклад, книга про чарівний світ.")).toBeNull();

    // Toggle the switch
    const searchSwitcher = getByTestId("art-int-search-switcher");
    fireEvent.click(searchSwitcher);

    // Check if the mock setter function has been called
    expect(mockSetIsArtInt).toHaveBeenCalledWith(true);

    // Simulate a state change to true
    rerender(
      <Search
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        results={results}
        isArtInt={true}
        isAuth={true}
      />
    );

    // Verify the text is now visible
    expect(
      queryByText("Розпочніть свою подорож разом з Gemini! Введіть довільний запит, наприклад, книга про чарівний світ.")
    ).toBeInTheDocument();
  });

  it("search input", () => {
    const setQuery = jest.fn();
    const handleSubmit = jest.fn();
    const query = "";
    const results = [];

    // Mocking useState return values
    const mockSetIsArtInt = jest.fn();
    React.useState.mockReturnValue([true, mockSetIsArtInt]);

    const { getByTestId } = render(
      <Search
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        results={results}
      />
    );

    const searchInput = getByTestId("search");
    fireEvent.change(searchInput, { target: { value: "гаррі поттер" } });
    expect(searchInput.value).toBe("гаррі поттер");

    expect(setQuery).toHaveBeenCalledTimes(1);
    expect(setQuery).toHaveBeenCalledWith("гаррі поттер");

    const searchButton = getByTestId("search-button");
    fireEvent.click(searchButton);

    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });

  it("gemini api", async () => {
    const response = await fetch("http://127.0.0.1:3000/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: "нікола тесла" }),
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data.results)).toBe(true);
    expect(data.results.length).toBe(5);

    geminiResults = data.results;
  });

  it("render gemini results in modal", async () => {
    // Check if geminiResults is defined and not null
    expect(geminiResults).toBeDefined();

    const setAlert = jest.fn();
    const setResults = jest.fn();
    const setModalOpen = jest.fn();
    const setIsSearching = jest.fn();

    const { queryByText } = render(
      <SearchArtIntModal
        test={true}
        modalOpen={true}
        data={geminiResults}
        setAlert={setAlert}
        setResults={setResults}
        setModalOpen={setModalOpen}
        setIsSearching={setIsSearching}
      />
    );

    // Verify the text is visible
    expect(queryByText("Результати:")).not.toBeNull();

    const elements = document.getElementsByClassName("gemini-result");

    // Check if there are exactly 5 elements with the class name "my-element"
    expect(elements.length).toBe(5);

    // Click the first element
    fireEvent.click(elements[0]);

    expect(setModalOpen).toHaveBeenCalledTimes(1);
    expect(setModalOpen).toHaveBeenCalledWith(false);
    expect(setIsSearching).toHaveBeenCalledTimes(1);
    expect(setIsSearching).toHaveBeenCalledWith(true);
  });
});
