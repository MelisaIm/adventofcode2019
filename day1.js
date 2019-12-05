const fs = require('fs');

// Part 1
function writeArrayfromFile(file) {
	if (!file) {
		return;
	}
	let content = fs.readFileSync(file, 'utf8');
	let array = content.split("\n");
	return array;
}

let inputs = writeArrayfromFile("./day1input.txt");

function day1part1(arr) {
	let array = arr;
	// divide by 3 round down and subtract 2
	array = array.map((num) => Math.floor((parseInt(num, 10))/3) - 2);
	console.log ("Day 1, Part 1: ", array.reduce((num, sum) => num + sum));
	return array;
}

// Part 2
function day1part2(arr) {
	let fuelRequirements = [];

	arr.map((massInput) => {
		let requirement = massInput;
		let mass = massInput;
		while (requirement > 0) {
			requirement = Math.floor(mass/3) - 2;
			if (requirement > 0) {
				fuelRequirements.push(requirement);
			}
			mass = requirement;
		}
	});
	console.log("Day 1, Part 2: ", fuelRequirements.reduce((num, sum) => num + sum));
}

day1part1(inputs)
day1part2(inputs);
