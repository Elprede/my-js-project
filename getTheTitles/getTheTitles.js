const getTheTitles = function(books) {
    let arr = [];
    let i = 0;
    for (let e in books) {
        arr.push(books[e].title);
    }

    return arr;

}


module.exports = getTheTitles;
