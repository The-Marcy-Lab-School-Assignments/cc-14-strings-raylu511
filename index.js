//write your code here
function stripUpperCase(string) {
    let lowerString = '';
    const range = 'AZ';
    const asciiOfA = range.charCodeAt(0);
    const asciiOfZ = range.charCodeAt(1);
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > asciiOfZ || string.charCodeAt(i) < asciiOfA) {
            lowerString += string[i];
        }
    }
         // Initialize empty string that holds non uppercased letters
         // Find ascii code of A to Z
         // Iterate through string
         // If char is not between the range
            // Concat to new string
    return lowerString;
}

console.log(stripUpperCase('Hello!'));              // 'ello!'
console.log(stripUpperCase('SevenEleven'));         // 'evenleven'
console.log(stripUpperCase("Don't play with Me!")); // 'ont play with e!'