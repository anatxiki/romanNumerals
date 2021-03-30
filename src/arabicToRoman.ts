interface Value {
  arabic: number;
  roman: string;
}

const breakValues: Value[] = [
  {
    arabic: 1000,
    roman: "M",
  },
  {
    arabic: 900,
    roman: "CM",
  },
  {
    arabic: 500,
    roman: "D",
  },
  {
    arabic: 400,
    roman: "CD",
  },
  {
    arabic: 100,
    roman: "C",
  },
  {
    arabic: 90,
    roman: "XC",
  },
  {
    arabic: 50,
    roman: "L",
  },
  {
    arabic: 40,
    roman: "XL",
  },
  {
    arabic: 10,
    roman: "X",
  },
  {
    arabic: 9,
    roman: "IX",
  },
  {
    arabic: 5,
    roman: "V",
  },
  {
    arabic: 4,
    roman: "IV",
  },
  {
    arabic: 1,
    roman: "I",
  },
];

export function arabicToRoman(arabic: number): string {
  let roman = "";
  let remaining = arabic;

  for (let value of breakValues) {
    while (remaining >= value.arabic) {
      remaining -= value.arabic;
      roman += value.roman;
    }
  }

  return roman;
}
