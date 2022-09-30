(function () {
//Given the variable.
let name = "Amy";
// a function called updateNames with one parameter. 
//This function will replace the name John with the given parameter.
function updateNames(name) {
  let sentence = "Hello, my name is John. My friend's name is also John.";
  // Build your logic here
  // console.log(sentence.replaceAll(John, name));
  //RegEx below
  console.log(sentence.replace(/John/g, name));
}

updateNames(name); // "Hello, my name is Amy. My friend's n

//Given the variable
let sentence = "My name is John!";
//Define a function called reverse with one parameter.
//This function will reverse the string. You cannot use any 
//built in methods to do this. Use a loop.

function reverse(str) {
  // Build your logic here
  let newStr = '';
  for (let i = str.length -1; i >= 0; --i) {
    newStr += str[i]
    //newStr = newStr.concat(str[i]) equivalent
  }
  console.log(newStr)
}

reverse(sentence); // "!nhoJ si eman yM"
})()
