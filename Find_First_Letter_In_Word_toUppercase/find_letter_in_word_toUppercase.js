/*
Build a algo that will search thru a string and adust all words in the sting to lower case and capitalize the first letter of those words.

toLowerCase();
toUpperCase();
replace();


*/

function upperCase(str){
  var myStr = str.toLowerCase();
  return myStr.replace(/(^|\s)[a-z]/g, function(val){
   return val.toUpperCase();
 });


}

upperCase("beEr anD bUrger");
