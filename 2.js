/**
    Дана матрица из целых чисел от 1 до 9, размером 3 * N, где N может быть
    больше либо равна 3. Необходимо определить содержит ли каждый участок
    матрицы 3 * 3 все числа от 1 до 9.
 */

const matrix = [
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5],
];

const chkArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const answer = (matrix) => {
    let answer = [];
    if (Array.isArray(matrix)) {
        for (let i = 0; i < matrix.length; i++) {
            const section = matrix.flatMap((row) => row.slice(i, i + 3));
            const uniqueDigits = new Set(section);
            uniqueDigits.size == 9 ? answer.push(true) : answer.push(false);
        }
    }
    return answer;
};

console.log(answer(matrix));

/**
 * console log
 * (3) [true, false, true]
 */
