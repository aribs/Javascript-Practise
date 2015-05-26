// Write a method that takes an array of numbers in. Your method should
// return the third greatest number in the array. You may assume that
// the array has at least three numbers in it.
//
// Difficulty: medium.

function third_greatest(nums) {
	nums = nums.sort();
	var thrdGreatest;
	thrdGreatest = nums[nums.length-3];
	return thrdGreatest;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( third_greatest([5, 3, 7]) === 3);
console.log( third_greatest([5, 3, 7, 4]) === 4);
console.log( third_greatest([2, 3, 7, 4]) === 3);
