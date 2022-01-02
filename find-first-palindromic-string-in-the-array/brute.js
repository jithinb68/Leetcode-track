var firstPalindrome = function(words) {
  let palindromicString = "";
  for(const word of words) {
      if(word === word.split('').reverse().join('')) {
          palindromicString = word;
          break;
      }
  }
  return palindromicString;
}