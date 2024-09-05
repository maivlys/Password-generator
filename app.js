function generatePassword() {
  const passwordLength = document.getElementById("pswd-length").value;

  const allowLowerCases = document.getElementById("lowerC");
  const allowUpperCases = document.getElementById("upperC");
  const allowNumbers = document.getElementById("nums");
  const allowSymbols = document.getElementById("syms");

  const lowerCases = "abcdefghijklmnopqrstuvwxyz";
  const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*_+=-";

  let allowedChars = "";
  let randomIndex;
  let password = "";

  let msg = document.getElementById("msg");
  let retryMsg = document.getElementById("retryMsg");

  allowedChars += allowLowerCases.checked ? lowerCases : "";
  allowedChars += allowUpperCases.checked ? upperCases : "";
  allowedChars += allowNumbers.checked ? numbers : "";
  allowedChars += allowSymbols.checked ? symbols : "";

  // if (allowLowerCases) {
  //   allowedChars += lowerCases;
  // }

  if (passwordLength < 0) {
    retryMsg.textContent = "Password length can not be set below zero";
    return;
  } else if (passwordLength < 4 || passwordLength > 20) {
    retryMsg.textContent =
      "Password length has to be set between 4-20 characters.";
    msg.textContent = "password";
    document.getElementById("msgDisplay").style.color = "#c4c4c4";
    return;
  }

  if (allowedChars === "") {
    retryMsg.textContent =
      "You have to select at least one group of characters";
    msg.textContent = "password";
    document.getElementById("msgDisplay").style.color = "#c4c4c4";
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * (allowedChars.length - 1));
    password += allowedChars[randomIndex];
  }

  msg.textContent = password;
  retryMsg.textContent =
    "If you don't like me, feel free to try again until you do! :)";
  document.getElementById("msgDisplay").style.color = "#1f1f1f";
}

// let password = generatePassword();
// console.log(`Your random generated password is: ${password}`);

const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", generatePassword);
