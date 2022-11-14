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

function toCharCode(char) {
    return char.charCodeAt(0);
}

function shiftCharCode(charCode) {
    if (!(charCode > 64 && charCode < 91) && !(charCode > 96 && charCode < 123)) return charCode;
    if (charCode === 90 || charCode === 122) return charCode - 25;
    return charCode + 1;
}

function convertToChar(charCode) {
    return String.fromCharCode(charCode);
}

function caesarCipher(str) {
    const strArr = str.split('');
    const strNumArr = strArr.map(toCharCode);
    const shiftedArr = strNumArr.map(shiftCharCode);
    const shiftedStr = shiftedArr.map(convertToChar).join('');
    return shiftedStr;
}

export {capitalize, reverseString, calculator, caesarCipher}