const UI = {
  saiHi: console.log("hi"),
  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
};

module.exports = UI;
