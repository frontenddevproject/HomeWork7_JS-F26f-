//--------------------------------------Task 1------------------------------------------------------------------------------------------------------
console.log("Task 1");
const arr = [1, 2, 100, 7];
let sum = 0;

for (let el of arr) {
	sum = sum + el;
}

console.log(`The sum of numbers in an array [${arr}] is ${sum}.`);
console.log("");

//--------------------------------------Task 2------------------------------------------------------------------------------------------------------
console.log("Task 2");
let arr2 = [1,2,3,4,5];

const fn = (arr, i, newElement) => {
	arr[i] = newElement;
	return arr;
};

console.log(fn(arr2, 2, "Hello"));