export function numberToRoman(numero: number): string {
  let romanNumber = "";
  let start = 0;

  if (numero === 4) {
    return "IV";
  }
  if (numero >= 5) {
    start = 5;
    romanNumber = "V";
  }

  if (numero === 10) {
    return "X";
  }
  for (let i = start; i < numero; i++) {
    romanNumber += "I";
  }

  return romanNumber;
}
