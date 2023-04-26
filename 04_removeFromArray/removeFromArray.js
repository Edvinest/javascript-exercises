const removeFromArray = function(array, ...args) {
    const filtered = array.filter(e => !args.includes(e));
    return filtered
};

// Do not edit below this line
module.exports = removeFromArray;
