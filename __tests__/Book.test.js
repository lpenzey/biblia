const Book = require("../js/Book");

test("Should construct a new book", () => {
  const newBook = new Book(
    "Harry Potter",
    "JK Rowling",
    "www.imagelink.com",
    "www.previewlink.com",
    "123456789"
  );
  expect(newBook.title).toEqual("Harry Potter");
  expect(newBook.author).toEqual("JK Rowling");
  expect(newBook.imageLink).toEqual("www.imagelink.com");
  expect(newBook.previewLink).toEqual("www.previewlink.com");
  expect(newBook.isbn).toEqual("123456789");
});
