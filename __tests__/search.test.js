const mockAxios = require("axios");
const search = require("../js/search");
const keys = require("../config/keys");
const searchResponse = require("../__fixtures__/searchResponse");

test("fetches results from google books api", () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve(searchResponse.raw)
  );

  let term = "tolkein";
  let index = 0;

  return search.fetchBooks("tolkein").then(response => {
    expect(response).toEqual(searchResponse.raw);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://www.googleapis.com/books/v1/volumes",
      {
        params: {
          q: term,
          startIndex: index,
          key: keys.googleBooksApiKey
        }
      }
    );
  });
});

test("fetches results from google books api with start index of 10", () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve(searchResponse.raw)
  );

  let term = "tolkein";
  let index = 10;

  return search.fetchBooks("tolkein", 10).then(response => {
    expect(response).toEqual(searchResponse.raw);
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://www.googleapis.com/books/v1/volumes",
      {
        params: {
          q: term,
          startIndex: index,
          key: keys.googleBooksApiKey
        }
      }
    );
  });
});

test("parseBooks correctly parses full response object", () => {
  booksArr = search.parseBooks(searchResponse.raw);
  expect(booksArr).toEqual(searchResponse.parsed);
});

test("parseBooks rejects response object with undefined image field", () => {
  booksArr = search.parseBooks(searchResponse.noImageLinks);
  expect(booksArr).toEqual([]);
});
