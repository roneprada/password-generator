
var generateBtn = document.querySelector("#generate");
var numbers = ['1','2','3','4','5','6','7','8','9','0']
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']


function generatePassword() {
  var generatedPassword = '';
  var passwordCriteria = [];
    var length = prompt("Choose password length between 8 and 128 characters");
     var askNumbers = confirm("Do you want your password to include numbers?");
     var askLowerCase = confirm("Do you want your password to include lower case letters?");
     var askUpperCase = confirm("Do you want your password to include upper case letters?");
     var askSpecial = confirm("Do you want your password to include special characters?");


     
    if(askNumbers){
      passwordCriteria.push(...numbers);
    }
    if(askLowerCase){
      passwordCriteria.push(...lowerCaseLetters);
    }
    if(askUpperCase){
      passwordCriteria.push(...upperCaseLetters);
    }
    if(askSpecial){
      passwordCriteria.push(...specialCharacters);
    }
    console.log(passwordCriteria);

for(var i = 0; i <length; i++){
  var randomIndex = Math.floor(Math.random() * passwordCriteria.length);
  var randomCharacter = passwordCriteria[randomIndex];
  generatedPassword += randomCharacter; 
}
return generatedPassword;
  
 }
  


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
