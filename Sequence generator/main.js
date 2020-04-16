var generator = sequence(10, 3);
console.log(generator()); // 10
console.log(generator()); // 13
var generatorTwo = sequence(7, 1);
console.log(generatorTwo()); // 7
console.log(generator()); // 16
console.log(generatorTwo()); // 8
console.log(generatorTwo()); // 9
var generatorThree = sequence(15, 10);
console.log(generatorThree()); // 15
console.log(generatorThree()); //25
function sequence(startNumber = 0, step) {
	var number = startNumber;
	return function generate() {
		var value = number;
		number += step;
		return value;
	};
}
