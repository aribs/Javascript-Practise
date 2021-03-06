// Write a method that takes a string in and returns true if the letter
// "z" appears within three letters **after** an "a". You may assume
// that the string contains only lowercase letters.
//
// Difficulty: medium.

function nearby_az( string ){
	for(i=0;i<=string.length;i++){
		if(string[i] === 'a'){
			var posA= i;

		}
		if(string[i] === 'z'){
			var posZ = i

		}
	}
	var totalPosition = posZ - posA;
	if(totalPosition === 3 || totalPosition === 2 || totalPosition === 1 ){
		return true;
	}
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( nearby_az('a') === false )
console.log( nearby_az('z') === false )
console.log( nearby_az('za') === false )
console.log( nearby_az('baz') === true )
console.log( nearby_az('abz') === true )
console.log( nearby_az('abcz') === true )
console.log( nearby_az('abcdz') === false )
