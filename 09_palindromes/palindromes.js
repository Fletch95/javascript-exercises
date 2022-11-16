const palindromes = function (word) {
    //strip punctuation
    word = word.replace(/\W|_/g, '');
    word = word.toLowerCase();

    //create reverse word
    let reverse = word.split("").reverse().join("");

    return(word === reverse);
};

// Do not edit below this line
module.exports = palindromes;
