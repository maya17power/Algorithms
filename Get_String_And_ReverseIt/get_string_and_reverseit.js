//Program will get a string and reverse the string. 02/20/17

function reverseString(str) {
  var strArray = [];
  for(var i = 0; i < str.length; i++){
  strArray.push(str[i]);
  }
  return strArray.reverse().join("");
}
//reverseString("Greetings from Earth");

//revised 02/22/2017
function reverseString2(str){
  var strArray = str.split("");
  return strArray.reverse().join("");
}
reverseString2("Great america parkway");
