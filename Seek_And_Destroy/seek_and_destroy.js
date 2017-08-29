/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.filter()
*/

function destroyer(arr) {
  // Remove all the values
var args = Array.prototype.slice.call(arguments);
console.log(arr);
console.log(arguments);
console.log(args);

for(var i= 0; i < arr.length; i++){
  for(var j = 0; j < args.length; j++){
    if(arr[i] == args[j]){
      delete arr[i];
    }
  }
}
return arr.filter(Boolean);
}
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
