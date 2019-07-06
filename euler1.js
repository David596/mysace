function isOdd(x) {
	return x%2 !== 0;
}

function isMultiple(x) {
	return x%3 == 0 || x%5 == 0;
}

result = 0;
for (let i=1; i<1000; ++i) {
	if (isMultiple(i)) {
		result += i;
	}
}
console.log("result=" + result);
