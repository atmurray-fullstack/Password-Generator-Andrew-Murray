function generatePassword() {

  //variables that are constant.
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const arrayLC = alphabetString.split("");
  console.log(arrayLC);
  const arrayUC = upperCaseString.split("");
  console.log(arrayUC);
  const arraySC = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  const arrayNum = ['1','2','3','4','5','6','7','8','9']
    
  //variables that are mutable.
  var len = null;
  var upCase = null;
  var lowCase = null;
  var specChar = null;
  var numeric = null;
  var charArray= []||charArray;
  var password='';
  // letterCase===null && specChar===null && numeric===null

  while (len === null || len < 8 || len > 128) {
    var len = prompt('Enter password length. Must be inclusively between 8 and 128 characters');
    if (len < 8 || len > 128) {
      prompt('That value is not valid. Enter valid length');
    }
  };
  // end of len loop

  //While loop to obtain password length and character types.
  while (lowCase === null && upCase === null && specChar === null && numeric === null) {
    //prompt for type input
    var characterTypes = prompt('What type of characters do you want in your password?\n lc = lowercase\n uc = uppercase\n sc = special characters\n num = numeric\n Seperate types with comma. ex: lc, uc')
    characterTypes = characterTypes.toLowerCase(); //change strings to lowercase and split into array
    characterTypes = characterTypes.split(','); //remove excess spaces in strings.


    //trim spaces off of strings in array
    for (let i = 0; i < characterTypes.length; i++) {
      characterTypes[i] = characterTypes[i].trim();
    };
    console.log(characterTypes);
    //conditionals to set boolean values for letterCase, specChar, and numeric.

    if (characterTypes.indexOf('uc') !== -1) {
      upCase = true;
      charArray.push(arrayUC);
    }
    if (characterTypes.indexOf('lc') !== -1) {
      lowCase = true;
      charArray.push(arrayLC);
    }
    if (characterTypes.indexOf('sc') !== -1) {
      specChar = true;
      charArray.push(arraySC);
    }
    if (characterTypes.indexOf('num') !== -1) {
      numeric = true;
      charArray.push(arrayNum);
    }
    if (lowCase === null && upCase === null && specChar === null && numeric === null) {
      alert('No valid character type input. ')
    }
    console.log(charArray);
    console.log(upCase);
    console.log(lowCase);
    console.log(numeric);
    console.log(specChar);

  }; // End of input while loop.


  // for loop for password construction using string concat and bracket notation
   for(let i = 1; i < len; i++){
    let ind = Math.floor(Math.random()*charArray.length);
    password =  password + charArray[ind][Math.floor(Math.random()*charArray[ind].length)];

   }
  console.log(password)
   
  
  // console.log(charArray[ind][Math.floor(Math.random()*charArray[ind].length)]);
  


}  //end of function



// Assignment Code
var generateBtn = document.querySelector("#generate");






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
