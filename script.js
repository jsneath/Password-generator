// Array of special characters to be included in password
var specialCharacters = [
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options
var userInput = prompt("How long would you like your password to be?");

getPasswordOptions()

function getPasswordOptions() {

  if (userInput < 8 || userInput > 128) {
    alert("The password must be at least 8 characters but no more than 128")
    } else {
      let lowerCase = confirm("Would you like lowerCase?");
      if (lowerCase == true) {
      alert("you done something right")
    }
  }

  let upperCase = confirm("Would you like uppercase letters?")
  if (upperCase == true) {
    alert("you added uppercase letter")
  }
  
  let numericValue = confirm("Would you like numeric characters?")
  if (numericValue == true) {
    alert("you added numeric values")
  }
  
  let specialChar = confirm("Would you like special characters")
  if (specialChar == true) {
    alert("you added special character")
  }

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
// get the password options
// connect all the arrays that the user wants to use
// get random one

return "It works!"
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);