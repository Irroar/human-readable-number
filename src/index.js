module.exports = function toReadable (number) {
    const dozensAndTeens = ["zero", "one" ,"two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundred = "hundred";
    
    if (number < 20) { return dozensAndTeens[number]; }
    
    let numberArray = number.toString().split('').map(Number);
    
    switch (numberArray.length) {
        case 2:
            return numberArray[numberArray.length - 1] === 0 ? 
                tens[numberArray[0] - 2] : 
                `${tens[numberArray[0] - 2]} ${dozensAndTeens[numberArray[1]]}`;
    
        case 3:
            return number%100 === 0 || number%100 === 100 ? `${dozensAndTeens[numberArray[0]]} ${hundred}` :
                number%100 < 20 ? 
                    `${dozensAndTeens[numberArray[0]]} ${hundred} ${dozensAndTeens[number%100]}` : 
                    numberArray[numberArray.length - 1] === 0 ?
                        `${dozensAndTeens[numberArray[0]]} ${hundred} ${tens[numberArray[1] - 2]}` :
                        `${dozensAndTeens[numberArray[0]]} ${hundred} ${tens[numberArray[1] - 2]} ${dozensAndTeens[number%10]}`;
        default:
            break;
    }
  
}
