/*
Truncate a string

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

if(num.length <= 3){
  dont add dots to string
}
  num - 3

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.slice()
*/
function truncateString(str, num) {
 if(str.length > num){
   return num < 3 ? str.slice(0, num)+"...": str.slice(0, num-3)+"...";
 }
   return str;
}


truncateString("A-", 1); //str is greater then num //return "A..."

//truncateString("Absolutely Longer", 2); //str is greater then num //return "Ab...".

//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); //return "A-tisket a-tasket A green and yellow basket"

//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); //return "A-tisket...".

//truncateString("Peter Piper picked a peck of pickled peppers", 14); //return "Peter Piper...".

//truncateString("A-tisket a-tasket A green and yellow basket", 11); // return "A-tisket..."
