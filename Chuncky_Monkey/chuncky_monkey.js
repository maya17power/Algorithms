/*
Write a function that splits an array (first argument)
into groups the length of size (second argument)
and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()

chunkArrayInGroups(["a", "b", "c", "d"], 2)
should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Chunky-Monkey
*/

function chunkArrayInGroups(arr, size) {
 var myArray = [];
 var myResult = [];
for(var i = 0; i < arr.length; i++){
  if(i % size !== size -1){
    myArray.push(arr[i]);
  }else{
    myArray.push(arr[i]);
    myResult.push(myArray);
    myArray = [];
  }
  if(myArray.length !== 0){
    myResult.push(myArray);
    return myResult;
  }
}

return myArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*function chunkArrayInGroups(arr, size) {
var myArray = [];
  console.log(arr.length);
  console.log(arr.slice(0,2));
  console.log(myArray);
  console.log(arr.slice(2,5));

    myArray.push(arr.slice(0,2),arr.slice(2,5));

    console.log(myArray);

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);*/
