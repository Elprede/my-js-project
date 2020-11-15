const palindromes = function(word) {
    word = word.replaceAll(" ", "");
    word = word.replaceAll(", ", "");
    word = word.replaceAll("!", "");
    word = word.replaceAll(",", "");
    word = word.replaceAll(".", "");
    word = word.toUpperCase();
    
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] != word[word.length - i - 1]) {
            console.log(word);
            return false;
            
        }
    }
    console.log(word);
    return true;

}

module.exports = palindromes
