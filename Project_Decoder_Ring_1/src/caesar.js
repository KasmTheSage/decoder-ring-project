// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];


  function caesar(input, shift, encode = true) {
    console.log(input);
    console.log(shift);
    const wordArray = [];
    if (!encode) {
      shift = -shift;
    }
    if (shift === 0 || shift > 25 || shift < -25) return false;
    if (shift < 0) shift += 26;
    const lowerCaseInput = input.toLowerCase();
     for (let i = 0; i < lowerCaseInput.length; i++) {
       let letterFromInput = lowerCaseInput[i];
       if (alphabet.includes(letterFromInput)) {
         const currentPosition = alphabet.indexOf(letterFromInput);
         let newPosition = (currentPosition + shift) % 26;
         wordArray.push(alphabet[newPosition]);
       } else {
         wordArray.push(letterFromInput);
       }
       
       
     }
    
    
    return wordArray.join("");
    // your solution code here
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
