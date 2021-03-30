import { arabicToRoman } from "../src/arabicToRoman";

describe("Número a romano", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [13, "XIII"],
    [14, "XIV"],
    [15, "XV"],
    [27, "XXVII"],
    [40, "XL"],
    [46, "XLVI"],
    [67, "LXVII"],
    [84, "LXXXIV"],
    [94, "XCIV"],
    [175, "CLXXV"],
    [340, "CCCXL"],
    [400, "CD"],
    [500, "D"],
    [666, "DCLXVI"],
    [817, "DCCCXVII"],
    [919, "CMXIX"],
    [2751, "MMDCCLI"],
  ])("debe convertir el número %d a %s", (value, expected) => {
    expect(arabicToRoman(value)).toBe(expected);
  });
});
