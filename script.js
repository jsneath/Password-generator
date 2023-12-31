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
var newArray = []
var randomChar = []
var userInput = parseInt(prompt("How long would you like your password to be?"));

getPasswordOptions()

function getPasswordOptions() {

  if (userInput < 8 || userInput > 128) {
    alert("The password must be at least 8 characters but no more than 128")
    } else {
      let lowerCase = confirm("Would you like lowerCase?");
      if (lowerCase == true) {
      newArray.push(...lowerCasedCharacters)
    }
  }

  let upperCase = confirm("Would you like uppercase letters?")
  if (upperCase == true) {
    newArray.push(...upperCasedCharacters)
  }
 
  let numericValue = confirm("Would you like numeric characters?")
  if (numericValue == true) {
    newArray.push(...numericCharacters)
  }

  let specialChar = confirm("Would you like special characters?")
  if (specialChar == true) {
    newArray.push(...specialCharacters)
  } 

  if (newArray.length == 0) {
    alert("You must select at least 1 character type");
    getPasswordOptions(); 

  } else {
    writePassword();  
    }

}

// Function for getting a random element from an array and push to randomchar
function getRandom(arr) {

  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
getRandom(newArray)

// Function to generate password with user input
function generatePassword() {
  var password = "";
  for(let i = 0; i < userInput; i++){
    password += (getRandom(newArray))
  }
return password
// get the password options
// connect all the arrays that the user wants to use
// get random one

}
// console.log(generatePassword())


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