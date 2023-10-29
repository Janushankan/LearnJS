console.log("Hello World");
console.log(typeof ("HIIIII"));
console.log(typeof (9));
console.log(typeof (true));


//Strings
const myVariable = "Mathematics";

console.log(myVariable);

//length property
console.log(myVariable.length);
console.log("My name is Janushankan".length);

//String methods
console.log(myVariable.charAt(6));
console.log(myVariable.indexOf("at"));
console.log(myVariable.lastIndexOf("at"));  //nothing -1
console.log(myVariable.slice(5, 8));    //(5) matics
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("mat"));    //boolean output
console.log(myVariable.split("e"));
console.log("Bloody sweet".split("e"));
console.log("Bloody sweet".split(" "));
console.log("Bloody sweet".split(""));

//Numbers
const myNum = "42";
const myNumber = 42;
const myFloat = 42.308889;

console.log(myNumber);
console.log(myFloat);
console.log(myNumber === myFloat);
console.log(myNum + 3);
console.log(Number(myNum) + 3);
console.log(Number("janu") + 3);    //NaN Not a Number
console.log(Number(true));  //boolean   true -> 1 false -> 0

//Number methods
console.log(Number.isInteger(24.6));
console.log(Number.parseFloat("423.098aaa"));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myFloat).toFixed(2)); //output string
console.log(Number.parseInt(myFloat));
console.log(myFloat.toString());
console.log(typeof myFloat.toString());
console.log(parseFloat(myFloat).toFixed(3).toString()); //chaining

Number.isNaN()
isNaN()
console.log(Number.isNaN("janu"));  //check data type
console.log(isNaN("janu"));

//MATH method and properties
console.log(Math.PI);   //3.141592653589793
console.log(Math.trunc(Math.PI));   //3
console.log(Math.round(Math.PI));   //3
console.log(Math.round(4.4));   //4
console.log(Math.round(4.5));   //5
console.log(Math.ceil(4.1));    //4.(...) ceiling->up value 5
console.log(Math.floor(4.8));   //4.(...)  floor->same value 4
console.log(Math.pow(3, 4));    //3*3*3*3 = 81
console.log(Math.min(10, 3, 0, 5, 6, 32));   //0
console.log(Math.max(10, 3, 0, 5, 6, 32));   //32
console.log(Math.random());
//1 to 10
console.log(Math.floor(Math.random() * 10) + 1); //*10 -> give 0.(...)  something value     +1 -> given the no 10
//1 to 100
console.log(Math.floor(Math.random() * 100) + 1);

//activity - letters random
const myName = "Janushankan";
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

//IF Statements
let customerIsBanned = false;
let viewer = "JavaScript Full Course";
let reply;
let finance = true;
if (customerIsBanned) {
    reply = 'Sorry';
} else if (viewer && finance) {
    reply = `Enjoy ${viewer} and finance content`;
}
else if (viewer) {
    reply = `Enjoy ${viewer}`;
} else {
    reply = "Sorry, Still working";
}
console.log(reply);


let testScore = 58;
let grade;
let collegeStudent = true;

if (testScore >= 90) {
    grade = 'A';
} else if (testScore >= 80) {
    grade = 'B';
} else if (testScore >= 70) {
    grade = 'C';
} else if (testScore >= 60) {
    grade = 'D';
} else {
    if (collegeStudent) {
        grade = 'RA';
    } else {
        grade = 'F';
    }
}
console.log(grade);

//Switch Statements
let player = "rock";
let computer = "scissors";

switch (player) {
    case "computer":
        console.log("Tie!");
        break;
    case "rock":
        if (computer === "scissors") {
            console.log("Player Wins.");
        } else {
            console.log("Computer Wins.");
        }
        break;
    default:
        console.log("No Tie!");
}

//Ternary Operators
let subscriber;
let response = subscriber ? "Welcome" : "Kindly Subscribe";
console.log(response);

let testScore1 = 50;
let grade1 = testScore1 > 89 ? "A" : testScore1 > 79 ? "B" : testScore1 > 69 ? "C" : "D";
console.log(grade1);

let player1 = "rock";
let computer1 = "scissors";
let result = player1 === computer1 ? "Tie" : player1 === "rock" && computer1 === "paper" ? "Computer Wins!" : player1 === "paper" && computer1 === "scissors" ? "Computer Wins!" : player1 === "scissors" && computer1 === "rock" ? "Computer Wins!" : "Player Wins!";
console.log(result);

//User Input

//01 OK
// let myBoolean =alert("Okay");

//02 confirm -> OK Cancel
// let myBoolean =confirm("Ok === True\nCancel=== false");
// console.log(myBoolean);

