// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacters = "~!@#$%^&*()+=></\?"
var numbers = "0123456789"

function generatePassword() {
  var password = ""
  var passwordLength = 0;
  var passwordLengthInput = window.prompt("Please input password length:");
  // console.log(passwordLengthInput);
  passwordLength = parseInt(passwordLengthInput);
while (!(passwordLength>=8 && passwordLength<=128)) {
    passwordLengthInput = window.prompt("The Password must be 8 to 128 only. Please input a correct number: ");
    passwordLength = parseInt(passwordLengthInput);
  };
  console.log(passwordLength);
  var numberInput = confirm("click ok if you want a number in your password");
  var lowerCaseInput = confirm("Click ok if you want lower case in your password");
  var upperCaseInput = confirm("click ok if you want a upper case in your password");
  var specialCharactersInput = confirm("click ok if you want a symbol in your password");
  // console.log(upperCaseInput);
  // console.log(lowerCaseInput);
  // console.log(numberInput)
  // console.log(specialCharactersInput)
  var i = 0
  while (i<passwordLength){
    if(lowerCaseInput){
      var randomnumber= Math.floor(Math.random()*26)
      // console.log(randomnumber)
      password += lowerCase[randomnumber]
      i++ 
      if(i>=passwordLength){
        break
      }
    }
    if(upperCaseInput){
      var randomnumber= Math.floor(Math.random()*26)
      // console.log(randomnumber)
      password += upperCase[randomnumber]
      i++ 
      if(i>=passwordLength){
        break
      }
    }
    if(numberInput){
      var randomnumber= Math.floor(Math.random()*10)
      // console.log(randomnumber)
      password += numbers[randomnumber]
      i++ 
      if(i>=passwordLength){
        break
      }
    }
    if(specialCharactersInput){
      var randomnumber= Math.floor(Math.random()*18)
      // console.log(randomnumber)
      password +=specialCharacters[randomnumber]
      i++ 
      if(i>=passwordLength){
        break
      }
    }
  }
  console.log(password)
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
