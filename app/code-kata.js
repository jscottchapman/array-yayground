//largest strictly increasing square roots addition:

// function decompose(num) {
//   //while the answers are increasing
//   //until we get the total in answer
//   //get the one that has the highest final element in answers
//   let answers = [];
//   let answer = [];
//   let sum = answer.reduce((x, y) => x + y, 0);
//   for (let i = 1; sum <= num; i++) {
//     Math.sqrt(num) * Math.sqrt(num) === num ? answer.push[i] : null;
//   }
//   console.log(answer);
// }
// console.log(decompose(100));
// Challenge:  Change the number to a letter,
// then swap the second and last letter to
// make a sentence

// function decipherThis(str) {
//   let message = str.split(" ").map(word => {
//     let numbers = word.match(/\d+/g);
//     let newWord = word.replace(numbers, String.fromCharCode(numbers));
//     if (newWord.length > 2) {
//       return `${newWord[0]}${word[word.length - 1]}${newWord.slice(2, -1)}${
//         newWord[1]
//       }`;
//     }
//     return newWord;
//   });
//   return message.join(" ");
// }

// console.log(
//   decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
// );

const roundToFive = numbers =>
  numbers.map(number => Math.round(number / 5) * 5);
console.log(roundToFive([11, 13, 21, 54]));
