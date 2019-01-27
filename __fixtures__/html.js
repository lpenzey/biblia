module.exports = {
  empty:
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
    "</div>"
  //withBooks:
};
