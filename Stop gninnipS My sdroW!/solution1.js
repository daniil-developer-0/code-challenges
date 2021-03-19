"use strict"
function spinWords(s){
    s = s.split(' ');
    console.log(s);
    let res = [];
    for (let ind = 0; ind < s.length; ind++) {
        res.push((s[ind].length >= 5) ? s[ind].split('').reverse().join('') : s[ind]);
    }
    console.log(res.join(' '));
    return res.join(' ');
}

spinWords("Btw, my name is Daniil");
