const isPalindrome = (str) => {
    let cleanedStr = str.toLowerCase().split(' ').join('');
    let reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr === reversedStr;
}

console.log(isPalindrome('А роза упала на лапу Азора'))
console.log(isPalindrome('hello'))