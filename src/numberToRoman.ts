export function numberToRoman(numero: number): string {
  let romanNumber = "";

  if (numero === 4) {
    return "IV";
  }

  if (numero >= 5) {
    romanNumber = "V";
    for (let i = 5; i < numero; i++) {
      romanNumber += "I";
    }
  } else {
    for (let i = 0; i < numero; i++) {
      romanNumber += "I";
    }
  }

  return romanNumber;
}
