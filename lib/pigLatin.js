'use strict';

let pigLatin = function(english){
  const arrayOfWords = english.split(' ');
  if(arrayOfWords.length > 1){
    return arrayOfWords.map(word => pigLatin(word)).join(' ');
  }

  const vowelChars = /^[aeiouAEIOU]/;
  const threeLetterCluster = /^(sch|thr)/i;
  const consonantQuChars = /[b-df-hj-np-tv-z]qu/i;
  const quChars = /^qu/i;
  const twoConsonantChars = /^[^aeiou\W\d_]{2}/i;
  const firstLetterConsonant = /^[^aeiou\W\d_]/i;
  
  if(english.match(vowelChars)){
    return english + 'ay';
  }
  if(english.match(threeLetterCluster)){
    return english.slice(3) + english.slice(0,3) + 'ay';
  }

  if(english.match(consonantQuChars)){
    return english.replace(/^([b-df-hj-np-tv-z]qu)(.*)$/i, '$2$1') + 'ay';
  }

  if(english.match(quChars)){
    return english.slice(2) + english.slice(0,2) + 'ay';
  }

  if(english.match(twoConsonantChars)){
    return english.slice(2) + english.slice(0,2) + 'ay';
  } else if(english.match(firstLetterConsonant)){
    return english.slice(1) + english.charAt(0) + 'ay';
  }

};
console.log(pigLatin('school'));
module.exports = pigLatin;