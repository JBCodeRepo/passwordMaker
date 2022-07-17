// ----------------------------------------------------------------------------
//Global variables
//-----------------------------------------------------------------------------
const cb_includeNumbers = document.querySelector("#cb-include-numbers");
const cb_includeLowercase = document.querySelector("#cb-include-lowercase");
const cb_includeUppercase = document.querySelector("#cb-include-uppercase");
const cb_includeSymbols = document.querySelector("#cb-include-symbols");
const sb_pwLength = document.querySelector("#sb-pw-length");
let spn_pw = document.querySelector("#spn-pw");
const btn_createPw = document.querySelector("#btn-create-pw");
let tb_password = document.querySelector("#tb-password");
const spn_clarification = document.querySelector("#spn-clarification");


//-----------------------------------------------------------------------------
//Functions
//-----------------------------------------------------------------------------

//********************************************************/
//Name: createRandomNumber
//Description: Creates a random number, based on a provided max
//********************************************************/
function createRandomNumber(maxNumber) {
  let theNumber = Math.floor(Math.random() * maxNumber) + 1;
  return theNumber;
}

//********************************************************/
//Name: pickLetter
//Description: Returns a letter, based on input
//********************************************************/
function pickLetter(theNumber) {
  let character = "";
  switch (theNumber) {
    case 1:
      character = "a";
      break;
    case 2:
      character = "b";
      break;
    case 3:
      character = "c";
      break;
    case 4:
      character = "d";
      break;
    case 5:
      character = "e";
      break;
    case 6:
      character = "f";
      break;
    case 7:
      character = "g";
      break;
    case 8:
      character = "h";
      break;
    case 9:
      character = "i";
      break;
    case 10:
      character = "j";
      break;
    case 11:
      character = "k";
      break;
    case 12:
      character = "l";
      break;
    case 13:
      character = "m";
      break;
    case 14:
      character = "n";
      break;
    case 15:
      character = "o";
      break;
    case 16:
      character = "p";
      break;
    case 17:
      character = "q";
      break;
    case 18:
      character = "r";
      break;
    case 19:
      character = "s";
      break;
    case 20:
      character = "t";
      break;
    case 21:
      character = "u";
      break;
    case 22:
      character = "v";
      break;
    case 23:
      character = "w";
      break;
    case 24:
      character = "x";
      break;
    case 25:
      character = "y";
      break;
    case 26:
      character = "z";
      break;
  }
  return character;
}

//********************************************************/
//Name: pickUppercaseLetter
//Description: Returns an uppercase letter, based on input
//********************************************************/
function pickUppercaseLetter(theNumber) {
  let character = "";
  switch (theNumber) {
    case 1:
      character = "a";
      break;
    case 2:
      character = "b";
      break;
    case 3:
      character = "c";
      break;
    case 4:
      character = "d";
      break;
    case 5:
      character = "e";
      break;
    case 6:
      character = "f";
      break;
    case 7:
      character = "g";
      break;
    case 8:
      character = "h";
      break;
    case 9:
      character = "i";
      break;
    case 10:
      character = "j";
      break;
    case 11:
      character = "k";
      break;
    case 12:
      character = "l";
      break;
    case 13:
      character = "m";
      break;
    case 14:
      character = "n";
      break;
    case 15:
      character = "o";
      break;
    case 16:
      character = "p";
      break;
    case 17:
      character = "q";
      break;
    case 18:
      character = "r";
      break;
    case 19:
      character = "s";
      break;
    case 20:
      character = "t";
      break;
    case 21:
      character = "u";
      break;
    case 22:
      character = "v";
      break;
    case 23:
      character = "w";
      break;
    case 24:
      character = "x";
      break;
    case 25:
      character = "y";
      break;
    case 26:
      character = "z";
      break;
  }
  //Capitalize
  character = character.toUpperCase();

  return character;
}

