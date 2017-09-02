/*
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.splice() // cuts out values from array
String.prototype.replace() // replace one value with another
Array.prototype.join()// join string together
isUpperCase();
*/


function myReplace(str, before, after) {
var myStr = str.split(' ');
var matchFound;

 myStr.forEach(function(val){
        if(val == before){
           matchFound = val;
        }
  });
 var capitalLetter =  matchFound.slice(0,1) == matchFound.slice(0,1).toUpperCase();
 if(matchFound && capitalLetter === true){
  return str.replace(before, after.replace(/(^|\s)[a-z]/g, function(letter){
    return letter.toUpperCase();
  }));
 }
   else{
    return str.replace(before, after);
   }
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//myReplace("Let us go to the store", "store", "mall"); //should return "Let us go to the mall".;

//myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); //should return "He is Sitting on the couch".;

//myReplace("This has a spellngi error", "spellngi", "spelling"); //should return "This has a spelling error".;

//myReplace("His name is Tom", "Tom", "john") //should return "His name is John".;

myReplace("Let us get back to more Coding", "Coding", "algorithms"); //should return "Let us get back to more Algorithms".;
