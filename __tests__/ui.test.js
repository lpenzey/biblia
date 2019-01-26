const UI = require("../js/ui");
const bookObject = require("../__fixtures__/books");
const handlebars = require("../__fixtures__/handlebars");

// displayBook gets the the Handlebars template from the DOM
test("displayBook gets Handlebars template from document", () => {
  // Set up document body
  document.body.innerHTML =
    '<script id="book-template" type="text/x-handlebars-template">' +
    '<div class="card-deck">' +
    '<div class="card" style="width: 10rem;">' +
    '<a href="{{previewLink}}">' +
    '<img class="card-img-top" src="{{imageLink}}" alt="Book Cover">' +
    "</a>" +
    '<div class="card-body">' +
    '<h5 class="card-title">{{title}}</h5>' +
    '<p class="card-text">Written by: {{author}}</p>' +
    '<p class="card-text">Published by: {{publishingCompany}}</p>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</script>" +
    '<div class="container">' +
    '<ul class="books">' +
    '<div class="row" id="book-list"></div>' +
    "</ul>" +
    "</div>";

  // Instantiate complete book object
  const book = bookObject.complete;

  // Pass book into displayBook function
  UI.displayBook(book);

  // Expect that the newly formatted html is appended to the #book-list div in the DOM
  expect(document.querySelector("#book-list").innerHTML).toEqual(
    handlebars.complete
  );
  expect(book).toBe();
});

// displayBook compiles an appropriate handlebars template

//displayBook appends the new handlebars template to #book-list

// Display stored books checks local storage for a user's books
test("Handles case where there is no title listed", () => {
  expect(2).toBe(1);
});

test("Handles case where there is no author listed", () => {});

test("Handles case where there is no publishing company listed", () => {});
// clearFields clears the fields of the form
test("correctly returns a book with multiple authors", () => {});
