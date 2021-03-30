const romanNumbers = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

export function numberToRoman(numero: number): string {
  let romanNumber = "";

  if (numero >= 900) {
    numero -= 900;
    romanNumber += romanNumbers[900];
  }

  if (numero >= 500) {
    numero -= 500;
    romanNumber += romanNumbers[500];
  }

  if (numero === 400) {
    numero -= 400;
    romanNumber += romanNumbers[400];
  }

  while (numero >= 100) {
    numero -= 100;
    romanNumber += romanNumbers[100];
  }

  if (numero >= 90) {
    numero -= 90;
    romanNumber += romanNumbers[90];
  }

  if (numero >= 50) {
    numero -= 50;
    romanNumber += romanNumbers[50];
  }

  if (numero >= 40) {
    numero -= 40;
    romanNumber += romanNumbers[40];
  }

  while (numero >= 10) {
    numero -= 10;
    romanNumber += romanNumbers[10];
  }

  if (numero === 9) {
    return (romanNumber += romanNumbers[9]);
  }

  if (numero >= 5) {
    numero -= 5;
    romanNumber += romanNumbers[5];
  }

  if (numero === 4) {
    return (romanNumber += romanNumbers[4]);
  }

  while (numero >= 1) {
    numero -= 1;
    romanNumber += romanNumbers[1];
  }
  return romanNumber;
}
