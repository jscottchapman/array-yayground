//1.write a recursive function that prints all of the numbers
//from 10 to 1

let categories = [
  { id: "animals", parent: null },
  { id: "mammals", parent: "animals" },
  { id: "cats", parent: "mammals" },
  { id: "dogs", parent: "mammals" },
  { id: "chihuahua", parent: "dogs" },
  { id: "labrador", parent: "dogs" },
  { id: "persian", parent: "cats" },
  { id: "siamese", parent: "cats" }
];

//2.write a recursive function that prints these out into
// a tree based on their parents

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => (node[c.id] = makeTree(categories, c.id)));
  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));
// Answer 1
// function print(n) {
//     if (n === 0) {
//       return;
//     }
//     console.log(n);
//     print(n - 1);
//   }
//   print(10);
