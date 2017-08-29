/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.indexOf() //cues to this element Index number
example:
var myString = "Welcome home";
var myStrLocation = myString.indexOf(home);
console.log(myStrLocation);// = 8
*/

function mutation(arr) {
var myArrayZero = arr[0].split("");
var myArrayOne = arr[1].split("").join("").toLowerCase();
var myMatch = [];
  for(var i = 0; i < myArrayZero.length; i++){
    if(myArrayZero[i] === myArrayOne[i]){
      myMatch.push(myArrayOne[i]);
      console.log("Match");
    }
    console.log("No match");
  }
  return myMatch;
}

mutation(["voodoo", "no"]);
