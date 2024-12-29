// 1. Alerts:
// Task 1:
alert("Welcome to JavaScript!😭");
alert("I am going to ask you irritating question but you should be patient😊.");

// Task 2:
var userName = prompt("Please enter your name:🙏");
    alert("Hello,🙂 " + userName + "!"); 



// 2. Variables for Strings:
// Task 1:
var firstName =prompt("What is your first name? 😐real one! ");
var lastName =prompt("What is your last name? ") ;
alert("your full name is : 💨" + firstName + " " + lastName);

// Task 2:
var hobby =prompt("What is your favorite hobby?😒");
alert("Your favorite hobby is " + hobby + ".");


// 3. Variables for Numbers:
// Task 1:
var yearOfBirth =prompt("What is your year of birth?😎");
// var currentYear =prompt(new Date().getFullYear()) ; // Dynamically get the current year
var currentyear =prompt("current year😁")
var age = currentyear - yearOfBirth;
alert("Your age is :⚡ " + age);

// Task 2:
var length =prompt("What is lenght of rectangle?🟥");
var width =prompt("What is width of rectngle?◼");
var area = length * width;
alert("Area of the rectangle: " + area);


// 4. Variable Names Legal and Illegal:
// Task 1:
// Legal: myVariable, _myVar, myVar123
// Illegal: 123myVar, my-var, my var

// Task 2:
 var myAge =prompt ("what is your age?😎 I know the question is not for girlles.");
var friendAge =prompt("What is your friend age? 🙄 no lie.") ;
alert("My age: " + myAge);
myAge = friendAge; // Assign friend's age to myAge
alert("Your friend age is : " + myAge);


// 5. Math Expressions: Familiar Operators:
// Task 1:
var num1 = parseFloat(prompt("Enter the first number: FOR what i dont know 👍" )); 
var num2 = parseFloat(prompt("Enter the second number:"));
if (!isNaN(num1) && !isNaN(num2)) { 
    var sum = num1 + num2;
    alert("Sum: " + sum);
} 

// Task 2:
var product = 6 * 8;
alert("6 multiplied by 8 is: " + product);

// Task 3:
var remainder = 17 % 5;
alert("Remainder of 17 divided by 5: " + remainder);


// Additional Challenges:
// Challenge 1:
var birthYear = parseInt(prompt("Enter your birth year:"));
if (!isNaN(birthYear)) {
    var currentYearChallenge1 = new Date().getFullYear();
    var ageChallenge1 = currentYearChallenge1 - birthYear;
    alert("Your age is: " + ageChallenge1);
} else {
    alert("Invalid birth year.");
}


// Challenge 2:
let num1Challenge2 = parseFloat(prompt("Enter the first number:"));
let num2Challenge2 = parseFloat(prompt("Enter the second number:"));

if (!isNaN(num1Challenge2) && !isNaN(num2Challenge2)) {
    var sumChallenge2 = num1Challenge2 + num2Challenge2;
    var difference = num1Challenge2 - num2Challenge2;
    var productChallenge2 = num1Challenge2 * num2Challenge2;
    var quotient = num1Challenge2 / num2Challenge2;
    var remainderChallenge2 = num1Challenge2 % num2Challenge2;

    alert("Sum: " + sumChallenge2);
    alert("Difference: " + difference);
    alert("Product: " + productChallenge2);
    alert("Quotient: " + quotient);
    alert("Remainder: " + remainderChallenge2);
} else {
    alert("Invalid input. Please enter numbers.");
}
alert(" Miss if i did some mistake please forgive me for that because me and javascript are in toxic friendship. 😭🤦‍♀️😁 But it's fun also❤");