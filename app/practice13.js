const jobs = [{
    "id": 1,
    "jobTitle": "Human Resources Assistant IV",
    "pay": {
      "lowest": 26063,
      "highest": 85586
    },
    "trainingYears": 4,
    "happyOften": "Yearly"
  }, {
    "id": 2,
    "jobTitle": "Teacher",
    "pay": {
      "lowest": 53741,
      "highest": 118726
    },
    "trainingYears": 9,
    "happyOften": "Never"
  }, {
    "id": 3,
    "jobTitle": "Biostatistician IV",
    "pay": {
      "lowest": 29294,
      "highest": 120271
    },
    "trainingYears": 5,
    "happyOften": "Weekly"
  }, {
    "id": 4,
    "jobTitle": "Senior Quality Engineer",
    "pay": {
      "lowest": 57068,
      "highest": 78939
    },
    "trainingYears": 5,
    "happyOften": "Never"
  }, {
    "id": 5,
    "jobTitle": "Quality Engineer",
    "pay": {
      "lowest": 41303,
      "highest": 103976
    },
    "trainingYears": 6,
    "happyOften": "Once"
  }, {
    "id": 6,
    "jobTitle": "Programmer IV",
    "pay": {
      "lowest": 28547,
      "highest": 81152
    },
    "trainingYears": 5,
    "happyOften": "Weekly"
  }, {
    "id": 7,
    "jobTitle": "Analyst Programmer",
    "pay": {
      "lowest": 48906,
      "highest": 93510
    },
    "trainingYears": 9,
    "happyOften": "Once"
  }, {
    "id": 8,
    "jobTitle": "Biostatistician II",
    "pay": {
      "lowest": 50558,
      "highest": 108940
    },
    "trainingYears": 2,
    "happyOften": "Seldom"
  }, {
    "id": 9,
    "jobTitle": "VP Product Management",
    "pay": {
      "lowest": 28843,
      "highest": 84491
    },
    "trainingYears": 2,
    "happyOften": "Daily"
  }, {
    "id": 10,
    "jobTitle": "Civil Engineer",
    "pay": {
      "lowest": 37760,
      "highest": 114444
    },
    "trainingYears": 10,
    "happyOften": "Monthly"
  }, {
    "id": 11,
    "jobTitle": "Paralegal",
    "pay": {
      "lowest": 35794,
      "highest": 98738
    },
    "trainingYears": 4,
    "happyOften": "Yearly"
  }, {
    "id": 12,
    "jobTitle": "Financial Analyst",
    "pay": {
      "lowest": 48686,
      "highest": 91469
    },
    "trainingYears": 1,
    "happyOften": "Never"
  }, {
    "id": 13,
    "jobTitle": "Executive Secretary",
    "pay": {
      "lowest": 57983,
      "highest": 104627
    },
    "trainingYears": 1,
    "happyOften": "Once"
  }, {
    "id": 14,
    "jobTitle": "Business Systems Development Analyst",
    "pay": {
      "lowest": 42290,
      "highest": 91878
    },
    "trainingYears": 6,
    "happyOften": "Seldom"
  }, {
    "id": 15,
    "jobTitle": "VP Sales",
    "pay": {
      "lowest": 33752,
      "highest": 110063
    },
    "trainingYears": 5,
    "happyOften": "Once"
  }, {
    "id": 16,
    "jobTitle": "Account Representative II",
    "pay": {
      "lowest": 47595,
      "highest": 109728
    },
    "trainingYears": 5,
    "happyOften": "Once"
  }, {
    "id": 17,
    "jobTitle": "Operator",
    "pay": {
      "lowest": 47007,
      "highest": 114248
    },
    "trainingYears": 10,
    "happyOften": "Daily"
  }, {
    "id": 18,
    "jobTitle": "Paralegal",
    "pay": {
      "lowest": 32035,
      "highest": 89382
    },
    "trainingYears": 7,
    "happyOften": "Weekly"
  }, {
    "id": 19,
    "jobTitle": "Research Associate",
    "pay": {
      "lowest": 38864,
      "highest": 98833
    },
    "trainingYears": 6,
    "happyOften": "Once"
  }, {
    "id": 20,
    "jobTitle": "Professor",
    "pay": {
      "lowest": 43749,
      "highest": 97068
    },
    "trainingYears": 4,
    "happyOften": "Often"
  }]

  //use reduce to get the total trainingYears needed to 
  //have all these jobs

  // let allTheWork = jobs.reduce((first, next) => first + next.trainingYears, 0);
  // console.log(allTheWork);

  // do this with map().reduce()
// let totalYears = jobs.map(job => job.trainingYears)
//                       .reduce((x, y) => x + y);
                        
// console.log(totalYears);

 //do this with a for loop
 //for...of loop




  //find the largest difference betwen the lowest and highest
  //pays for each profession and make a new array of just
  //the jobTitle and the payDisparity
  //then console.log that out
// let payArray = jobs.map(job => {
//   let disparity = job.pay.highest - job.pay.lowest;
//   console.log(`${job.jobTitle} has a pay disparity of ${disparity}`)
// })






 





//   use filter to get those whose training years are 
//   more than 4 and then use reduce to find out the 
//   average highest pay for those people
let more = jobs.filter(job => job.trainingYears > 4);
let average = more.reduce((start, next) => start + next.pay.highest, 0) / more.length;
console.log(average);

