let candidates = [{
    "id": 1,
    "name": {
      "first": "Aldis",
      "last": "Chaff",
      "fullName": "Aldis Chaff"
    },
    "favColor": "Blue",
    "runFrequency": "Seldom",
    "pocketMoney": "28.27"
  }, {
    "id": 2,
    "name": {
      "first": "Tonya",
      "last": "Mangeot",
      "fullName": "Tonya Mangeot"
    },
    "favColor": "Indigo",
    "runFrequency": "Never",
    "pocketMoney": "6.07"
  }, {
    "id": 3,
    "name": {
      "first": "Theodor",
      "last": "Mollene",
      "fullName": "Theodor Mollene"
    },
    "favColor": "Khaki",
    "runFrequency": "Daily",
    "pocketMoney": "86.52"
  }, {
    "id": 4,
    "name": {
      "first": "Nikoletta",
      "last": "Gossage",
      "fullName": "Nikoletta Gossage"
    },
    "favColor": "Mauv",
    "runFrequency": "Seldom",
    "pocketMoney": "25.19"
  }, {
    "id": 5,
    "name": {
      "first": "Agata",
      "last": "Croan",
      "fullName": "Agata Croan"
    },
    "favColor": "Orange",
    "runFrequency": "Often",
    "pocketMoney": "44.04"
  }, {
    "id": 6,
    "name": {
      "first": "Demetria",
      "last": "De Mattei",
      "fullName": "Demetria De Mattei"
    },
    "favColor": "Violet",
    "runFrequency": "Monthly",
    "pocketMoney": "90.05"
  }, {
    "id": 7,
    "name": {
      "first": "Lesley",
      "last": "Headrick",
      "fullName": "Lesley Headrick"
    },
    "favColor": "Khaki",
    "runFrequency": "Seldom",
    "pocketMoney": "67.04"
  }, {
    "id": 8,
    "name": {
      "first": "Flora",
      "last": "Petrik",
      "fullName": "Flora Petrik"
    },
    "favColor": "Aquamarine",
    "runFrequency": "Yearly",
    "pocketMoney": "9.56"
  }, {
    "id": 9,
    "name": {
      "first": "Cesya",
      "last": "Marler",
      "fullName": "Cesya Marler"
    },
    "favColor": "Green",
    "runFrequency": "Once",
    "pocketMoney": "43.85"
  }, {
    "id": 10,
    "name": {
      "first": "Addia",
      "last": "Deare",
      "fullName": "Addia Deare"
    },
    "favColor": "Goldenrod",
    "runFrequency": "Daily",
    "pocketMoney": "0.91"
  }, {
    "id": 11,
    "name": {
      "first": "Cyrus",
      "last": "Kop",
      "fullName": "Cyrus Kop"
    },
    "favColor": "Teal",
    "runFrequency": "Often",
    "pocketMoney": "29.40"
  }, {
    "id": 12,
    "name": {
      "first": "Archibaldo",
      "last": "Matteris",
      "fullName": "Archibaldo Matteris"
    },
    "favColor": "Orange",
    "runFrequency": "Monthly",
    "pocketMoney": "45.73"
  }, {
    "id": 13,
    "name": {
      "first": "Flemming",
      "last": "Hug",
      "fullName": "Flemming Hug"
    },
    "favColor": "Pink",
    "runFrequency": "Seldom",
    "pocketMoney": "72.55"
  }, {
    "id": 14,
    "name": {
      "first": "Floris",
      "last": "Mulvy",
      "fullName": "Floris Mulvy"
    },
    "favColor": "Crimson",
    "runFrequency": "Seldom",
    "pocketMoney": "82.17"
  }, {
    "id": 15,
    "name": {
      "first": "Emili",
      "last": "Russon",
      "fullName": "Emili Russon"
    },
    "favColor": "Maroon",
    "runFrequency": "Once",
    "pocketMoney": "63.03"
  }, {
    "id": 16,
    "name": {
      "first": "Almeta",
      "last": "McGown",
      "fullName": "Almeta McGown"
    },
    "favColor": "Indigo",
    "runFrequency": "Often",
    "pocketMoney": "50.61"
  }, {
    "id": 17,
    "name": {
      "first": "Cesaro",
      "last": "Innocent",
      "fullName": "Cesaro Innocent"
    },
    "favColor": "Goldenrod",
    "runFrequency": "Seldom",
    "pocketMoney": "19.09"
  }, {
    "id": 18,
    "name": {
      "first": "Ethel",
      "last": "Meffan",
      "fullName": "Ethel Meffan"
    },
    "favColor": "Purple",
    "runFrequency": "Once",
    "pocketMoney": "70.94"
  }, {
    "id": 19,
    "name": {
      "first": "Amber",
      "last": "Brugsma",
      "fullName": "Amber Brugsma"
    },
    "favColor": "Goldenrod",
    "runFrequency": "Daily",
    "pocketMoney": "82.36"
  }, {
    "id": 20,
    "name": {
      "first": "Janeta",
      "last": "Rishbrook",
      "fullName": "Janeta Rishbrook"
    },
    "favColor": "Red",
    "runFrequency": "Once",
    "pocketMoney": "45.10"
  }]

// let lessMoney = candidates.filter(candidate => candidate.pocketMoney < 50)
//                             .reduce((x, y) => x + +y.pocketMoney, 0);
// console.log(lessMoney); 

//   lighterPeople.forEach(lighterPerson => console.log(`${lighterPerson.name.fullName} has ${lighterPerson.pocketMoney}`))

// let total = candidates.reduce((accumulator, next) => accumulator + +next.pocketMoney, 0);
// console.log('$', total);

//of those that run often what is the average pocketMoney
// let numberOfOfteners = candidates.filter(candidate =>  candidate.runFrequency === 'Often')
// let averageMoney = numberOfOfteners.reduce((x, y) => x + +y.pocketMoney, 0) / numberOfOfteners.length

// console.log('average money', averageMoney);

//average pocketMoney of those who has khaki as
//their favorite color
let kLovers = candidates.filter(person => person.favColor.toLowerCase() === "khaki");
let average = kLovers.reduce((x, y) => x + +y.pocketMoney, 0) / kLovers.length;
console.log('average', average);