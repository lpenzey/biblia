const UI = require("../js/ui");
const bookObject = require("../__fixtures__/books");
const handlebars = require("../__fixtures__/handlebars");
const html = require("../__fixtures__/html");

// displayBook gets the the Handlebars template from the DOM
test("displayBook gets Handlebars template from document", () => {
  // Set up document body
  document.body.innerHTML = html.empty;

  // Instantiate complete book object
  const book = bookObject.complete;

  // Pass book into displayBook function
  UI.displayBook(book);

  // Expect that the newly formatted html is appended to the #book-list div
  expect(document.querySelector("#book-list").innerHTML).toEqual(
    handlebars.complete
  );
});

// displayBook compiles an appropriate handlebars template

//displayBook appends the new handlebars template to #book-list
test("Handles case where there is no author listed", () => {});
test("Handles case where there is no publishing company listed", () => {});
test("correctly returns a book with multiple authors", () => {});
// clearFields clears the fields of the form
