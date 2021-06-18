// arrays that were needed to pick from
var generateBtn = document.querySelector('#generate'); 
var allLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var allUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var allNumbers = [1,2,3,4,5,6,7,8,9,0]
var allSpec = ['~','!','@','$','%','^','&','*','?']



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



//function asking for desired password length
function getPassLength() {
  var passLength = prompt('Please enter your desired length.');
  if (passLength >= 8 && passLength <= 128){
    return passLength;
  } else {
    alert("Password length must be between 8 and 128 characters.")
    return false;
  }
}
// function asking if you want uppercase letters
function getUpper() {
  var useUpper = (window.confirm('Would you like to use uppercase letters?'));
  if (!useUpper){
    return false
  }else{
    return true
  }  
}
// function asking if you want lowercase letters
function getLower() {
  var useLower = (window.confirm('Would you like to use lowercase letters?'));
  if (!useLower){
    return false
  }else{
    return true
  }  
}
// function asking if you want special characters letters
function getSpecial() {
  var useSpecial = (window.confirm('Would you like to use special characters?'));
  if (!useSpecial){
    return false
  }else{
    return true
  }   
}
// function asking if you want numbers to be used
function getNumber() {
  var useNumber = (window.confirm('Would you like to use numbers?'));
  if (!useNumber){
    return false
  }else{
    return true
  }   
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;
}
//password generation function
function generatePassword() {
  passLength = getPassLength(); 

  var passwordCharacterLists = [];
  var generatedPassword = [];

  if (!passLength){
    return ""
  } else {
    var gotUpper = getUpper();
    var gotLower = getLower();
    var gotSpecial = getSpecial();
    var gotNumber = getNumber();

    
    passwordCharacterLists = compare(gotUpper, gotLower, gotSpecial, gotNumber);

    for (var i = 0; i < passLength; i++) {
      var randNum = Math.floor(Math.random() * passwordCharacterLists.length);
      generatedPassword.push(passwordCharacterLists[randNum]);
    }
   
    return generatedPassword.join("");
  }

}


//function for verifying what criteria will be needed. Must pick one of the values
function compare(gotUpper, gotLower, gotSpecial, gotNumber) {
  passwordCharacterLists = [];

  if (!gotUpper && !gotLower && !gotSpecial && !gotNumber) {
    alert('You must select one of the criteria')
  } 
  else if (gotUpper && gotLower && gotSpecial && gotNumber) {
    passwordCharacterLists = allLowerCase.concat(allUpperCase, allNumbers, allSpec);
  } 
  else if (gotUpper && gotLower && gotSpecial) {
    passwordCharacterLists = allLowerCase.concat(allUpperCase, allSpec);
  }
  else if (gotUpper && gotLower && gotNumber ) {
    passwordCharacterLists = allLowerCase.concat(allUpperCase, allNumbers);
  }
  else if (gotUpper && gotSpecial && gotNumber) {
    passwordCharacterLists = allNumbers.concat(allUpperCase, allSpec);
  }
  else if (gotLower && gotSpecial && gotNumber) {
    passwordCharacterLists = allNumbers.concat(allLowerCase, allSpec);
  }
  else if (gotUpper && gotLower) {
    passwordCharacterLists = allLowerCase.concat(allUpperCase);
  }
  else if (gotUpper && gotSpecial) {
    passwordCharacterLists = allUpperCase.concat(allSpec);
  }
  else if (gotUpper && gotNumber) {
    passwordCharacterLists = allUpperCase.concat(allNumbers);
  }
  else if (gotLower && gotSpecial) {
    passwordCharacterLists = allLowerCase.concat(allSpec);
  }
  else if (gotLower && gotNumber) {
    passwordCharacterLists = allLowerCase.concat(allNumbers);
  }
  else if (gotSpecial && gotNumber) {
    passwordCharacterLists = allSpec.concat(allNumbers);
  }
  else if (gotUpper) {
    passwordCharacterLists = allUpperCase;
  }
  else if (gotLower) {
    passwordCharacterLists = allLowerCase;
  }
  else if (gotSpecial) {
    passwordCharacterLists = allSpec;
  }
  else if (gotNumber) {
    passwordCharacterLists = allNumbers;
  }

  return passwordCharacterLists;
}
 
