const sumAll = function (start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"
    else if (start < 0 || end < 0) return "ERROR"

    let sum = 0;
    for (let i = start;
        i != (start > end ? end - 1 : end + 1);
        start > end ? i-- : i++)
        sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
