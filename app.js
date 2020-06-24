// CHAPTER 21-25
// TASK#1

var firstName = prompt("Hello What's your first name?");
var lastName = prompt("Hello What's your last name?");
alert("Welcome " + firstName + " " + lastName);

// TASK#2

var mobile = prompt("Your favourite phone");
document.write(
  "Your favourite phone is: " +
    mobile +
    "<br/>" +
    "Length of string: " +
    mobile.length
);

// TASK#3

var country = "Pakistan";
alert(country + "\n index of 'n' is:  " + country.indexOf("n"));

// TASK#4
var hello = "Hello World";
alert(hello + "\n last index of 'l' is:  " + hello.lastIndexOf("l"));

// TASK#5

var country = "Pakistan";
alert(country + "\n character at index 3 is:  " + country.charAt(3));

// TASK#6
var firstName = prompt("Hello What's your first name?");
var lastName = prompt("Hello What's your last name?");
var fullName = "Welcome " + firstName.concat(lastName);
alert(fullName);

// TASK#7
var city = "Hyderabad";

for (var i = 0; i < city.length; i++) {
  if (city.slice(i, i + 5) === "Hyder") {
    city = city.slice(0, i) + "Islam" + city.slice(i + 5);
    alert(city);
  }
}

// TASK#8

var str = "472";
var num = parseInt(str);
console.log(str);
console.log(num);

// TASK#9

var food = prompt("what do you want?");
alert(food.toUpperCase());

// TASK#10
var enter = prompt("Enter some thing");
alert(enter.slice(0, 1).toUpperCase() + enter.slice(1).toLowerCase());

// TASK#11

var someNo = 33.56;
alert(someNo.toString().replace(".", ""));

// TASK#12

var userName = prompt("Enter your username");
for (var i = 0; i < userName.length; i++) {
  if (
    userName[i] === String.fromCharCode(33) ||
    userName[i] === String.fromCharCode(44) ||
    userName[i] === String.fromCharCode(46) ||
    userName[i] === String.fromCharCode(64)
  ) {
    alert("Invalid username");
    break;
  } else if (i === userName.length - 1) {
    alert("Welcome back!");
    break;
  }
}

// TASK#13

var loginPassword = prompt("please enter your password");
for (var i = 0; i < loginPassword.length; i++) {
  if (
    loginPassword[i] === String.fromCharCode(48) ||
    loginPassword[i] === String.fromCharCode(49) ||
    loginPassword[i] === String.fromCharCode(50) ||
    loginPassword[i] === String.fromCharCode(51) ||
    loginPassword[i] === String.fromCharCode(52) ||
    loginPassword[i] === String.fromCharCode(53) ||
    loginPassword[i] === String.fromCharCode(54) ||
    loginPassword[i] === String.fromCharCode(55) ||
    loginPassword[i] === String.fromCharCode(56) ||
    loginPassword[i] === String.fromCharCode(57)
  ) {
    if (
      loginPassword[i].slice(i) === String.fromCharCode(48) ||
      loginPassword[i].slice(i) === String.fromCharCode(49) ||
      loginPassword[i].slice(i) === String.fromCharCode(50) ||
      loginPassword[i].slice(i) === String.fromCharCode(52) ||
      loginPassword[i].slice(i) === String.fromCharCode(53) ||
      loginPassword[i].slice(i) === String.fromCharCode(54) ||
      loginPassword[i].slice(i) === String.fromCharCode(55) ||
      loginPassword[i].slice(i) === String.fromCharCode(56) ||
      loginPassword[i].slice(i) === String.fromCharCode(57)
    ) {
      alert("password cannot begin with a number");
      break;
    } else if (i === loginPassword.length - 1) {
      alert("Welcome");
    }
  } else if (i === loginPassword.length - 1) {
    alert("Your password must contain numbers");
    break;
  }
}

// TASK#14

var university = "University of karachi";
for (var i = 0; i < university.length; i++) {
  document.write(university[i] + "<br/>");
}

// CHAPTER 25-30
// TASK#1

var decimal = prompt("Enter a decimal number like 1.232");

document.write(
  "Number: " +
    decimal +
    "<br> Round off value: " +
    Math.round(decimal) +
    "<br> Floor value: " +
    Math.floor(decimal) +
    "<br> Ciel value: " +
    Math.ceil(decimal)
);

