export function numberToRoman(numero: number): string {
  let romanNumber = "";
  let start = 0;

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

  if (numero >= 5) {
    numero = numero - 5;
    romanNumber += "V";
  }

  if (numero === 4) {
    numero = numero - 4;
    romanNumber += "IV";
  }

  return addStick(romanNumber, numero, start);
}

const addStick = (romanNumber: string, integerValue: number, start: number) => {
  for (let i = start; i < integerValue; i++) {
    romanNumber += "I";
  }

  return romanNumber;
};
