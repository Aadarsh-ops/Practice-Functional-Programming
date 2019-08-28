function isVowel(str) {
  return (str === 'a' || str === 'e' || str === 'i'|| str === 'o' || str === 'u') ? 1 : 0;
}
function getCount(str) {
  var vowelsCount = str.split('').reduce((acc,curr) => acc += isVowel(curr) ,0)
  console.log(vowelsCount);
  return vowelsCount;
  
}

getCount('aesfidou');