const UI = {
  displayBooks() {
    console.log("Here are the books");
  },
  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
};

module.exports = UI;
