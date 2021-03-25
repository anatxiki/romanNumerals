import { numberToRoman } from "../src/numberToRoman";

describe("Número a romano", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
  ])("debe convertir el número %d a %s", (value, expected) => {
    expect(numberToRoman(value)).toBe(expected);
  });
});
