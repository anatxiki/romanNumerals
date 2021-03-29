export function numberToRoman(numero: number): string {
  let romanNumber = "";
  let start = 0;

  while (numero >= 10) {
    if (numero >= 10) {
      numero = numero - 10;
      romanNumber += "X";
    }
  }
  if (numero >= 5) {
    numero = numero - 5;
    romanNumber += "V";
  }

  if (numero === 4) {
    return (romanNumber += "IV");
  }

  return addStick(romanNumber, numero, start);
}

const addStick = (romanNumber: string, integerValue: number, start: number) => {
  for (let i = start; i < integerValue; i++) {
    romanNumber += "I";
  }

  return romanNumber;
};
