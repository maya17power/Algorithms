/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.substr() //can find the last character of string using -1.
String.prototype.substring() //finds letters in between stings 0, 4 or 2, 6

*/
function confirmEnding(str, target) {
  for(var i = 1; i <= target.length; i++){
   if(target === str.substr(-i)){
      return true;
    }
  }
      return false;
}

confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
