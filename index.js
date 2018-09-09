<<<<<<< HEAD
function theBeatlesPlay(musicians_array, instruments_array) {
  var array = [];
  for  (let index = 0; index < musicians_array.length; index++) {
    array[index] = `${musicians_array[index]} plays ${instruments_array[index]}`
=======
// add solution here
function theBeatlesPlay(musicians_array, instruments_array) {
  //array = []
  for  (let index = 0; index < musicians_array.length; index++) {
    array = [];
    array[index] = `${[musicians_array][index]} ${[instruments_array][index]`
>>>>>>> b13172f9c97ddd93f74d006ad1238e46f87f2f7b
  }
  return array
}


function johnLennonFacts(facts_array) {
  var number = 0;
  while (number < facts_array.length) {
  facts_array[number] = `${facts_array[number]}!!!`;
  number += 1
  }
  return facts_array
}


function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return array 
}