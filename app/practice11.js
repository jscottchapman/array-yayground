let friendFaces = [{
    "id": 1,
    "name": {
      "first": "Creight",
      "last": "Tyrone"
    },
    "jobTitle": "Technical Writer",
    "joined": 2011,
    "friends": 59,
    "avatar": "https://robohash.org/etinvoluptatem.bmp?size=200x200&set=set1",
    "city": "El Paso",
    "state": "Texas"
  }, {
    "id": 2,
    "name": {
      "first": "Allyson",
      "last": "Ofener"
    },
    "jobTitle": "Community Outreach Specialist",
    "joined": 2017,
    "friends": 18,
    "avatar": "https://robohash.org/enimnamrerum.jpg?size=200x200&set=set1",
    "city": "Memphis",
    "state": "Tennessee"
  }, {
    "id": 3,
    "name": {
      "first": "Alec",
      "last": "Ferronier"
    },
    "jobTitle": "Assistant Manager",
    "joined": 2010,
    "friends": 7,
    "avatar": "https://robohash.org/velutcorporis.jpg?size=200x200&set=set1",
    "city": "Colorado Springs",
    "state": "Colorado"
  }, {
    "id": 4,
    "name": {
      "first": "Whitaker",
      "last": "Humbatch"
    },
    "jobTitle": "Financial Analyst",
    "joined": 2016,
    "friends": 67,
    "avatar": "https://robohash.org/doloremetducimus.jpg?size=200x200&set=set1",
    "city": "Houston",
    "state": "Texas"
  }, {
    "id": 5,
    "name": {
      "first": "Jillian",
      "last": "Yankov"
    },
    "jobTitle": "Operator",
    "joined": 2012,
    "friends": 89,
    "avatar": "https://robohash.org/inquiavoluptatem.jpg?size=200x200&set=set1",
    "city": "Canton",
    "state": "Ohio"
  }, {
    "id": 6,
    "name": {
      "first": "Gunner",
      "last": "Bolsover"
    },
    "jobTitle": "Sales Associate",
    "joined": 2012,
    "friends": 51,
    "avatar": "https://robohash.org/autemetconsequatur.png?size=200x200&set=set1",
    "city": "San Jose",
    "state": "California"
  }, {
    "id": 7,
    "name": {
      "first": "Ferd",
      "last": "McKitterick"
    },
    "jobTitle": "Environmental Specialist",
    "joined": 2014,
    "friends": 96,
    "avatar": "https://robohash.org/dictautpariatur.png?size=200x200&set=set1",
    "city": "Atlanta",
    "state": "Georgia"
  }, {
    "id": 8,
    "name": {
      "first": "Neale",
      "last": "Miguet"
    },
    "jobTitle": "VP Sales",
    "joined": 2012,
    "friends": 42,
    "avatar": "https://robohash.org/providentminimaexplicabo.png?size=200x200&set=set1",
    "city": "Providence",
    "state": "Rhode Island"
  }, {
    "id": 9,
    "name": {
      "first": "Giralda",
      "last": "Ivushkin"
    },
    "jobTitle": "Electrical Engineer",
    "joined": 2014,
    "friends": 25,
    "avatar": "https://robohash.org/sedlaboreeaque.bmp?size=200x200&set=set1",
    "city": "West Palm Beach",
    "state": "Florida"
  }, {
    "id": 10,
    "name": {
      "first": "Pepi",
      "last": "Gradly"
    },
    "jobTitle": "Database Administrator IV",
    "joined": 2014,
    "friends": 84,
    "avatar": "https://robohash.org/etsuntdolores.png?size=200x200&set=set1",
    "city": "Salinas",
    "state": "California"
  }]


// 1. write a function that prints out the full names of those
// who have twenty or more friends and joined after 2015
// 1st write a function that does the checking using  an
// 'if' statement.Then use a 
// for...of loop to call that function






// // Answer:
// let friendlyNoob = person => {
//     if(person.friends > 19 && person.joined > 2015) {
//         console.log(`${person.name.first} ${person.name.last}(${person.joined}) has ${person.friends} friends`);
//     }
// }
// for(friendster of friendFaces) {
//     friendlyNoob(friendster);
// }

// 2. We're looking for developers and engineers.  Print out
// the first name and professions of those that include the
// word 'developer' or 'engineer.'   If their profession 
// doesn't have those words, print 'NEXT!' First create the
// function that does the checking using if else and then pass it into
// a forEach loop.


//Answer 1: 
//NOTES: show using ternary as well
// function devsAndEngs(person) {
//     let title = person.jobTitle.toLowerCase();
//     if(title.includes('developer') || title.includes('engineer')) {
//         console.log(`${person.name.first} is a ${person.jobTitle}`);
//     } else {
//         console.log('NEXT!');
//     }
//}

//Answer 2 using ternary instead
// function devsAndEngs(person) {
//     let title = person.jobTitle.toLowerCase();
//     (title.includes('developer') || title.includes('engineer')) ?
//         console.log(`${person.name.first} is a ${person.jobTitle}`) :
//         console.log('NEXT!');
// }

// friendsters.forEach(friendster => devsAndEngs(friendster));


//TODO: demo how to do this with another problem

// 3.  Refactor the previous function to take in a person 
// and an array of keywords as strings as its two arguments and do the
// same checking.  Then try it with ['Sales', and 'VP']

// Answer
// function devsAndEngs(person, array) {
//     let title = person.jobTitle.toLowerCase();
//     array.forEach(keyword => {
//         title.includes(keyword.toLowerCase()) ?
//         console.log(`${person.name.first}: ${person.jobTitle}`) :
//         console.log('NEXT!');
//     })
// }

// friendsters.forEach(friendster => devsAndEngs(friendster, ['Sales', 'VP']));

