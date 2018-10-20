let friends = [{
    "id": 1,
    "first_name": "Lin",
    "last_name": "Musico",
    "email": "lmusico0@goodreads.com",
    "age": 21,
    "ip_address": "242.2.133.232",
    "country": "Mexico",
    "income": 26306
  }, {
    "id": 2,
    "first_name": "Aeriell",
    "last_name": "Askie",
    "email": "aaskie1@yale.edu",
    "age": 25,
    "ip_address": "235.202.194.126",
    "country": "United States",
    "income": 28081
  }, {
    "id": 3,
    "first_name": "Vanya",
    "last_name": "Daymont",
    "email": "vdaymont2@hud.gov",
    "age": 29,
    "ip_address": "2.125.158.24",
    "country": "Mexico",
    "income": 25076
  }, {
    "id": 4,
    "first_name": "Brianne",
    "last_name": "Feavyour",
    "email": "bfeavyour3@friendfeed.com",
    "age": 26,
    "ip_address": "118.68.82.137",
    "country": "Mexico",
    "income": 24484
  }, {
    "id": 5,
    "first_name": "Sarajane",
    "last_name": "Spaxman",
    "email": "sspaxman4@hp.com",
    "age": 25,
    "ip_address": "138.185.113.209",
    "country": "Mexico",
    "income": 23289
  }, {
    "id": 6,
    "first_name": "Shane",
    "last_name": "Follit",
    "email": "sfollit5@google.pl",
    "age": 23,
    "ip_address": "23.17.38.22",
    "country": "Mexico",
    "income": 29336
  }, {
    "id": 7,
    "first_name": "Nyssa",
    "last_name": "Purle",
    "email": "npurle6@typepad.com",
    "age": 26,
    "ip_address": "235.218.195.160",
    "country": "United States",
    "income": 21526
  }, {
    "id": 8,
    "first_name": "Kayle",
    "last_name": "Clamo",
    "email": "kclamo7@columbia.edu",
    "age": 28,
    "ip_address": "250.174.151.151",
    "country": "Canada",
    "income": 20061
  }, {
    "id": 9,
    "first_name": "Vernor",
    "last_name": "Gotfrey",
    "email": "vgotfrey8@google.com.au",
    "age": 25,
    "ip_address": "248.205.189.136",
    "country": "United States",
    "income": 22398
  }, {
    "id": 10,
    "first_name": "Iorgo",
    "last_name": "Radage",
    "email": "iradage9@harvard.edu",
    "age": 28,
    "ip_address": "101.217.211.222",
    "country": "Canada",
    "income": 20028
  }, {
    "id": 11,
    "first_name": "Tadio",
    "last_name": "Gotling",
    "email": "tgotlinga@google.de",
    "age": 25,
    "ip_address": "217.251.19.198",
    "country": "United States",
    "income": 29035
  }, {
    "id": 12,
    "first_name": "Elayne",
    "last_name": "Pyke",
    "email": "epykeb@chronoengine.com",
    "age": 27,
    "ip_address": "181.69.192.13",
    "country": "United States",
    "income": 22891
  }, {
    "id": 13,
    "first_name": "Cindy",
    "last_name": "McFaell",
    "email": "cmcfaellc@narod.ru",
    "age": 21,
    "ip_address": "190.247.177.210",
    "country": "Canada",
    "income": 27816
  }, {
    "id": 14,
    "first_name": "Doy",
    "last_name": "Snelman",
    "email": "dsnelmand@spotify.com",
    "age": 28,
    "ip_address": "252.92.74.87",
    "country": "United States",
    "income": 20837
  }, {
    "id": 15,
    "first_name": "Far",
    "last_name": "Marvel",
    "email": "fmarvele@census.gov",
    "age": 26,
    "ip_address": "131.71.120.212",
    "country": "United States",
    "income": 22586
  }, {
    "id": 16,
    "first_name": "Olva",
    "last_name": "Sally",
    "email": "osallyf@cloudflare.com",
    "age": 25,
    "ip_address": "7.188.158.200",
    "country": "Canada",
    "income": 21953
  }, {
    "id": 17,
    "first_name": "Elisa",
    "last_name": "Antonnikov",
    "email": "eantonnikovg@lycos.com",
    "age": 21,
    "ip_address": "177.179.246.224",
    "country": "United States",
    "income": 25993
  }, {
    "id": 18,
    "first_name": "Nataniel",
    "last_name": "Battista",
    "email": "nbattistah@facebook.com",
    "age": 23,
    "ip_address": "45.113.90.37",
    "country": "United States",
    "income": 24545
  }, {
    "id": 19,
    "first_name": "Jeffry",
    "last_name": "Clemett",
    "email": "jclemetti@twitpic.com",
    "age": 29,
    "ip_address": "38.64.62.222",
    "country": "Canada",
    "income": 29044
  }, {
    "id": 20,
    "first_name": "Beverlee",
    "last_name": "Gibberd",
    "email": "bgibberdj@acquirethisname.com",
    "age": 25,
    "ip_address": "50.52.169.21",
    "country": "United States",
    "income": 24289
  }]

// username@domain.com
// print out the username of the mailbox
// of each of these folks

//friends.forEach(friend => console.log(friend.email.split('@')[0]));




//How many tld's of those 25 and over are not .com
// let older = friends.filter(friend => friend.age > 24 && !friend.email.includes('.com'));
// console.log(older.length);











// What is the average income of those who live in the US,
// those that live in Canada, and those that live in Mexico

let canadians = friends.filter(friend => friend.country === "Canada");
let mexicans = friends.filter(friend => friend.country === "Mexico");
let muricans = friends.filter(friend => friend.country === "United States");

console.log('Canadian average', canadians.reduce((start, next) => start + next.income, 0) / canadians.length);

//console.log(numsAndCountries);

