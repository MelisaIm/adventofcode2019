const fs = require('fs');
function writeArrayfromFile(file) {
	if (!file) {
		return;
	}
	let content = fs.readFileSync(file, 'utf8');
	let array = content.split("\n");
	return array;
}

let inputs = writeArrayfromFile("./day1input.txt");

function day1(arr) {
	let array = arr;
	// divide by 3 round down and subtract 2
	array = array.map((num) => Math.floor((parseInt(num, 10))/3) - 2);
	console.log(array);
	console.log (array.reduce((num, sum) => num + sum));
}

day1(inputs);
