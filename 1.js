/**
     В массиве, содержащем 3 или более чисел, определить подходит ли
    каждая группа из трех чисел условию a > b < c или a < b > c. Оформить
    решение в виде функции которая принимает исходный массив и возвращает
    массив с результатом проверки каждой группы, где 1 удовлетворяет
    условию и 0 - нет.
 */

const arr = [1, 3, 5, 4, 5, 7];

const answer = (arr) => {
    if (Array.isArray(arr) && arr.length >= 3) {
        let temp = [];
        for (let i = 0; i < arr.length - 2; i++) {
            const [a, b, c] = [arr[i], arr[i + 1], arr[i + 2]];
            console.log(`${a}, ${b}, ${c}`);
            if ((a > b && b < c) || (a < b && b > c)) {
                temp.push(1);
            } else {
                temp.push(0);
            }
        }
        return temp;
    }
};

console.log(answer(arr));

/**
     * Console log
        1, 3, 5
        3, 5, 4
        5, 4, 5
        4, 5, 7
        (4) [0, 1, 1, 0]
     */
