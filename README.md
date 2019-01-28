# Biblia

Biblia is a simple application that allows you to search for book titles through the Google Books API.

## Getting Started

To run the app locally download the repository and install dependencies by running `npm install`.

This app relys on the Google Books API to retrieve book information, and you'll need to plug in an API key (which you can get [here](https://console.developers.google.com/apis/credentials)). Once you have the key, open `config/keys_dev.js` and insert your key into the variable.

This app uses [browserify](https://www.npmjs.com/package/browserify) to build a compiled javascript file based on the app's entry point (main.js). Once you've entered your api key and saved, you'll need to recompile `bundle.js`. To do so, run `npm run build` to recompile the code.

## Running the tests

After you've installed the dependencies, cd into the project folder and enter `npm test` to run the test suites.

## Next Steps/features to add

1. Additional unit and integration tests and eventually e2e testing
2. Error handling
3. Continuous integration for running test suites and deployment.
4. Edit book image links to use https rather than http.
5. Hide "more books" button once google books api stops returning new books.
6. Modal popup of more book information rather than an external site link.
7. Search by author or title.
8. Increase picture resolution (included in js/ui is a function that modifies the url to get a higher resolution image but some books only have thumbnails, resulting in a redirect)
