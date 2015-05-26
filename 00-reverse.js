// Write a method that will take a string as input, and return a new
// string with the same letters in reverse order.


function reverse( string ) {	
    var str_reverse = "";

    for (i = string.length; i >= 0; i--) {
        str_reverse += string.charAt(i);
    }

    return str_reverse;

 	
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( reverse("") === "" )
console.log( reverse("a") === "a" )
console.log( reverse("abc") === "cba" )


