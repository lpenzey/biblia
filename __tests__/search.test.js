const mockAxios = require("axios");
const search = require("../js/search");
const keys = require("../config/keys");
const searchResponse = require("../__fixtures__/searchResponse");

test("fetches results from google books api and formats correctly", () => {
  // Setup axios mock to respond with typical google books api response
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve(searchResponse.raw)
  );

  // execute search function with parameter "tolkein"
  return search.fetchBooks("tolkein").then(response => {
    // Response from fetchBooks should be a stringified array of book objects
    expect(response).toEqual(searchResponse.stringified);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://www.googleapis.com/books/v1/volumes?q=tolkein&startIndex=0&key=" +
        keys.googleBooksApiKey
    );
  });
});
test("increases the index by 10 when more books button is clicked", () => {});
