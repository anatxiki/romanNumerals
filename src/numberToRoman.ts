export function numberToRoman(numero: number): string {
  let romanNumber = "";
  for (let i = 0; i < numero; i++) {
    romanNumber += "I";
  }

  return romanNumber;
}
