const UI = require("../js/ui");
const bookObject = require("../__fixtures__/books");
const handlebars = require("../__fixtures__/handlebars");
const html = require("../__fixtures__/html");

test("displayBook gets Handlebars template from document and displays correctly", () => {
  document.body.innerHTML = html.empty;

  const book = bookObject.complete;

  UI.displayBook(book);

  expect(document.querySelector("#book-list").innerHTML).toEqual(
    handlebars.complete
  );
});
