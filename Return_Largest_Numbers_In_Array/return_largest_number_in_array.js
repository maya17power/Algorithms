
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators
*/

function largestOfFour(arr) {
  var numCollection = [];
/*console.log(arr[0].sort(function(a,b){return b-a}));
console.log(arr[1].sort(function(a,b){return b-a}));
console.log(arr[2].sort(function(a,b){return b-a}));
console.log(arr[3].sort(function(a,b){return b-a}));
numCollection.push(arr[0][0],arr[1][0],arr[2][0],arr[3][0]);
console.log(numCollection)*/

}

/*function largestOfFour2(arr){
  var numCollection = [];
  for(var i = 0; i < arr.length; i++){
   numCollection.push(arr[i].sort(function(a,b){return b - a}));
  }
  for(var j = 0; j < numCollection.length; j++){
    numCollection.push(numCollection[j]);
  }
  console.log(numCollection);
}*/

function largestOfFour2(arr){
 return arr.map(function(num){
  num.sort(function(a,b){return b - a});
    return num[0];
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour2([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
