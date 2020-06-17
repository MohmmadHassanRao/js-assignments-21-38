// CHAPTER 21-25
// TASK#1

// var firstName = prompt("Hello What's your first name?");
// var lastName = prompt("Hello What's your last name?");
// alert("Welcome " + firstName + " " + lastName);

// // TASK#2

// var mobile = prompt("Your favourite phone");
// document.write(
//   "Your favourite phone is: " +
//     mobile +
//     "<br/>" +
//     "Length of string: " +
//     mobile.length
// );

// TASK#3

// var country = "Pakistan";
// alert(country + "\n index of 'n' is:  " + country.indexOf("n"));

// // TASK#4
// var hello = "Hello World";
// alert(hello + "\n last index of 'l' is:  " + hello.lastIndexOf("l"));

// // TASK#5

// var country = "Pakistan";
// alert(country + "\n character at index 3 is:  " + country.charAt(3));

// // TASK#6
// var firstName = prompt("Hello What's your first name?");
// var lastName = prompt("Hello What's your last name?");
// var fullName = "Welcome " + firstName.concat(lastName);
// alert(fullName);

// // TASK#7
// var city = "Hyderabad";

// for (var i = 0; i < city.length; i++) {
//   if (city.slice(i, i + 5) === "Hyder") {
//     city = city.slice(0, i) + "Islam" + city.slice(i + 5);
//     alert(city);
//   }
// }

// // TASK#8

// var str = "472";
// var num = parseInt(str);
// console.log(str);
// console.log(num);

// // TASK#9

// var food = prompt("what do you want?");
// alert(food.toUpperCase());

// // TASK#10
// var enter = prompt("Enter some thing");
// alert(enter.slice(0, 1).toUpperCase() + enter.slice(1).toLowerCase());

// // TASK#11

// var someNo = 33.56;
// alert(someNo.toString().replace(".", ""));

// TASK#12

// var userName = prompt("Enter your username");
// for (var i = 0; i < userName.length; i++) {
//   if (
//     userName[i] === String.fromCharCode(33) ||
//     userName[i] === String.fromCharCode(44) ||
//     userName[i] === String.fromCharCode(46) ||
//     userName[i] === String.fromCharCode(64)
//   ) {
//     alert("Invalid username");
//     break;
//   } else if (i === userName.length - 1) {
//     alert("Welcome back!");
//     break;
//   }
// }

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
