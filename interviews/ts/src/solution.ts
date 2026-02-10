const numbers: string[] = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen"
    ];
    
const multipliesOfTen: string[] = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
] ;

function trimNumber(price: string): number {
    const clearedPrice: string = price.trim().replace(/[,\s.\s_]/g, "");
    
    if (clearedPrice.length === 0) {
        throw new Error("Price cannot be empty");
    }
    
    if (/[^0-9]/.test(clearedPrice)) {
      throw new Error("Price includes invalid characters");
    }

    if (Number(clearedPrice) < 0) {
        throw new Error("Price cannot be negative");
    }

    return Number(clearedPrice);
}

function convertToString(price: number): string {
    if (price === 0) {
        return "zero";
    }
  let returnString = "";

  const thousands = price % 1000000;                 
  const millionCount = Math.floor((price - thousands) / 1000000); 

  const hundredCount = thousands % 1000;             
  const thousandCount = Math.floor((thousands - hundredCount) / 1000);

  if (millionCount !== 0) {
    returnString += `${resolveThreeDigits(millionCount)} million`;
  }

  if (thousandCount !== 0) {
    if (returnString !== "") returnString += " ";
    returnString += `${resolveThreeDigits(thousandCount)} thousand`;
  }

  if (hundredCount !== 0) {
    if (returnString !== "") returnString += " ";
    returnString += `${resolveThreeDigits(hundredCount)}`;
  }

  return returnString.trim();
}


function resolveThreeDigits(givenNumber: number): string {
    let returnString = "";
    const modTen = givenNumber % 100;
    const hundreds = Math.floor(givenNumber / 100);
    
    const ones = modTen % 10;
    const tens = Math.floor(modTen / 10);    
    
    if (hundreds !== 0) {
        returnString += `${numbers[hundreds]} hundred`;
        if (modTen !== 0) returnString += " "; 
    }
    
    if (givenNumber % 100 === 0 && hundreds !== 0) {
        return returnString;
    }

    if (tens > 1) {
        returnString += `${multipliesOfTen[tens-2]}`;
        if (ones !== 0) {
            returnString += ` ${numbers[ones]}`;
        }
    } else if (modTen > 0) { // numbers[0] is "" but avoid adding it unnecessarily if logic changes
        returnString += `${numbers[modTen]}`;
    }
    
    return returnString;
}


export function count(price: string): string { // Added return type
    const stringToNumber = trimNumber(price);
    return convertToString(stringToNumber); // Return instead of log
}
