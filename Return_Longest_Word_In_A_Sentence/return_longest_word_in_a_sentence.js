
/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
String.prototype.split()
String.length

*/

function findLongestWord(str) {
var strArray = str.split(" ");
var newArray = [];
  for(var i = 0; i < strArray.length; i++){

    newArray.push(strArray[i].length);

  }
  newArray = newArray.sort(function(a,b){

    return b - a ;

  });
  return newArray[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
