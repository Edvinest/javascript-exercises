const fibonacci = function(number) {
    let parsedNumber = Number.parseInt(number);
    if (parsedNumber < 0) return "OOPS"
    else {
        let a = 0;
        let b = 1;
        for (let i = 2; i < parsedNumber+1; i++) {
            let c = a + b;
            a = b;
            b = c
        }

        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;
