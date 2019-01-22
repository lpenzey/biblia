const mockAxios = require("axios");
const search = require("../js/search");
const keys = require("../config/keys");

test("fetches data from google books", async () => {
  // Setup axios mock
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { items: "Harry Potter and the Goblet of Fire" }
    })
  );

  // work
  const books = await search.fetchBooks("Harry Potter and the Goblet of Fire");

  //expect
  expect(books).toEqual("Harry Potter and the Goblet of Fire");
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://www.googleapis.com/books/v1/volumes?q=Harry Potter and the Goblet of Fire&key=" +
      keys.googleBooksApiKey
  );
});
