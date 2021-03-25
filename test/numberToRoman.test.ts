import { numberToRoman } from "../src/numberToRoman";

describe("Número a romano", () => {
  it("debe convertir el número 1 a I", () => {
    expect(numberToRoman(1)).toBe("I");
  });

  it("debe convertir el número 2 a II", () => {
    expect(numberToRoman(2)).toBe("II");
  });

  it("debe convertir el número 3 a III", () => {
    expect(numberToRoman(3)).toBe("III");
  });

  it("devuelve IV para el número natural 4", () => {
    expect(numberToRoman(4)).toBe("IV");
  });

  it("devuelve V para el número natural 5", () => {
    expect(numberToRoman(5)).toBe("V");
  });
});
