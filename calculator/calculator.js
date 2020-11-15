function add (a, b) {
	let result = a + b;
	return result;
}

function subtract (a, b) {
	let result = a - b;
	return result;
}

function sum (a) {
	const final = a.reduce((total, num) => {
		return total + num;
	}, 0);
	return final;
}

function multiply (a) {
	let result = a[0];
	for (let i = 1; i < a.length; i++) {
		result *= a[i];
	}
	return result;
}

function power(a, b) {
	return Math.pow(a, b);

}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}