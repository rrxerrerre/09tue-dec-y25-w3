function concatStrings(riccardo, rachele) {
  console.log((riccardo.slice(0, 2) + rachele.slice(-3)).toUpperCase());
}
concatStrings("riccardo", "rachele");

function getRandomArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) arr.push(Math.floor(Math.random() * 101));
  return arr;
}

const numbers = [3, 8, 12, 5, 7, 10, 22, 13];
const even = getEvenNumbers(numbers);
function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(even);

const 