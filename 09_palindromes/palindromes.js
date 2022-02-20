const palindromes = function (word) {
    word = word.toLowerCase();
    let wordArray = word.split("");
    let alphaBet = "abcdefghijklmnopqrstuvwxyzåäö"
    let onlyLetters = wordArray.filter(letter => alphaBet.includes(letter));
    word = onlyLetters.join("");
    let reverse = "";
    for (letter of onlyLetters){
        reverse = letter + reverse;
    }
    return reverse === word;
};

// Do not edit below this line
module.exports = palindromes;
