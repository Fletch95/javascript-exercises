const repeatString = function(str, nm) {
    let output = "";

    if (nm < 0) {
        return "ERROR"
    }

    for (let i = 0; i < nm; i++) {
        output += str;
    };

    return output;
};

// Do not edit below this line
module.exports = repeatString;
