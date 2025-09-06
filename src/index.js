const isPalindrome2 = (str) => {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9а-яё]/gi, "");
  let reversedStr = "";
  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr += cleanedStr[i];
  }
  return reversedStr === cleanedStr;
};
console.log(isPalindrome2("А роза упала на лапу Азора"));
console.log(isPalindrome2("A man, a plan, a canal: Panama"));
console.log(isPalindrome2("hello"));
