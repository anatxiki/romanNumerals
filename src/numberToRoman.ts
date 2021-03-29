export function numberToRoman(numero: number): string {
  let romanNumber = "";
  let start = 0;

  if (numero >= 900) {
    numero -= 900;
    romanNumber += "CM";
  }

  if (numero >= 500) {
    numero -= 500;
    romanNumber += "D";
  }

  if (numero === 400) {
    numero -= 400;
    romanNumber += "CD";
  }

  while (numero >= 100) {
    numero -= 100;
    romanNumber += "C";
  }

  if (numero >= 90) {
    numero -= 90;
    romanNumber += "XC";
  }

  if (numero >= 50) {
    numero -= 50;
    romanNumber += "L";
  }

  if (numero >= 40) {
    numero -= 40;
    romanNumber += "XL";
  }

  while (numero >= 10) {
    numero -= 10;
    romanNumber += "X";
  }

  if (numero === 9) {
    return (romanNumber += "IX");
  }

  if (numero >= 5) {
    numero -= 5;
    romanNumber += "V";
  }

  if (numero === 4) {
    return (romanNumber += "IV");
  }

  return addStick(numero, romanNumber);
}

const addStick = (numero: number, romanNumber: string): any => {
  if (numero === 0) {
    return romanNumber;
  }

  romanNumber += "I";
  return addStick(numero - 1, romanNumber);
};
