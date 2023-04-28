const palindromes = function (string) {
    let processed = string.toLowerCase().replace(/[^a-z]/g, "");
    return processed === processed.split("").reverse().join("") ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
