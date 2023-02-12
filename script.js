// To create a password 8 - 128 characters

let generateBtn = document.querySelector("#generate");

// Set static variables
let alphaLower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  let alphaUpper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
    ];
    
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let specialChar = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];

// Create a function to prompt the user to confirm password preferences
  function questions() {
    let isValid = false;
    do {
      let length = prompt("Choose password length between 8 and 128 characters");
      let askNumbers = confirm("Do you want your password to contain numbers?");
      let askLowerCase = confirm("Do you want your password to contain lower case letters?");
      let askUpperCase = confirm("Do you want your password to contain upper case letters?");
      let askSpecial = confirm("Do you want your password to contain special characters?");
      let responses = {
        length: length,
        askNumbers: askNumbers,
        askLowerCase: askLowerCase,
        askUpperCase: askUpperCase,
        askSpecial: askSpecial
      } 
      if((length < 8)||(length > 128))
      alert("Please choose a number between 8 and 128");
      else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
      alert("YOu must choose at least one type.");
      else
      isValid = true;
  
    } while(!isValid);
    return responses;
  }
// Function to take user input to create password
  function generatePassword() {
    let passwordOptions = questions();
    let possibleCombo = [];
    let finalPassword = "";
  
      if (passwordOptions.askNumbers) {
      for (let i of number)
        possibleCombo.push(i);
    }
    if (passwordOptions.askLowerCase) {
      for (let i of lowerCase)
        possibleCombo.push(i);
    }
    if (passwordOptions.askUpperCase) {
      for (let i of upperCase)
        possibleCombo.push(i);
    }
    if (passwordOptions.askSpecial) {
      for (let i of special)
        possibleCombo.push(i);
    }
   
    console.log(possibleCombo);
    
    for (let i = 0; i < passwordOptions.length; i++) {
      finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
      
    }
    console.log(finalPassword);
  
    return finalPassword;
  }
  
  // Show password for user
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
