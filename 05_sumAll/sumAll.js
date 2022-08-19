const sumAll = function (start, end) {

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    if (start < 0 || end < 0) {
        return "ERROR";
    }

    if (start > end) { // Reverse if start is greater than end
        let temp = end;
        end = start;
        start = temp;
    }

    let sum = 0;

    for (let index = start; index <= end; index++) {
        sum += index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
