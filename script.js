// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters
var numbers = [0,1,2,3,4,5,6,7,8,9];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Function to see if their choice is valid
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var confirmNumbers = confirm("Do you want your password to include numbers?");
    var confirmLowerCase = confirm("Do you want your password to include lower case letters?");
    var confirmUpperCase = confirm("Do you want your password to include upper case letters?");
    var confirmSpecial = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      confirmNumbers: confirmNumbers,
      confirmLowerCase: confirmLowerCase,
      confirmUpperCase: confirmUpperCase,
      confirmSpecial: confirmSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!confirmNumbers)&&(!confirmLowerCase)&&(!confirmUpperCase)&&(!confirmSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}
// This function combines the result of their choices
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombine = [];
  var finalPassword = "";

  if (passwordOptions.confirmNumbers) {
    for (var i of numbers)
      possibleCombine.push(i);
  }
  if (passwordOptions.confirmLowerCase) {
    for (var i of lowerCase)
      possibleCombine.push(i);
  }
  if (passwordOptions.confirmUpperCase) {
    for (var i of upperCase)
      possibleCombine.push(i);
  }
  if (passwordOptions.confirmSpecial) {
    for (var i of special)
      possibleCombine.push(i);
  }
  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombine[Math.floor(Math.random() * possibleCombine.length)];
    
  }
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
