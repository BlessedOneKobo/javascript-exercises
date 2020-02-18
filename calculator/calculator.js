function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
}

function multiply (arr) {
	return arr.reduce((acc, curr) => acc * curr, 1);
}

function power(x, y) {
	return x ** y;
}

function factorial(x) {
	let fact = 1;
	
	for (let i = 1; i <= x; i++) {
		fact *= i;
	}

	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}