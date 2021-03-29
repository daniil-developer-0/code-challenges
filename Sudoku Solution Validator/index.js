// Алгоритм:
// 1. Сумма элементов в каждой строке должна быть равна сумме элементов арифметической прогрессии от 1 до 9;
// 2. Сумма элементов в каждом столбце должна быть равна сумме элементов арифметической прогрессии от 1 до 9;
// 3. Сумма элементов в 1 из 9 квадрантов должна быть равна сумме элементов арифметической прогрессии от 1 до 9;
function validSolution(board) {
    var ariphmeticSum = board[0].reduce((a,b) => {return a + b});
    return checkLine(board, ariphmeticSum) && checkCol(board, ariphmeticSum) && checkQuadrant(board, ariphmeticSum);
}

let checkLine = function (board, as) {
    let sumOfLine;
    for (let i = 0; i < board.length; i++) {
        sumOfLine = 0;
        for (let j = 0; j < board[i].length; j++) {
            sumOfLine += board[i][j];
        }
        if (sumOfLine !== as) {
            return false;
        }
    }
    return true;
};

let checkCol = function (board, as) {
    let sumOfCol;
    for (let i = 0; i < board.length; i++) {
        sumOfCol = 0;
        for (let j = 0; j < board[i].length; j++) {
            sumOfCol += board[j][i];
        }
        if (sumOfCol !== as) {
            return false;
        }
    }
    return true;
};

let checkQuadrant = function (board, as) {

    const CORRECT_SUM = as * 3;
    let sumOf3Quadrants;
    // Loop for checking columns
    for (let colMultiplier = 0; colMultiplier < 3; colMultiplier++) {
        for (let rowMultiplier = 0; rowMultiplier < 3; rowMultiplier++) {
            sumOf3Quadrants = 0;
            for (let i = 0; i < 3; i++) {
                sumOf3Quadrants += board[3 * rowMultiplier + i]
                    .slice(3 * colMultiplier, 3 * (colMultiplier + 1))
                    .reduce((a, b) => {
                        return a + b;
                    });
            }
        }
        if (sumOf3Quadrants !== 45) {
            return false;
        }
    }
    return true;
};



module.exports = validSolution;
