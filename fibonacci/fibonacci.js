const fibonacci = function(a) {
    let i;
    let fib = [];

    fib[0] = 0;
    fib[1] = 1;

    for (i = 2; i <= a; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[a] === undefined ? "OOPS" : fib[a];  
    
}

module.exports = fibonacci
