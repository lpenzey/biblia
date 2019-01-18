const { generateText } = require("../js/search");

test("Should output name and age", () => {
  const text = generateText("Lucas", 28);
  expect(text).toBe("Lucas (28 years old)");
});

// Should retrieve search query

// Should send request to google books API

//
