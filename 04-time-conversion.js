// Write a method that will take in a number of minutes, and returns a
// string that formats the number into `hours:minutes`.
//
// Difficulty: easy.

function time_conversion(digits) {
    var hours = 0;
    var minutes = 0;

    if(digits > 60)
    {
        hours++;
        digits -= 60;

        while(digits >= 60)
        {
            hours++;
            digits -= 60;
        }

        minutes = digits;
    }
    else
    {
        minutes = digits;
    }

    return hours + ":" + minutes;
}
// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( time_conversion(15) === '0:15' )
console.log( time_conversion(150) === '2:30' )
console.log( time_conversion(360) === '6:00' )
