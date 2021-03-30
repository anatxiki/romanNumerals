const breakNumbers: Array<[number, string]> = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export function numberToRoman(numero: number): string {
  let result = "";

  for (let [breakArabNumber, breakRomanNumber] of breakNumbers) {
    while (numero >= breakArabNumber) {
      numero -= breakArabNumber;
      result += breakRomanNumber;
    }
  }

  return result;
}
