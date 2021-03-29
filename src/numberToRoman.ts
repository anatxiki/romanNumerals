export function numberToRoman(numero: number): string {
  let romanNumber = "";
  let start = 0;

  if (numero === 4) {
    return "IV";
  }

  if (numero >= 10) {
    numero = numero - 10;
    romanNumber = "X";
  }

  if (numero >= 5) {
    numero = numero - 5;
    romanNumber += "V";
  }

  return addStick(romanNumber, numero, start);
}

const addStick = (romanNumber: string, integerValue: number, start: number) => {
  for (let i = start; i < integerValue; i++) {
    romanNumber += "I";
  }

  return romanNumber;
};
