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

// Esercizio 7
/*function getLengthFromArr(array) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    const str = array[i];

    newArr.push(str.length);
  }
  return newArr;
}*/

console.log(getLengthFromArr(["EPICODE", "is", "great"]));

const getLengthFromArr = (array) => array.map((str) => str.length);
console.log(getLengthFromArr(["EPICODE", "is", "great"]));

//Esercizio 9
const getOldestMovie = function (array) {
  let getOldestMovie = array[0];

  array.forEach((movie) => {
    let getOldestMovie = array[0];

    if (movie.Year < getOldestMovie.Year) {
      getOldestMovie = movie;
    }
  });
  return getOldestMovie;
};
console.log(getOldestMovie(movies));

//Esercizio 10
const getLengthFromMovies = function (array) {
  return array.length;
};
console.log(getLengthFromMovies(movies));

//Esercizio 11
const onlyTitles = function (array) {
  return array.map((movie) => movie.Title);
};
console.log(onlyTitles(movies));

//Eesercizio 12
const onlyInCurrentMillenium = function (array) {
  return array.filter((movie) => movie.Year >= 2000);
};
console.log(onlyInCurrentMillenium(movies));

//Esercizio 14
const findMovieById = function (id) {
  return movies.find((movie) => movie.imdbID === id);
};
console.log(findMovieById("tt0087365"));

//Esercizio 15
const findAndDelete = function (array, year) {
  return array.findIndex((movie) => movie.Year === year);
};
console.log(findAndDelete(movies, "2000"));

//REDUCE
//Reduce serve per ciclare un array e ridurre i valori in un SINGOLO VALORE DI RITORNO


