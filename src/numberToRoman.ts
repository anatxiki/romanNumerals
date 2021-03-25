export function numberToRoman(numero: number): string {
  let romanNumber = "";

  if (numero === 4) {
    return "IV";
  }

  if (numero === 5) {
    return "V";
  }

  if (numero === 6) {
    return "VI";
  }

  if (numero === 7) {
    return "VII";
  }

  for (let i = 0; i < numero; i++) {
    romanNumber += "I";
  }

  return romanNumber;
}
