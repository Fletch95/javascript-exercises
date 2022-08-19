const reverseString = function(str) {
    let output = "";

    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }

    return output;


    // Better solution - leaving the above for reference
    //
    // return str.split("").reverse().join("");
    // This splits the string into an array, uses the array function to reverse
    //
    // then rejoins the array into a string.
};

// Do not edit below this line
module.exports = reverseString;
