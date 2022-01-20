/**
    Есть набор строк (строка это массив из слов), условия форматирования
    каждой этой строки и лимит символов в строке. Необходимо подготовить
    текст к публикации, так чтобы он удовлетворял условиям форматирования и
    не превышал количество символов в строке. Текст должен быть заключен
    символ * со всех сторон.
 */

let arr = [
    ["Hello", "world"],
    ["Brad", "came", "to", "dinner", "with", "us"],
    ["He", "loves", "tacos"],
];

let rules = ["LEFT", "RIGHT", "LEFT"];

const stringFormatting = (arr, rules) => {
    let temp = "";
    let result = [];
    const border = "*".repeat(18);
    const stringLength = 16;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().length < 16) {
            result.push(stringDirection(arr[i].join(" "), rules[i]));
            temp = "";
        } else {
            for (let j = 0; j < arr[i].length; j++) {
                if (temp.length + arr[i][j].length < stringLength) {
                    temp += arr[i][j] + " ";
                } else {
                    result.push(stringDirection(temp.trim(), rules[i]));
                    temp = "";
                    j--;
                }
            }
            result.push(stringDirection(temp.trim(), rules[i]));
        }
    }
    result.push(border);
    result.unshift(border);
    return result;
};

function stringDirection(str, rule) {
    let temp;
    rule == "LEFT"
        ? (temp = str.padEnd(16, " "))
        : (temp = str.padStart(16, " "));
    return (temp = temp.replace(/^/, "*").replace(/$/, "*"));
}

const resulter = stringFormatting(arr, rules);
console.log(resulter);

/**
 * console log
    0: "******************"
    1: "*Hello world     *"
    2: "*    Brad came to*"
    3: "*  dinner with us*"
    4: "*He loves tacos  *"
    5: "******************"
*/
