let people = [{
    "id": 1,
    "name": {
      "first": "Theressa",
      "last": "Maghull"
    },
    "email": "tmaghull0@xing.com",
    "age": 75,
    "income": 60310
  }, {
    "id": 2,
    "name": {
      "first": "Simonne",
      "last": "Cliff"
    },
    "email": "scliff1@sitemeter.com",
    "age": 39,
    "income": 64374
  }, {
    "id": 3,
    "name": {
      "first": "Melosa",
      "last": "Rickis"
    },
    "email": "mrickis2@hexun.com",
    "age": 25,
    "income": 87974
  }, {
    "id": 4,
    "name": {
      "first": "Tyrone",
      "last": "Barfield"
    },
    "email": "tbarfield3@alexa.com",
    "age": 81,
    "income": 30924
  }, {
    "id": 5,
    "name": {
      "first": "Brig",
      "last": "Ridgedell"
    },
    "email": "bridgedell4@drupal.org",
    "age": 84,
    "income": 39573
  }, {
    "id": 6,
    "name": {
      "first": "Nicol",
      "last": "Trew"
    },
    "email": "ntrew5@friendfeed.com",
    "age": 28,
    "income": 72697
  }, {
    "id": 7,
    "name": {
      "first": "Titus",
      "last": "Carleton"
    },
    "email": "tcarleton6@ebay.co.uk",
    "age": 83,
    "income": 36066
  }, {
    "id": 8,
    "name": {
      "first": "Hephzibah",
      "last": "Treagust"
    },
    "email": "htreagust7@virginia.edu",
    "age": 49,
    "income": 57726
  }, {
    "id": 9,
    "name": {
      "first": "Donetta",
      "last": "Webster"
    },
    "email": "dwebster8@smh.com.au",
    "age": 51,
    "income": 89028
  }, {
    "id": 10,
    "name": {
      "first": "Rachelle",
      "last": "Asmus"
    },
    "email": "rasmus9@bbc.co.uk",
    "age": 22,
    "income": 72879
  }, {
    "id": 11,
    "name": {
      "first": "Kaitlin",
      "last": "Duran"
    },
    "email": "kdurana@ed.gov",
    "age": 29,
    "income": 37190
  }, {
    "id": 12,
    "name": {
      "first": "Luca",
      "last": "Mountfort"
    },
    "email": "lmountfortb@dagondesign.com",
    "age": 73,
    "income": 34040
  }, {
    "id": 13,
    "name": {
      "first": "Wini",
      "last": "Pargeter"
    },
    "email": "wpargeterc@meetup.com",
    "age": 78,
    "income": 49755
  }, {
    "id": 14,
    "name": {
      "first": "Peggi",
      "last": "McKoy"
    },
    "email": "pmckoyd@opera.com",
    "age": 89,
    "income": 59556
  }, {
    "id": 15,
    "name": {
      "first": "Flori",
      "last": "Rentoll"
    },
    "email": "frentolle@wikia.com",
    "age": 33,
    "income": 46988
  }, {
    "id": 16,
    "name": {
      "first": "Giustina",
      "last": "Simonot"
    },
    "email": "gsimonotf@pcworld.com",
    "age": 92,
    "income": 33231
  }, {
    "id": 17,
    "name": {
      "first": "Graeme",
      "last": "Tourne"
    },
    "email": "gtourneg@webnode.com",
    "age": 49,
    "income": 56416
  }, {
    "id": 18,
    "name": {
      "first": "Paulie",
      "last": "Ivannikov"
    },
    "email": "pivannikovh@biglobe.ne.jp",
    "age": 87,
    "income": 38152
  }, {
    "id": 19,
    "name": {
      "first": "Verne",
      "last": "Baroch"
    },
    "email": "vbarochi@tinyurl.com",
    "age": 49,
    "income": 37008
  }, {
    "id": 20,
    "name": {
      "first": "Barnabe",
      "last": "Gemeau"
    },
    "email": "bgemeauj@spiegel.de",
    "age": 79,
    "income": 70238
  }]

  //print the email addresses of those who have uk
  //in their email address

  //find the highest income of those 50 and older
 
// let overFifty = people.filter(person => person.age >= 50);
// let incomes = overFifty.map(person => person.income).sort().pop();
// // let maxIncome = Math.max(...incomes);




// console.log(incomes);










  





  //how many people make between 30 and 50K per year

let middlers = people.filter(person => person.income > 30000 && person.income < 50000);
console.log(middlers);
