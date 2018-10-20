let people = [{
    "id": 1,
    "name": {
      "first": "Gloriana",
      "last": "McKirdy"
    },
    "catchPhrase": "Centralized exuding encryption",
    "age": 26,
    "income": 67155,
    "school": "Université de Ouagadougou"
  }, {
    "id": 2,
    "name": {
      "first": "Thalia",
      "last": "Curr"
    },
    "catchPhrase": "Multi-channelled actuating encryption",
    "age": 54,
    "income": 71035,
    "school": "Universidad Tecnológica Indoamérica"
  }, {
    "id": 3,
    "name": {
      "first": "Dianemarie",
      "last": "Ciabatteri"
    },
    "catchPhrase": "Ergonomic intermediate task-force",
    "age": 56,
    "income": 83146,
    "school": "Duquesne University"
  }, {
    "id": 4,
    "name": {
      "first": "Martie",
      "last": "Capponer"
    },
    "catchPhrase": "Polarised user-facing encryption",
    "age": 67,
    "income": 58292,
    "school": "Ho Polytechnic "
  }, {
    "id": 5,
    "name": {
      "first": "Merwin",
      "last": "Muldrew"
    },
    "catchPhrase": "Extended bandwidth-monitored concept",
    "age": 21,
    "income": 58304,
    "school": "Damietta University"
  }, {
    "id": 6,
    "name": {
      "first": "Cristobal",
      "last": "Gascard"
    },
    "catchPhrase": "Re-engineered discrete hardware",
    "age": 80,
    "income": 25285,
    "school": "Universidade Federal do Vale do São Francisco"
  }, {
    "id": 7,
    "name": {
      "first": "Marijn",
      "last": "Chasen"
    },
    "catchPhrase": "Centralized intermediate approach",
    "age": 79,
    "income": 31494,
    "school": "Universidad Hispanoamericana"
  }, {
    "id": 8,
    "name": {
      "first": "Calida",
      "last": "Lismer"
    },
    "catchPhrase": "Exclusive needs-based paradigm",
    "age": 61,
    "income": 47553,
    "school": "Felician College"
  }, {
    "id": 9,
    "name": {
      "first": "Wanids",
      "last": "Featherston"
    },
    "catchPhrase": "Compatible maximized capacity",
    "age": 95,
    "income": 57822,
    "school": "Polytechnic University of the Philippines"
  }, {
    "id": 10,
    "name": {
      "first": "Malina",
      "last": "Rowley"
    },
    "catchPhrase": "Front-line dedicated capability",
    "age": 62,
    "income": 33463,
    "school": "Iranian Academy of Persian Language and Literature"
  }, {
    "id": 11,
    "name": {
      "first": "Elwood",
      "last": "Yelland"
    },
    "catchPhrase": "Down-sized client-driven customer loyalty",
    "age": 47,
    "income": 26993,
    "school": "Ochanomizu Women's University"
  }, {
    "id": 12,
    "name": {
      "first": "Jeddy",
      "last": "Pocklington"
    },
    "catchPhrase": "Configurable zero tolerance capacity",
    "age": 83,
    "income": 61492,
    "school": "Universidade do Minho"
  }, {
    "id": 13,
    "name": {
      "first": "Sydney",
      "last": "McNeish"
    },
    "catchPhrase": "Configurable context-sensitive open system",
    "age": 26,
    "income": 83461,
    "school": "Université des Montagnes"
  }, {
    "id": 14,
    "name": {
      "first": "Sylvan",
      "last": "Szymanowski"
    },
    "catchPhrase": "Quality-focused neutral synergy",
    "age": 28,
    "income": 29349,
    "school": "Changsha University of Electric Power"
  }, {
    "id": 15,
    "name": {
      "first": "Marcela",
      "last": "Grigoliis"
    },
    "catchPhrase": "Total cohesive flexibility",
    "age": 48,
    "income": 26694,
    "school": "State University of New York College of Agriculture and Technology at Cobleskill"
  }, {
    "id": 16,
    "name": {
      "first": "Ynez",
      "last": "Bowton"
    },
    "catchPhrase": "Compatible neutral emulation",
    "age": 53,
    "income": 32297,
    "school": "Cameron University"
  }, {
    "id": 17,
    "name": {
      "first": "Lelah",
      "last": "Ashbey"
    },
    "catchPhrase": "Devolved bottom-line workforce",
    "age": 89,
    "income": 38458,
    "school": "California Coast University"
  }, {
    "id": 18,
    "name": {
      "first": "Grazia",
      "last": "Wickliffe"
    },
    "catchPhrase": "Triple-buffered interactive initiative",
    "age": 48,
    "income": 84964,
    "school": "Technological University (Monywa)"
  }, {
    "id": 19,
    "name": {
      "first": "Madella",
      "last": "Whitwood"
    },
    "catchPhrase": "Multi-tiered value-added policy",
    "age": 78,
    "income": 45275,
    "school": "Nanjing University of Chemical Technology"
  }, {
    "id": 20,
    "name": {
      "first": "Tamra",
      "last": "Evens"
    },
    "catchPhrase": "Organic mobile intranet",
    "age": 35,
    "income": 29252,
    "school": "University of Southern Philippines Foundation"
  }]


  //Print the slogans that have dashes in them
// let dashSlogans = people.filter(person => person.catchPhrase.includes('-'));
// dashSlogans.forEach(slogan => console.log(slogan.catchPhrase));

//what is the average income of people
// who attended schools with tec in their name
// let tecSchool = people.filter(person => person.school.toLowerCase().includes('tec'));
// let average = tecSchool.reduce((x, y) => x + y.income, 0)/tecSchool.length;
// console.log(average);
// console.log(tecSchool.length);














const average = (array) => {

  return array.reduce((x, y) => x + y.catchPhrase.length, 0) / array.length
}
// average length of catchPhrase for those 50 and under
// and average length of catchPhrase those that are over 50
let younger = people.filter(person => person.age <= 50);
//console.log('average', average);
let youngAverage = average(younger);

//let average = younger.reduce((x, y) => x + y.catchPhrase.length, 0) / younger.length;
console.log('youngAverage', youngAverage);
let older = people.filter(person => person.age > 50);
// //let average2 = older.reduce((x, y) => x + y.catchPhrase.length, 0) / older.length;
console.log('Older Average', average(older));