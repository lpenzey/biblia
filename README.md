# Biblia

Biblia is a simple application that allows you to search for book titles through the Google Books API.

## Getting Started

To run the app locally follow these steps:

1. Download this repository by either downloading the zipped folder or cloning it, both using the green dropdown menu above. If you want to clone the repository you'll need to download and install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Once you've installed git, open your terminal and navigate to where you want to install this repository. You can see the contents of your current directory by running the command `ls` and you can change directories by running `cd folder_name`. For example, if you want to navigate to your desktop, you'd run `cd Desktop`. If you want to reverse out of a directory run `cd ..`. Once you're in the desired location, run the following command to clone the repository:

   ```
   $ git clone https://github.com/lpenzey/biblia.git
   ```

2. Now that you've downloaded the application's code you'll need to use npm (node package manager) to complete the installation. Npm is included when you install Node.js, which you can download [here](https://nodejs.org/en/download/).

3. Once you've installed Node (and therefore npm) open Biblia in a code editor such as [vscode](https://code.visualstudio.com/download). Vscode has an integrated terminal option that you can enable in the "view" tab by clicking on "Terminal". Back in your terminal (whether in vscode or otherwise), navigate to the Biblia folder (again using `ls` and `cd folder_name`) and run the following command to install the dependencies that this app relies on:

   ```
   npm install
   ```

4. This app relys on the Google Books API to retrieve book information. While you can run the app without an API key, obtaining one is recommended per the [API documentation](https://developers.google.com/books/docs/v1/using), which is where you can sign up for your own key. Additionally there are some tests that will fail if the API key is missing. Once you have the key, open `config/keys_dev.js` in your code editor and insert your key into the variable like so:

   ```
   module.exports = {
   googleBooksApiKey: "your_key_here"
   };
   ```

5. This app uses [browserify](https://www.npmjs.com/package/browserify) to build a javascript file (`bundle.js`) based on the app's entry point (`main.js`). Any time you make edits to any part of the app you'll need to rebuild `bundle.js` to see the changes reflected in the application. Once you've entered your api key and saved the file, run the following command in your terminal:

   ```
   npm run build
   ```

   This will place a new `bundle.js` file in the `biblia/public` folder, which also contains the `index.html` file and related assets.

6. Now that everything is installed and built it's time to see the app in action. You'll need to open it in a web browser, which you can do in a few ways. If you're working in vscode you can install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, and then right click on `index.html` in the `public` folder and select "open with Live Server". Alternatively you can simply navigate to wherever you installed Biblia on your computer and double click on `index.html` (which is in the `public` folder) to launch it in a browser. Now you can enter search queries and see which books are returned.

## Running the tests

1. To run the tests open your terminal and navigate to the project folder.

2. Once you've navigated to the folder enter the following command to run the test suite:

   ```
   npm test
   ```

## Next Steps/features to add

1. Additional unit and integration tests and eventually e2e testing
2. Error handling
3. Continuous integration for running test suites and deployment.
4. Edit book image links to use https rather than http.
5. Hide "more books" button once google books api stops returning new books.
6. Modal popup of more book information rather than an external site link.
7. Search by author or title.
8. Increase picture resolution (included in js/ui is a function that modifies the url to get a higher resolution image but some books only have thumbnails, resulting in a redirect)
