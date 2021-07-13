const stringSlice = require("./");

test("slice simple strings", () => {
  const text = "Hello, World!";
  expect(stringSlice(text, 1, 5)).toBe(text.slice(1, 5));
  expect(stringSlice(text, 2, -1)).toBe(text.slice(2, -1));
  expect(stringSlice(text, 3)).toBe(text.slice(3));
});

test("slices emoji contained strings ", () => {
  const text = "😀😬😁😂😃😄😅😆😇😉😊";
  expect(stringSlice(text, 0, 1)).toBe("😀");
  expect(stringSlice(text, 5, 6)).toBe("😄");
  expect(stringSlice(text, 10, 11)).toBe("😊");
  expect(stringSlice(text, 2, 7)).toBe("😁😂😃😄😅");
  expect(stringSlice(text, 0)).toBe("😀😬😁😂😃😄😅😆😇😉😊");
});
