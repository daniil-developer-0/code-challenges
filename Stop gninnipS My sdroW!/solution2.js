"use strict"
function spinWords(s){
    return s.split(' ')
      .map(x => {return (x.length >= 5) ? x.split('').reverse().join(''): x})
      .join(' ');
}
