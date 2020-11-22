const getTheTitles = function(books) {
    let arr = [];
    for (e in books) {
        arr.push(e.title);
    }
}

module.exports = getTheTitles;
