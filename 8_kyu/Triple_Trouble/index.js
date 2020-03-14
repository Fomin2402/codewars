/*
DESCRIPTION:
    Triple Trouble
    Create a function that will return a string
    that combines all of the letters of the three inputed strings in groups.
    Taking the first letter of all of the inputs and grouping them next to each other.
    Do this for every letter, see example below!
    E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

NOTE:
    You can expect all of the inputs to be the same length.

EXAMPLES:
    tripleTrouble("aa","bb","cc") should return "abcabc"
    tripleTrouble("Bm", "aa", "tn") should return "Batman"
    tripleTrouble("LLh","euo","xtr") should return "LexLuthor"
    tripleTrouble("this","test","lock") should return "ttlheoiscstk"
*/

function tripleTrouble() {
    const passedParams = [];
    let resultStr = "";
    let maxStringLength = 0;

    for (const key in arguments) {
        if (typeof arguments[key] === "string") {
            passedParams.push(arguments[key]);

            if (arguments[key].length > maxStringLength) {
                maxStringLength = arguments[key].length;
            }
        }
    }

    for (let index_1 = 0; index_1 < maxStringLength; index_1++) {
        for (let index_2 = 0; index_2 < passedParams.length; index_2++) {
            if (passedParams[index_2][index_1]) {
                resultStr = resultStr.concat(passedParams[index_2][index_1]);
            }
        }
    }

    return resultStr;
}

module.exports = tripleTrouble;
