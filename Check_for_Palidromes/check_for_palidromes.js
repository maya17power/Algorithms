/*A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Return true if the given string is a palindrome. Otherwise, return false.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

tools:
string.toLowerCase(); //converts string to lower case letters.
string.replace(ingoreFrom, replaceWith Function); // put regular expressions
//String only   //Array only
//split("");      //match();
//reverse();    //join("");
//replace();
*/

function palindrome(str){
var filter = /[^A-Z0-9]/gi;
var myString = str.replace(filter, "").toLowerCase();
var palidrome = myString.split("").reverse().join("");
if(myString === palidrome){
  return true;
}
  return false;
}

palindrome("eye");
