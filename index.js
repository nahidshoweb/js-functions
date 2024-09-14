// calculate differences
function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(10, 5));
console.log(calculateDifference(5, 10));

// calculate odd number
function isOdd(num) {
  return num % 2 === 0;
}
console.log(isOdd(10));

// Find Minimum number
function findMIn(arr) {
  if (arr.length === 0) return null;

  let min = arr[0];
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
console.log(findMIn([]));
console.log(findMIn([5, 2, 1, 0, 15]));

// Filter Even Numbers
function filterEvenNumbers(arr) {
  let evenNumbers = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}
console.log(filterEvenNumbers([5, 2, 10, 17, 21, 20]));

// Sort Array
function sortArrayDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}
console.log(sortArrayDescending([10, 5, 11, 2, 100]));

// Lower Case First Letter
function lowercaseFirstLetter(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello")); // Output: "hello"

// countVowels
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("OSTAD MERN BATCH"));

// Find Average
function findAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));
