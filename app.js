let numberOfDice = 5;

let result = "";
let dice;

for (let i = 1; i <= numberOfDice; i++) {
  dice = Math.floor(Math.random() * 6 + 1);

  if (i == numberOfDice) {
    result += `${dice}`;
  } else {
    result += `${dice}-`;
  }
}

console.log(result);

// ------------------------------------password generator

function generatePassword() {
  const passwordLength = 8;

  const allowLowerCases = true;
  const allowUpperCases = true;
  const allowNumbers = true;
  const allowSymbols = true;

  const lowerCases = "abcdefghijklmnopqrstuvwxyz";
  const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*_+=-";

  let allowedChars = "";
  let randomIndex;
  let password = "";

  if (passwordLength < 0) {
    console.log("Password length can not be below zero.");
    password = "no password was set";
  } else if (passwordLength < 5) {
    console.log("Password length must be at least 5 characters.");
    password = "no password was set";
  } else {
    allowedChars += allowLowerCases ? lowerCases : "";
    allowedChars += allowUpperCases ? upperCases : "";
    allowedChars += allowNumbers ? numbers : "";
    allowedChars += allowSymbols ? symbols : "";

    // if (allowLowerCases) {
    //   allowedChars += lowerCases;
    // }

    // if (allowUpperCases) {
    //   allowedChars += upperCases;
    // }

    // if (allowNumbers) {
    //   allowedChars += numbers;
    // }

    // if (allowSymbols) {
    //   allowedChars += symbols;
    // }

    for (let i = 0; i < passwordLength; i++) {
      randomIndex = Math.floor(Math.random() * (allowedChars.length - 1));
      password += allowedChars[randomIndex];
    }
  }

  return password;
}

let password = generatePassword();
console.log(`Your random generated password is: ${password}`);

// console.log(allowedChars);
// console.log(allowedChars.length);
// console.log(allowedChars[75]);
// console.log(Math.floor(Math.random() * allowedChars.length));