// TASK#2
var decimalNegative = prompt("Enter a decimal number like 1.232");

document.write(
  "<br>Number: " +
    decimalNegative +
    "<br> Round off value: " +
    Math.round(decimalNegative) +
    "<br> Floor value: " +
    Math.floor(decimalNegative) +
    "<br> Ciel value: " +
    Math.ceil(decimalNegative)
);

// TASK#3

var absoluteNumber = prompt("Enter a value");
alert(Math.abs(absoluteNumber));

// TASK#14

var dice = Math.random() * 7;

alert("Random Dice Value: " + Math.round(dice));

// TASK#15

var randomNumber = Math.random() * 100;

alert("Random number between 1 and 100 is: " + Math.round(randomNumber));

// TASK#16

var userWeight = parseInt(prompt("What's your wieght?"));
alert(userWeight);

// TASK#17

var secretNum = Math.random() * 10;
var askSecret = +prompt("Guess the secret number betwenn 1 to 10");
if (Math.round(secretNum) === askSecret) {
  alert("You Win");
} else {
  alert("try again");
}

// CHAPTER 31-35 DATE METHODS
// TASK#1
alert(new Date());
// TASK#2
var date1 = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var monthNow = months[date1.getMonth()];
alert(monthNow);

// TASK#3
var date2 = new Date();
var day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var dayNow = day[date2.getDay()];
alert(dayNow);

// TASK#3
var date3 = new Date();
var day1 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var dayNow = day[date2.getDay()];
if (dayNow === "Saturday" || dayNow === "Sunday") {
  alert("its funday");
} else {
  alert("Waiting for funday");
}

// TASK#4

var fullDays = new Date();
if (fullDays < fullDays.getDay()) {
  alert("first fifteen days of the month");
} else {
  alert("last days of the month");
}
// // TASK#5

var msec = Date.parse("June 23 2020");
var todayMins = new Date();
var firstMins = new Date("June 23, 2020");
var mstodayMins = todayMins.getTime();
var msfirstMins = firstMins.getTime();
var totalMins = todayMins - firstMins;
var finalMins = totalMins / 60;

document.write(
  "Current date: " +
    new Date() +
    "<br/>Elapsed miliseconds sice Jan 1 1970: " +
    msec +
    "<br/>Elapsed minutes sice Jan 1 1970: " +
    Math.floor(finalMins)
);

// TASK#6

var amOrpm = new Date().getHours();
alert(amOrpm);
if (amOrpm < 12) {
  alert("its AM");
} else {
  alert("its PM");
}

// TASK#7
var laterDate = new Date(new Date().getFullYear(), 11, 31);
alert(laterDate);

// TASK#8

var firstRamadan = new Date("April 5 2020");
var sinceRamadan = new Date();
var firstRamadan1 = firstRamadan.getTime();
var sinceRamadan1 = sinceRamadan.getTime();

var totalRamadan = sinceRamadan1 - firstRamadan1;
var finalResult = totalRamadan / (1000 * 60 * 60 * 24);

document.write(
  "<br/>" + Math.floor(finalResult) + " Days have passed since 1st ramadan 2020"
);

// CHAPTER 31-38
// TASK#1

function dateNow() {
  alert(new Date());
}
dateNow();

// TASK#2

function yourName(firstN, LastN) {
  alert(firstN + LastN);
}
yourName(prompt("Your FirstName?"), prompt("your lastName?"));

// TASK#3
function yourName(a, b) {
  alert(a + b);
}
yourName(+prompt("Number 1"), +prompt("Number 2"));

// TASK#4

function calculator(num1, num2, operator) {
  if (operator === "+") {
    alert(num1 + num2);
  } else if (operator === "*" || operator === "x") {
    alert(num1 * num2);
  } else if (operator === "-") {
    alert(num1 - num2);
  }
}
calculator(
  +prompt("Enter number 1"),
  +prompt("enter number 2"),
  prompt("Enter operator like: + - *")
);

// TASK#5

function sqArgument(arg) {
  alert(arg * arg);
}
sqArgument(prompt("Enter your number to square it"));

// TASK#6

function Counting(count1, count2) {
  for (var i = count1; i <= count2; i++) {
    document.write(i + "<br/>");
  }
}
Counting(prompt("num1"), prompt("num2"));
