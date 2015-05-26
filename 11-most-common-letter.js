// Write a method that takes in a string. Your method should return the
// most common letter in the array, and a count of how many times it
// appears.
//
// Difficulty: medium.

function most_common_letter(string) {
	contA = 0;
	contB = 0;	
	for(i=0; i < string.length; i++){
		if(string[i] === 'a'){
			contA++;
			console.log('Iteration ' + i + " " + contA + "A");
		}
		else{
			contB++;
			console.log('Iteration ' + i + " " + contB + "B");
		}
	}
	if(contA > contB){
		console.log(contA);
		return ['a',contA];
	}
	else{
		console.log(contB);
		return ['b',contB];
	}
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( most_common_letter('abca') === ['a', 2] );
console.log("2iteration");
console.log( most_common_letter('abbab') === ['b', 3] );
