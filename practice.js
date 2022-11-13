function capitalize(str) {
    const strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    return strArr.join('');
}

function reverseString(str) {
    const strArr = str.split('');
    const reversedArr = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        reversedArr.push(strArr[i]);
    }
    return reversedArr.join('');
}

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multiply: function(a, b) {
        return a * b;
    },
}

export {capitalize, reverseString, calculator}