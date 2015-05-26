// Write a method that takes a string and returns the number of vowels
// in the string. You may assume that all the letters are lower cased.
// You can treat "y" as a consonant.
//
// Difficulty: easy.

function count_vowels(string) {
	var array = string.split(""); 
	var count = 0;
	for(i=0;i <= array.length; i++){
		if(array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u'){
			count += 1;
		}
	}
	return count;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( count_vowels('abcd') === 1 )
console.log( count_vowels('color') === 2 )
console.log( count_vowels('colour') === 3 )
console.log( count_vowels('cecilia') === 4 )
