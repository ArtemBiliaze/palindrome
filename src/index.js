const isPalindrome2 = (str) => {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9а-яё]/g, "");
  for (let i = 0; i < cleanedStr.length; i++) {
     if(!(cleanedStr[(cleanedStr.length - 1) - i] === cleanedStr[i] )) {
        return false ;
     }
  }
  return true;
};
console.log(isPalindrome2("А роза упала на лапу Азора"));
console.log(isPalindrome2("A man, a plan, a canal: Panama"));
console.log(isPalindrome2("hello"));
