// Tree data structure for reversing a string

function reverseString(string) {
  if (string.length === 1) return string;
  let parentNode = Math.floor(string.length / 2);
  let leftPart = string.substring(0, parentNode)
  let rightPart = string.substring(parentNode);
  return reverseString(rightPart) + reverseString(leftPart);
 }

 reverseString('racecar');