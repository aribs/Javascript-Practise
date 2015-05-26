// Write a method that takes in a number and returns true if it is a
// power of 2. Otherwise, return false.
//
// You may want to use the `%` modulo operation. `5 % 2` returns the
// remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
// of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
//
// Difficulty: medium.

function is_power_of_two(num) {

	var divideNumber = num;
	var exit = 1
	if(num != 1){
		while (exit =! 0){
			divideNumber = divideNumber / 2;
			if(divideNumber === 1){
				return true;
				exit = 0;

			}
			else if(divideNumber === 0){
				return false;
				exit = 0;
			}
		}
	}
	else{
		return true;
	}
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( is_power_of_two(1) === true)
console.log( is_power_of_two(16) === true)
console.log( is_power_of_two(64) === true)
console.log( is_power_of_two(78) === false)
console.log( is_power_of_two(0) === false)