//********************************************************/
//Name: pickSymbol
//Description: Returns a letter, based on input
//********************************************************/
function pickSymbol(theNumber) {
  let character = "";
  switch (theNumber) {
    case 1:
      character = "~";
      break;
    case 2:
      character = "!";
      break;
    case 3:
      character = "@";
      break;
    case 4:
      character = "#";
      break;
    case 5:
      character = "$";
      break;
    case 6:
      character = "%";
      break;
    case 7:
      character = "^";
      break;
    case 8:
      character = "&";
      break;
    case 9:
      character = "*";
      break;
    case 10:
      character = "(";
      break;
    case 11:
      character = ")";
      break;
    case 12:
      character = "-";
      break;
    case 13:
      character = "_";
      break;
    case 14:
      character = "=";
      break;
    case 15:
      character = "+";
      break;
    case 16:
      character = "[";
      break;
    case 17:
      character = "]";
      break;
    case 18:
      character = "{";
      break;
    case 19:
      character = "}";
      break;
    case 20:
      character = "<";
      break;
    case 21:
      character = ">";
      break;
    case 22:
      character = ",";
      break;
    case 23:
      character = ".";
      break;
    case 24:
      character = "?";
      break;
    case 25:
      character = "/";
      break;
    case 26:
      character = ";";
      break;
    case 27:
      character = ":";
      break;
    case 28:
      character = "'";
      break;
    case 26:
      character = '"';
      break;
    case 26:
      character = "\\";
      break;
    case 26:
      character = "|";
      break;
  }
  return character;
}

//********************************************************/
//Name: makeNumberPassword
//Description: Creates a password with only numbers
//********************************************************/
function makeNumberPassword(characterGenerationFunction) {
  let passwordArray = [];
  for (let i = 0; i < sb_pwLength.value; i++) {
    passwordArray.push(createRandomNumber(9));
  }
  let password = passwordArray.join("");
  return password;
}

//********************************************************/
//Name: makSymbolPassword
//Description: Creates a password with only numbers
//********************************************************/
function makeSymbolPassword(characterGenerationFunction) {
  let passwordArray = [];
  for (let i = 0; i < sb_pwLength.value; i++) {
    passwordArray.push(pickSymbol(createRandomNumber(26)));
  }
  let password = passwordArray.join("");
  return password;
}

//********************************************************/
//Name: makeLetterPassword
//Description: Creates a password with only letters (could be all uppercase or all lowercase)
//********************************************************/
function makeLetterPassword(characterGenerationFunction) {
  let passwordArray = [];
  let password = "";
  if (cb_includeUppercase.checked) {
    for (let i = 0; i < sb_pwLength.value; i++) {
      passwordArray.push(pickUppercaseLetter(createRandomNumber(26)));
    }
    password = passwordArray.join("");
  } else {
    for (let i = 0; i < sb_pwLength.value; i++) {
      passwordArray.push(pickLetter(createRandomNumber(26)));
    }
    password = passwordArray.join("");
  }
  return password;
}

