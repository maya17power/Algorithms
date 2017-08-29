/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.slice()
Array.prototype.splice()

slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
slasher([1, 2, 3], 9) should return [].
slasher([1, 2, 3], 4) should return [].
slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].
*/

function slasher(arr, howMany) {

return arr.slice(howMany);//how many to cut
//return arr.splice(0,2);//remove values from range


}

slasher([1, 2, 3], 2);// good
slasher([1, 2, 3], 0);// good
slasher([1, 2, 3], 9);// good
slasher([1, 2, 3], 4);// good
slasher(["burgers", "fries", "shake"], 1);// good
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
