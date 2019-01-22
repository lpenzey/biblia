const Book = require("../js/Book");

test("Should construct a new book", () => {
  const newBook = new Book("Harry Potter", "JK Rowling", "123456789");
  expect(newBook.title).toEqual("Harry Potter");
  expect(newBook.author).toEqual("JK Rowling");
  expect(newBook.isbn).toEqual("123456789");
});
