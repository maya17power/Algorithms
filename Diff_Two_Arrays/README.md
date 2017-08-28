Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.prototype.slice() // The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
var newArray = oldArray.slice(begining index, ending index);

Array.prototype.filter() // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
array.filter(function(perameter){
  return perameter.length > 6;
});

Array.prototype.indexOf() //look up the index position for a perticular value;
array.indexOf(value);

Array.prototype.concat() //The concat() method combines the text of one or more strings and returns a new string.
variable.concat("sting", "string");


function diffArray(arr1, arr2) {
  return arr1.filter(function(elem){
    return arr2.indexOf(elem) < 0;
  }).concat(arr2.filter(function(elem){
    return arr1.indexOf(elem) < 0;
  }));
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
