import { numberToRoman } from "../src/numberToRoman";

describe("Número a romano", () => {
  it("debe convertir 1 a I", () => {
    expect(numberToRoman(1)).toBe("I");
  });
});
