// complete the function
function solution(string) {
    return string.replace(/[A-Z]/g, " $&")
}

module.exports = solution;
