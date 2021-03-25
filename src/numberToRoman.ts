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

  if (numero >= 10) {
    start = 10;
    romanNumber = "X";
  }

  return addStick(romanNumber, numero, start);
}

const addStick = (romanNumber: string, integerValue: number, start: number) => {
  for (let i = start; i < integerValue; i++) {
    romanNumber += "I";
  }

  return romanNumber;
};
