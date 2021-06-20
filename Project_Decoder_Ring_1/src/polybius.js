// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusSquare = 
    { 
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55
  }
  
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    console.log(input);
    const realInput = input;
    let output = "";
    if (encode) {
      for (let i = 0; i < realInput.length; i++) {
        const letter = realInput[i];
        if (polybiusSquare[letter]) {
          output += polybiusSquare[letter];
        } else {
          output += letter;
        }
      }
    } else {
      const words = realInput.split(" ");
      if (words.join("").length % 2 !== 0) return false;
      for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        for (let j = 0; j < currentWord.length; j+=2) {
          let code = `${currentWord[j]}${currentWord[j+1]}`;
          if (code === "42") {
            output += "(i/j)"
          } else {
            for (let name in polybiusSquare) {
              if (polybiusSquare[name] == code) {
                output += name;
              } 
             
            }
          }
        }
        output += " ";
      }
    }
      
    return output.trim();
    
    // your solution code here
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
