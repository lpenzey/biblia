# Biblia: Pocket Bookshelf

Biblia is a simple application for searching for book titles through the Google Books API.

## Getting Started

This app was developed in vscode using the live server extension. To run the app locally, clone this repo and open in vscode. Assuming you already have Node.js installed on your computer, cd into the project folder and run `npm install` to install the dependencies.

Now the app will run, but a Google Books API key is necessary to actually perform book searches and pass certain tests. You can obtain an API key from google [here](https://console.developers.google.com/apis/credentials). Once you have the key, open `config/keys_dev.js` and insert your key.

This app uses [browserify](https://www.npmjs.com/package/browserify) to build a `bundle.js` file in order to run node-style `require` statements in the browser. Once you've entered your api key and saved, you'll need to recompile `bundle.js`. To do so, install browserify by entering `npm install browserify` and then run `browserify main.js > bundle.js`.

Then download the live server extension if not already installed and click 'Go Live', or right click on `index.html` and select 'Open with live server'.

## Running the tests

After you've installed the dependencies, cd into the project folder and enter `npm test` to run the test suites.

## Author

**Lucas PenzeyMoog**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
