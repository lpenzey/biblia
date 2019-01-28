const store = require("../js/store");

test("sets title and index and can retrieve params", () => {
  store.setSearchParams("tolkein", "0");
  bookQuery = store.getLatestQuery();
  index = store.getLatestIndex();
  expect(bookQuery).toEqual("tolkein");
  expect(index).toStrictEqual(0);
});

test("increments index variable by 10", () => {
  store.setSearchParams("tolkein", "0");
  index = store.incrementIndex(10);
  expect(index).toStrictEqual(10);
});