//********************************************************/
//Name: makeNumbersAndSymbolsPassword(){
//Description: Creates a password with numbers and symbols
//********************************************************/
function makeNumbersAndSymbolsPassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 2); i++) {
    let choice = createRandomNumber(2);
    if (choice == 1) {
      character = pickSymbol(createRandomNumber(26));
    } else {
      character = createRandomNumber(9);
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: makeMixedLetterPassword
//Description: Creates a password with uppercase and lowercase
//********************************************************/
function makeMixedLetterPassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 2); i++) {
    let choice = createRandomNumber(2);
    if (choice == 1) {
      character = pickLetter(createRandomNumber(26));
    } else {
      character = pickUppercaseLetter(createRandomNumber(26));
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: makeNumbersAndLowercasePassword
//Description: CCreates a password with numbers and lowercase
//********************************************************/
function makeNumbersAndLowercasePassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 2); i++) {
    let choice = createRandomNumber(2);
    if (choice == 1) {
      character = pickLetter(createRandomNumber(26));
    } else {
      character = createRandomNumber(9);
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: makeNumbersAndUppercasePassword
//Description: Creates a password with numbers and uppercase
//********************************************************/
function makeNumbersAndUppercasePassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 2); i++) {
    let choice = createRandomNumber(2);
    if (choice == 1) {
      character = pickUppercaseLetter(createRandomNumber(26));
    } else {
      character = createRandomNumber(9);
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: makeMixedLetterAndNumberPassword
//Description: Creates a password with uppercase and lowercase numbers, and numbers
//********************************************************/
function makeMixedLetterAndNumberPassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 3); i++) {
    let choice = createRandomNumber(3);
    if (choice == 1) {
      character = pickLetter(createRandomNumber(26));
    } else if (choice == 2) {
      character = pickUppercaseLetter(createRandomNumber(26));
    } else {
      character = createRandomNumber(9);
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: makeNumberSymbolUppercasePassword
//Description: Creates a password with symbols, uppercase, and numbers
//********************************************************/
function makeNumberSymbolUppercasePassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 3); i++) {
    let choice = createRandomNumber(3);
    if (choice == 1) {
      character = pickSymbol(createRandomNumber(26));
    } else if (choice == 2) {
      character = pickUppercaseLetter(createRandomNumber(26));
    } else {
      character = createRandomNumber(9);
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: makeNumberSymbolLowercasePassword
//Description: Creates a password with symbols, lowercase, and numbers
//********************************************************/
function makeNumberSymbolLowercasePassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 3); i++) {
    let choice = createRandomNumber(3);
    if (choice == 1) {
      character = pickSymbol(createRandomNumber(26));
    } else if (choice == 2) {
      character = pickLetter(createRandomNumber(26));
    } else {
      character = createRandomNumber(9);
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: makeAllCharacterPassword
//Description: Creates a password symbols, uppercase, lowercase, and numbers
//********************************************************/
function makeAllCharacterPassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 4); i++) {
    let choice = createRandomNumber(4);
    if (choice == 1) {
      character = pickSymbol(createRandomNumber(26));
    } else if (choice == 2) {
      character = pickLetter(createRandomNumber(26));
    } else if (choice == 3) {
      character = createRandomNumber(9);
    } else {
      character = pickUppercaseLetter(createRandomNumber(26));
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: makeLowercaseAndSymbolPassword(){
//Description: Creates a password with lowercase, symbols
//********************************************************/
function makeLowercaseAndSymbolPassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 2); i++) {
    let choice = createRandomNumber(2);
    if (choice == 1) {
      character = pickSymbol(createRandomNumber(26));
    } else {
      character = pickLetter(createRandomNumber(26));
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: makeLowercaseUppercaseSymbolPassword(){
//Description: Creates a password with lowercase, uppercase, symbols
//********************************************************/
function makeLowercaseUppercaseSymbolPassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 3); i++) {
    let choice = createRandomNumber(3);
    if (choice == 1) {
      character = pickSymbol(createRandomNumber(26));
    } else if (choice == 2) {
      character = pickLetter(createRandomNumber(26));
    } else {
      character = pickUppercaseLetter(createRandomNumber(26));
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: makeUppercaseSymbolPassword(){
//Description: Creates a password with uppercase, symbols
//********************************************************/
function makeUppercaseSymbolPassword() {
  let passwordArray = [];
  let character = "";
  let password = "";
  for (let i = 0; i < (sb_pwLength.value - 2); i++) {
    let choice = createRandomNumber(2);
    if (choice == 1) {
      character = pickSymbol(createRandomNumber(26));
    } else {
      character = pickUppercaseLetter(createRandomNumber(26));
    }
    passwordArray.push(character);
    password = passwordArray.join("");
  } //End of loop
  return password;
} //End of function

//********************************************************/
//Name: determineCharacter
//Description: Determines which character will be added to password to make sure it includes one of each thing it needs
//********************************************************/
function determineCharacter(typeOfCharacter) {
  let character;
  switch (typeOfCharacter) {
    case "number":
      character = createRandomNumber(9);
      break;
    case "lowercase":
      character = pickLetter(createRandomNumber(26));
      break;
    case "uppercase":
      character = pickUppercaseLetter(createRandomNumber(26));
      break;
    case "symbol":
      character = pickSymbol(createRandomNumber(26));
      break;
      console.log("type of character: " + typeOfCharacter);
  }
  return character;
}

//********************************************************/
//Name: ensureCharacter
//Description: Makes sure there is at least 1 number, uppercase, lower, or symbol in password, based on parameter
//********************************************************/
function ensureCharacter(character, password) {
  //Determine if character is added to beginning or end of password
  let position = createRandomNumber(2);
  let passwordArray = password.split("");
  if (position == 1) {
    passwordArray.unshift(character);
  } else {
    passwordArray.push(character);
  }
  let newPassword = passwordArray.join("");
  return newPassword;
}

//********************************************************/
//Name: determineVerification
//Description: determines verification for 
//********************************************************/
function determineVerification(character){
  let verificationMessage = "";
  switch(character){
    case "O":
      verificationMessage = "a capital O, like Oscar."
      break;
    case "1":
      verificationMessage = "the number 1.";
      break;
    //case "5":
      //verificationMessage = "the number 5.";
      //break;
    case "S":
      verificationMessage = "a capital S like Sierra.";
      break;
    case "l":
      verificationMessage = "a lowercase l like Lima."
      break;
    case "I":
      verificationMessage = "a capital I like India"
      break;
  }
  return verificationMessage;
}

//********************************************************/
//Name: printVerification
//Description: Prints out verification of what certain characters are
//********************************************************/
function printVerification(password) {
  passwordArray = password.split("");
  confusingCharacterCounter = 0;
  let positionArray = [];
  let positionCounter = 0;
  spn_clarification.innerHTML = "";
  for(let i = 0; i < password.length; i++){
    positionArray.push(positionCounter += 1);
    if(passwordArray[i] == "O" || passwordArray[i] == 1 || passwordArray[i] == "S" || passwordArray[i] == "l" || passwordArray[i] == "I"){
      let characterNumber = (positionArray[i]);
      spn_clarification.innerHTML += "Character " + characterNumber + " is " + determineVerification(passwordArray[i]) + "<br>";
      confusingCharacterCounter ++;
    }
  }
  if(confusingCharacterCounter == 0){
    spn_clarification.innerHTML = "There don't seem to be any potentially confusing characters.";
  }
}

//********************************************************/
//Name: determinePassword
//Description: Determines which kind of password to make, depending on what's selected
//********************************************************/
function determinePassword() {
  let password = "";

  //Using numbers in an attempt to avoid a lot of nesting of conditionals
  //---------------------------------------------------------------------
  //Total value
  let includedCharacters = 0;
  //Option values
  const includeNumbers = 5;
  const includeUppercase = 45;
  const includeLowercase = 20;
  const includeSymbols = 100;

  //---------------------
  // Combinations
  //---------------------
  //Just numbers = 5
  //Just uppercase = 45
  //Just lowercase = 20
  //Just symbols = 100
  //Numbers, lowercase = 25
  //Numbers, uppercase = 50
  //Numbers, symbols = 105
  //Numbers, lowercase, uppercase = 70
  //Numbers, symbols, uppercase = 150
  //Numbers, symbols, lowercase = 125
  //Numbers, lowercase, uppercase, symbols = 170
  //Lowercase, uppercase = 65
  //Lowercase, symbols = 120
  //Lowercase, uppercase, symbols = 165
  //Uppercase, symbols = 145

  //-----------------------------------
  //If various options are selected
  //-----------------------------------

  //If numbers are included
  if (cb_includeNumbers.checked) {
    includedCharacters += includeNumbers;
  }

  //If lowercase are included
  if (cb_includeLowercase.checked) {
    includedCharacters += includeLowercase;
  }

  //If uppercase are included
  if (cb_includeUppercase.checked) {
    includedCharacters += includeUppercase;
  }

  //If symbols are included
  if (cb_includeSymbols.checked) {
    includedCharacters += includeSymbols;
  }

  if (includedCharacters == 0) {
    alert("Please pick at least 1 option.");
  }

  switch (includedCharacters) {
    //Numbers
    case 5:
      password = makeNumberPassword();
      break;
    //Uppercase
    case 45:
      password = makeLetterPassword();
      break;
    //Lowercase
    case 20:
      password = makeLetterPassword();
      break;
    //Symbols
    case 100:
      password = makeSymbolPassword();
      break;
    //Numbers, lowercase
    case 25:
      password = ensureCharacter(
        determineCharacter("number"),
        makeNumbersAndLowercasePassword()
      );
      password = ensureCharacter(determineCharacter("lowercase"), password);
      break;
    //Numbers, uppercase
    case 50:
      password = ensureCharacter(
        determineCharacter("number"),
        makeNumbersAndUppercasePassword()
      );
      password = ensureCharacter(determineCharacter("upperCase"), password);
      break;
    //Numbers, symbols
    case 105:
      password = ensureCharacter(
        determineCharacter("number"),
        makeNumbersAndSymbolsPassword()
      );
      password = ensureCharacter(determineCharacter("symbol"), password);
      break;
    //Number, uppercase, lowercase
    case 70:
      password = ensureCharacter(
        determineCharacter("number"),
        makeMixedLetterAndNumberPassword()
      );
      password = ensureCharacter(determineCharacter("lowercase"), password);
      password = ensureCharacter(determineCharacter("uppercase"), password);
      break;
    //Numbers, symbols, uppercase
    case 150:
      password = ensureCharacter(
        determineCharacter("number"),
        makeNumberSymbolUppercasePassword()
      );
      password = ensureCharacter(determineCharacter("symbol"), password);
      password = ensureCharacter(determineCharacter("uppercase"), password);
      break;
    //Numbers, symbols, lowercase
    case 125:
      password = ensureCharacter(
        determineCharacter("number"),
        makeNumberSymbolLowercasePassword()
      );
      password = ensureCharacter(determineCharacter("lowercase"), password);
      password = ensureCharacter(determineCharacter("symbol"), password);
      break;
    //Numbers, lowercase, uppercase, symbols
    case 170:
      password = ensureCharacter(
        determineCharacter("number"),
        makeAllCharacterPassword()
      );
      password = ensureCharacter(determineCharacter("lowercase"), password);
      password = ensureCharacter(determineCharacter("uppercase"), password);
      password = ensureCharacter(determineCharacter("symbol"), password);
      break;
    //Lowercase, uppercase
    case 65:
      password = ensureCharacter(
        determineCharacter("lowercase"),
        makeMixedLetterPassword()
      );
      password = ensureCharacter(determineCharacter("uppercase"), password);
      break;
    //Lowercase, symbols
    case 120:
      password = ensureCharacter(
        determineCharacter("lowercase"),
        makeLowercaseAndSymbolPassword()
      );
      password = ensureCharacter(determineCharacter("symbol"), password);
      break;
    //Lowercase, uppercase, symbols
    case 165:
      password = ensureCharacter(
        determineCharacter("uppercase"),
        makeLowercaseUppercaseSymbolPassword()
      );
      password = ensureCharacter(determineCharacter("lowercase"), password);
      password = ensureCharacter(determineCharacter("symbol"), password);
      break;
    //Uppercase, symbols
    case 145:
      password = ensureCharacter(
        determineCharacter("uppercase"),
        makeUppercaseSymbolPassword()
      );
      password = ensureCharacter(determineCharacter("symbol"), password);
      break;
  }
  return password;
} 

//********************************************************/
//Name: printPassword
//Description: Prints the password and a message to the screen
//********************************************************/

function printPassword(password) {
  tb_password.value = password;
}

//-----------------------------------------------------------------------------
//Implementation
//-----------------------------------------------------------------------------

btn_createPw.addEventListener("click", function () {
  let password = determinePassword()
  printPassword(password);
  printVerification(password);
});
