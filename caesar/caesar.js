const caesar = function(word, shift) {
    let result = "";
    let buffer = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) {
            buffer = capitalLetter(word[i].charCodeAt(), shift);
        } else if (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122) {
            buffer = smallLetter(word[i].charCodeAt(), shift);
        } else {
            buffer = word[i].charCodeAt();
        }
        result += String.fromCharCode(buffer);
    }
    return result;
}

function capitalLetter(a, shift) {
    if (a + shift > 90) {
        return capitalLetter((a + shift - 90) + 64, 0);
    } else if (a + shift < 65) {
        return capitalLetter((90 + (a - 64 + shift)), 0);
    }
    return a + shift;
}

function smallLetter(a, shift) {
    if (a + shift > 122) {
        return smallLetter((a + shift - 122) + 96, 0);
    } else if (a + shift < 97) {
        return smallLetter((122 + (a - 96 + shift)), 0);
    }
    return a + shift;
}


module.exports = caesar