//03 prompt
// let my = prompt("Enter your name:");
// console.log(my ?? "You didn't Enter your name.");
// console.log(typeof my); //didn't enter anything and click ok -> that is string

// let my1 = prompt("Enter your name:");
// if (my1) {
//     console.log(my1 ?? "You didn't Enter your name.");
// } else {
//     console.log("You didn't Enter your name.");
// }
// console.log(my1.trim().length);

//Loops

//while loop
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

//do while loop
// let j = 1;
// do {
//     console.log(j);
//     j++;
// } while (j <= 5);

//for loop
// for (k = 0; k <= 5; k++) {
//     console.log(k);
// }

// let name = "Hi";
// for (let l=0; l<= name.length; l++) {
//     for(let n=0; n<= name.length; n++) {
//         console.log(l, n);
//     }
// }

//continue
// let text = '';
// for (let o = 0; o < 10; o++) {
//     if (o === 3) {
//         continue;
//     }
//     text = text + o;
// }
// console.log(text);

//break
// let text1 = '';
// for (let p = 0; p < 10; p++) {
//     if (p === 3) {
//         break;
//     }
//     text1 = text1 + p;
// }
// console.log(text1);

//Functions
// email ="janushankan1006@gmail.com";
// console.log(email.slice(0, email.indexOf("@")));


// function getUserNameFromEmail(email1) {
//     return email1.slice(0, email1.indexOf("@"));
// }
// console.log(getUserNameFromEmail("janushankan1006@gmail.com"));

// function toProperCase(name2){
//     return name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase();
// }
// console.log(toProperCase("welCOME"));

//               or

// const toProperCase = function (name3) {
//     return name3.charAt(0).toUpperCase() + name3.slice(1).toLowerCase();
// }
// console.log(toProperCase("welCOME"));

//               or

const toProperCase = (name4) => {
    return name4.charAt(0).toUpperCase() + name4.slice(1).toLowerCase();
}
console.log(toProperCase("welCOME"));

//Scope var, let, const

//global scope
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

//local scope   //block scope
function myFunc() {
    var z = 5;
    //local scope   //function scope
    if (true) {
        var y = 4;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}
myFunc();
console.log(y);

//Arrays
const myArray = [];
//adding element

myArray[0] = "Janus";
myArray[1] = "CST";
myArray[2] = 423;
myArray[3] = true;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[1]);
console.log(myArray[myArray.length - 1]);

myArray.push("code");   //add last
console.log(myArray);
myArray.pop();  //remove last
console.log(myArray);
myArray.unshift("code");   //add first
console.log(myArray);
myArray.shift();   //add last
console.log(myArray);

const lastItem = myArray.push("Janu");
console.log(lastItem);  //array length

const firstItem = myArray.unshift("Janu");
console.log(firstItem);  //array length

const lastItem1 = myArray.pop();
console.log(lastItem1);  //last removed array

const firstItem1 = myArray.shift();
console.log(firstItem1);  //first removed array

// console.log(myArray);
// delete myArray[2];
// console.log(myArray);

//delete specific array element
console.log(myArray);
myArray.splice(2, 1);   //(start number, delete count)
console.log(myArray);
//replace specific array element
myArray.splice(0, 1, "Janushankan");   //(start number, delete count, changed array element)
console.log(myArray);
//add array element in specific position
myArray.splice(2, 0, "Janus");   //(start number, 0, changed array element)
console.log(myArray);

const newArray = myArray.slice(1, 3);   //copy of the array     (start, give the next position)
console.log(newArray);

const newArray1 = myArray.reverse();   //reverse array
console.log(newArray1);

const newArray2 = myArray.join();   //join array -> become one string
console.log(newArray2);

const newArray3 = newArray2.split(',');   //one string become as a split string array elements
console.log(newArray3);

console.log(myArray);
myArray1 = ["false", 56, 445];
console.log(myArray1);
const newArray4 = myArray.concat(myArray1); //concat the arrays
console.log(newArray4);

//               OR

const newArray5 = [...myArray, ...myArray1]; //concat the arrays using spread operator
console.log(newArray5);


const earnMoneyA = ["FrontEnd", "Backend", "Fullstack"];
const earnMoneyB = ["AI", "Blockchain", "DataAnalytics"];

const growMoneyA = ["Stocks", "RealEstate", "FixedIncome"];
const growMoneyB = ["Options", "Futures"];

const giveMoney = ["QualityEducation"];

console.log(earnMoneyA[1], growMoneyB[1]);

const earnMoney = [earnMoneyA, earnMoneyB];
const growMoney = [growMoneyA, growMoneyB];
console.log(earnMoney[0][1], growMoney[1][1]);

const money = [earnMoney, growMoney, giveMoney];
console.log(money[0][0][1], money[1][1][1], money[2][0]);

















