/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max() // returns the largest of two numbers
Math.min() // returns the smallest of two numbers
Array.prototype.reduce() //

*/


function sumAll(arr) {
 var arrMax = Math.max(arr[0], arr[1]);
 var arrMin = Math.min(arr[0], arr[1]);
 var numbers = [];
 var total;
 console.log("Min is: " + arrMin + ", Max is: " + arrMax);
 for(var i = arrMin; i <= arrMax; i++){
  numbers.push(i);
 }
  console.log(numbers);
 total = numbers.reduce(function(sum, value){
    return sum + value;
  });
 return total;
}

//sumAll([1, 4]); //return 10
//sumAll([4, 1]); //return 10
//sumAll([5, 10]); //return 45
//sumAll([10, 5]); //return 45
