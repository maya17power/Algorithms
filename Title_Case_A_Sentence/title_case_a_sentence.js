/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/
function titleCase(str) {
  var myStr = str.toLowerCase();
    return myStr.replace(/(^|\s)[a-z]/g,function(val){
      return val.toUpperCase();
    });

}

titleCase("I'm a little tea pot");
