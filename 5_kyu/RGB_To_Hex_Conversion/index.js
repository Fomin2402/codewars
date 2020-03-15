/*
DESCRIPTION:
    The rgb() method is incomplete.
    Complete the method so that passing in RGB decimal values
    will result in a hexadecimal representation being returned.
    The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values
    that fall out of that range should be rounded to the closest valid value.

EXAMPLE:
    rgb(0,0,0) // returns 000000
    rgb(148, 0, 211) // returns 9400D3
    rgb(255, 255, 255) // returns FFFFFF
    rgb(255, 255, 300) // returns FFFFFF
*/

const minHexLength = 2;
const mapDecToHexArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
];

function validateValue(value) {
    if (typeof value === "number") {
        return value < 0 ? 0 : value > 255 ? 255 : value;
    }
    return 0;
}

function convertToHex(decimal) {
    const integer = Math.floor(decimal / 16);
    if (integer) {
        return `${convertToHex(integer)}${
            mapDecToHexArray[decimal - integer * 16]
        }`;
    } else {
        return `${mapDecToHexArray[decimal - integer * 16]}`;
    }
}

function validateHexValue(value, minHexLength) {
    if (typeof value === "string" && value.length < minHexLength) {
        return validateHexValue("0".concat(value));
    }
    return value;
}

function rgb(R, G, B) {
    R = validateHexValue(convertToHex(validateValue(R)), minHexLength);
    G = validateHexValue(convertToHex(validateValue(G)), minHexLength);
    B = validateHexValue(convertToHex(validateValue(B)), minHexLength);
    return R + G + B;
}

module.exports = rgb;
