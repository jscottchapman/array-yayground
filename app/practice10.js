let people = [{
    "id": 1,
    "name": {
      "first": "Gray",
      "last": "Shakesby"
    },
    "mimosasCount": 68,
    "gender": "Female",
    "drug": "Night Time Cough"
  }, {
    "id": 2,
    "name": {
      "first": "Radcliffe",
      "last": "Swetman"
    },
    "mimosasCount": 60,
    "gender": "Male",
    "drug": "Carvedilol"
  }, {
    "id": 3,
    "name": {
      "first": "Bernelle",
      "last": "Jefferies"
    },
    "mimosasCount": 29,
    "gender": "Female",
    "drug": "Rivastigmine Tartrate"
  }, {
    "id": 4,
    "name": {
      "first": "Bette",
      "last": "Lourens"
    },
    "mimosasCount": 38,
    "gender": "Female",
    "drug": "Argentum 0.4 Adult Size (cocoa butter) Special Order"
  }, {
    "id": 5,
    "name": {
      "first": "Nobe",
      "last": "Lengthorn"
    },
    "mimosasCount": 13,
    "gender": "Male",
    "drug": "Ciprofloxacin"
  }, {
    "id": 6,
    "name": {
      "first": "Susannah",
      "last": "Railton"
    },
    "mimosasCount": 89,
    "gender": "Female",
    "drug": "VITALUMIERE AQUA"
  }, {
    "id": 7,
    "name": {
      "first": "Regine",
      "last": "Wynrahame"
    },
    "mimosasCount": 79,
    "gender": "Female",
    "drug": "dg health stomach relief"
  }, {
    "id": 8,
    "name": {
      "first": "Bevin",
      "last": "Klimpke"
    },
    "mimosasCount": 50,
    "gender": "Male",
    "drug": "Neostigmine Methylsulfate"
  }, {
    "id": 9,
    "name": {
      "first": "Grantley",
      "last": "Perrie"
    },
    "mimosasCount": 34,
    "gender": "Male",
    "drug": "nighttime cold and flu relief"
  }, {
    "id": 10,
    "name": {
      "first": "Timmi",
      "last": "Sparks"
    },
    "mimosasCount": 70,
    "gender": "Female",
    "drug": "Dilantin Infatabs"
  }, {
    "id": 11,
    "name": {
      "first": "Duky",
      "last": "Syrad"
    },
    "mimosasCount": 11,
    "gender": "Male",
    "drug": "Amitriptyline Hydrochloride"
  }, {
    "id": 12,
    "name": {
      "first": "Georgette",
      "last": "Langfield"
    },
    "mimosasCount": 85,
    "gender": "Female",
    "drug": "Noritate"
  }, {
    "id": 13,
    "name": {
      "first": "Adelina",
      "last": "Osgarby"
    },
    "mimosasCount": 53,
    "gender": "Female",
    "drug": "Norml Shield"
  }, {
    "id": 14,
    "name": {
      "first": "Kandy",
      "last": "Overal"
    },
    "mimosasCount": 96,
    "gender": "Female",
    "drug": "Neuro Balance Pro"
  }, {
    "id": 15,
    "name": {
      "first": "Florance",
      "last": "Seden"
    },
    "mimosasCount": 22,
    "gender": "Female",
    "drug": "Therabenzaprine-60"
  }, {
    "id": 16,
    "name": {
      "first": "Coletta",
      "last": "Piatek"
    },
    "mimosasCount": 35,
    "gender": "Female",
    "drug": "Benazepril Hydrochloride"
  }, {
    "id": 17,
    "name": {
      "first": "Joe",
      "last": "Quinnell"
    },
    "mimosasCount": 30,
    "gender": "Male",
    "drug": "Rapid Repair Balm"
  }, {
    "id": 18,
    "name": {
      "first": "Denna",
      "last": "McVitty"
    },
    "mimosasCount": 67,
    "gender": "Female",
    "drug": "REPREXAIN"
  }, {
    "id": 19,
    "name": {
      "first": "Dorey",
      "last": "Wilsher"
    },
    "mimosasCount": 39,
    "gender": "Male",
    "drug": "SUNSHINY DAY SCENTED HAND SANITIZER"
  }, {
    "id": 20,
    "name": {
      "first": "Stormi",
      "last": "Blemen"
    },
    "mimosasCount": 2,
    "gender": "Female",
    "drug": "Thymupar"
  }]

// get the average mimosas drank using map() first to just get an array
// of the drinks then reduce to get a total count
// let totalDranksAverage = people.map(person => person.mimosasCount)
//                     .reduce((dranks, nextDrank) => dranks + nextDrank) / people.length;
// console.log('Dranks', totalDranksAverage);


// get the total mimosas drank by those who have had 
// less than 50 mimosas
// let totalMimosas = people.map(person => person.mimosasCount);

// let total = totalMimosas  
//                 .filter(number => number > 50)
//                 .reduce((x, y) => x + y);
// console.log(total);

// get the avg mimosas for those whose drug is more than one word  
// or less than one word
// let brief = people.filter(person => !person.drug.includes(' '));
// brief.forEach(person => console.log(`${person.name.first} takes ${person.drug}`));
// let briefMimosasAverage = brief.reduce((x, y) => x + y.mimosasCount, 0) / brief.length;
// console.log('briefMimosasAverage', briefMimosasAverage);

