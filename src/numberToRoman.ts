export function numberToRoman(numero: number): string {
  let romanNumber = "";

  if (numero === 4) {
    return "IV";
  }

  for (let i = 0; i < numero; i++) {
    romanNumber += "I";
  }

  return romanNumber;
}
