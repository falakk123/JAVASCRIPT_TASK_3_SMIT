// Practice exercise 3.1
// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console

// let shoppingList = ["Milk","Bread","Apples"]
// console.log("Shopping List Lenght ",shoppingList.length)

// let updatList = shoppingList.indexOf("Bread")
// console.log("Index Of List ",updatList)

// shoppingList[1] = "Bananas";
// console.log("Shopping List After Update ",shoppingList)


// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
//console.log(arrOfShapes)

// arrOfShapes.splice(2, 2, "square", "trapezoid");
//console.log(arrOfShapes)

// arrOfShapes.splice(2, 12, "square", "trapezoid");
//console.log(arrOfShapes);

// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6, 7, 8, 9, 10);
// arr7.pop();
// arr7.shift();
// arr7.splice(1, 2,);
// delete arr7[9];
// console.log(arr7);

// arr8 = [ 2, 6, 7, 8 ];
// let findValue = arr8.find(function(e) { return e === 6});
// // let findValue2 = arr8.find(e => e === 2);
// console.log(findValue);

// arr8 = [ 2, 6, 7, 8 ];
// let findIndex = arr8.indexOf(6);
// // let findIndex2 = arr8.indexOf(10);
// console.log(findIndex);

// arr8 = [ 2, 6, 7, 8 ];
// let findIndex3 = arr8.indexOf(2, 8);
// console.log(findIndex3)

// let animals = ["dog", "horse", "cat", "platypus", "dog"];
// let lastDog = animals.lastIndexOf("dog");
// console.log(lastDog)

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// names.reverse();
// console.log(names)

// let name1 = ["falak","arif","tahira"]
// name1.sort()
// console.log(name1)

// let ages = [18, 72, 33, 56, 40];
// ages.sort();
// console.log(ages)


// Practice exercise 3.2
// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.
// 11. Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", 
// "Pop", "Juice", "Pop"]

// const shoppingList = [];

// shoppingList.push("Milk", "Bread", "Apples");

// const breadIndex = shoppingList.indexOf("Bread");
// shoppingList[breadIndex] = "Bananas";
// shoppingList.push("Eggs");
// // shoppingList.pop()
// shoppingList.sort()

// //console.log(shoppingList[breadIndex])
// console.log(shoppingList)

// const milkIndex = shoppingList.indexOf("Milk");
// console.log("Index of Milk:", milkIndex);

// // 7. After Bananas, add Carrots and Lettuce.
// const bananasIndex = shoppingList.indexOf("Bananas");
// shoppingList.splice(2, 0, "Carrots", "Lettuce")
// console.log(shoppingList)

// const additionalList = ["Juice", "Pop"];

// shoppingList.push(...additionalList, ...additionalList);
// console.log(shoppingList)

// const lastPopIndex = shoppingList.lastIndexOf("Pop");
// console.log("Last index of Pop:", lastPopIndex);

// console.log(shoppingList);



//Multidimensional arrays

// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log(arrOfArrays)

// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arrOfArrays2)

// let value1 = arrOfArrays[0][1];
// console.log(value1)

//  let value2 = arrOfArrays[2][2];
//  console.log(value2)

// arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// console.log(arrOfArraysOfArrays)

// let middleValue = arrOfArraysOfArrays[1][1][1];


// Practice exercise 3.3
// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.

// let creatArr = [1,2,3]
// let newArr = [4,5,6]
// let comp = [creatArr,newArr]
// console.log(comp)
// let val = comp[0][1];
// console.log(val)

//Objectes

// let arr = [0, 1, 2];
// console.log(typeof arr);

// let dog = { dogName: "JavaScript",
//  weight: 2.4,
//  color: "brown",
//  breed: "chihuahua",
//  age: 3,
//  burglarBiter: true
//  };
//  console.log(dog)

//  let dogColor1 = dog["color"];
//  console.log(dogColor1)

//  let dogColor2 = dog.breed;
//  console.log(dogColor2)

// dog["color"] = "blue";
// dog.weight = 2.3;
// console.log(dog);

// dog["age"] = "three";
// let variable = "age";
// console.log(dog[variable]);

// variable = "breed";
// console.log(dog[variable]);

// dog[variable] = "dachshund";
// console.log(dog["breed"]);


// Practice exercise 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not
// limited to, make and model, and values for a typical car or your car. Feel free
// to use booleans, strings, or numbers.
// 2. Create a variable that can hold the string value color. This variable
// containing a string value color can now be used to reference the property
// name within myCar. Then, use the variable within the square bracket notation
// to assign a new value to the color property in myCar.
// 3. Use that same variable and assign a new property string value to it, such as
// forSale. Use the bracket notation once again to assign a new value to the
// forSale property to indicate whether the car is available for purchase.
// 4. Output make and model into the console.
// 5. Output the value of forSale into the console.

// let newCar = {carName: "OD",
//     weight: 22.4,
//     color: "black",
//     size: "large",
//     model: 3,
//     value : "not",
//     branded: true
// }
// console.log(newCar)

// let carColour = newCar["color"]
// console.log(carColour)

// newCar["color"]= "Red";
// console.log(newCar)

// let item = "color";
// console.log(newCar[item])

// let value1 = newCar.value;
// console.log(value1)
// newCar["value"] = "yes its for sale"
// console.log(newCar)

// let newVal = "value";
// console.log(newCar[newVal])

//Objects in Objects

// let company = {
//     companyName: "Healthy Candy",
//     activities: ["food manufacturing",
//         "improving kids' health", "manufacturing toys"],
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };

// console.log(company)

// let activity = company.activities[1];
// console.log(activity)


//Objects in arrays

// let addresses = [{
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
//  city: "Miami",
//  state: "Florida"
//  },
//  {
//  street: "1st West avenue",
//  number: "5",
//  zipcode: "75001",
//  city: "Addison",
//  state: "Texas"
//  }];
// console.log(addresses)

// let streetName = addresses[0].street;
// console.log(streetName)

//Objects in arrays in objects

// company = { companyName: "Healthy Candy",
//  activities: [ "food manufacturing",
// "improving kids' health",
// "manufacturing toys"],
//  address: [{
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
// city: "Miami",
//  state: "Florida"
//  },
//  {
//  street: "1st West avenue",
//  number: "5",
//  zipcode: "75001",
// city: "Addison",
// state: "Texas"
//  }],
//  yearOfEstablishment: 2021
//  };
// console.log(company)

//  let streetName = company.address[0].street;
//  console.log(streetName)

// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called
// friends.
// 2. Create three variables, each containing an object, that contain one of your
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console

// let friends = [{
//     friendName: "amna",
//     friendLastName: "amina",
//     id: 12345
// },
// {
//     friendName: "Rabia",
//     friendLastName: "Rabii",
//     id: 123
// }
// ,
// {
//     friendName: "A I R",
//     friendLastName: "H N R",
//     id: 321
// }
// ]
// console.log(friends)


// Chapter projects
// Manipulating an array
// Take the following array:
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
// {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console.

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

// theList.shift();
// theList.pop();

// // Add "FIRST" to the start of the array.
// theList.unshift("FIRST");
// console.log(theList)

// // Assign "hello World" to the fourth item value.
// theList[3] = "hello World";

// // Assign "MIDDLE" to the third index value.
// theList[2] = "MIDDLE";

// // Add "LAST" to the last position in the array.
// theList.push("LAST");

// // Output the transformed array to the console.
// console.log(theList);


// Company product catalog
// In this project, you will implement a data structure for a product catalog and create
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and
// quantity.
// 3. Add all three objects to the main array using an array method, and then log
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data
// structure.


// const productCatalog = [];
// const item1 = {
//   name: "Laptop",
//   model: "XPS 15",
//   cost: 1200,
//   quantity: 10
// };

// const item2 = {
//   name: "Smartphone",
//   model: "iPhone 13",
//   cost: 999,
//   quantity: 15
// };

// const item3 = {
//   name: "Tablet",
//   model: "iPad Pro",
//   cost: 799,
//   quantity: 8
// };
// productCatalog.push(item1, item2, item3);
// console.log("Product Catalog: " ,productCatalog);
// console.log("Quantity of the third item: " + productCatalog[2].quantity);

// . How do you replace the second element in an array myArr = 
// [1,3,5,6,8,9,15] with the value 4?

// let myArr = [1,3,5,6,8,9,15]
// console.log(myArr)
// myArr[1] = 4;
// console.log(myArr)

// const myArr3 = [3,6,8,9,3,55,553,434];
// myArr3.sort();
// myArr3.length = 0;
// console.log(myArr3[0]); //undefined


// Practice exercise 4.1

// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the console, 
// using the following syntax:
// if(myVariable){
// //action
// } 
// 4. Add another if statement with an ! in front of the variable to check whether 
// the condition is not true, and create a message that will be printed to the 
// console in that instance. You should have two if statements, one with an 
// ! and the other without. You could also use an if and an else statement 
// instead—experiment!
// 5. Change the variable to the opposite to see how the result changes


// const myVariable = true;

// console.log("The value of myVariable is: " + myVariable);

// if (myVariable) {
//   console.log("myVariable is true!");
// }

// if (!myVariable) {
//   console.log("myVariable is not true!");
// } else {
//   console.log("myVariable is true using an else statement!");
// }

// myVariable = false; 

// console.log("The value of myVariable is: " + myVariable);

// if (myVariable) {
//   console.log("myVariable is true!");
// }

// if (!myVariable) {
//   console.log("myVariable is not true!");
// } else {
//   console.log("myVariable is true using an else statement!");
// }

// let age = 10;
// let cost = 0;
// let message;
// if (age < 3) {
//   cost = 0;
//   message = "Access is free under three.";
// }
// else if (age >= 3 && age < 12) {
//   cost = 5;
//   message = "With the child discount, the fee is 5 dollars";
// }
// else if (age >= 12 && age < 65) {
//   cost = 10;
//   message = "A regular ticket costs 10 dollars.";
// }
// else {
//   cost = 7;
//   message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost)

//Exercise 3.4

// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console message for 
// the user
// 4. If the input age is equal to or greater than 21, set the message variable to 
// confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to 
// confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if 
// none are true
// 7. Output the response message variable to the console

// const userAgeInput = prompt("Please enter your age:");
// const userAge = parseInt(userAgeInput);
// let message;
// if (userAge >= 21) {
//   message = "You are allowed to enter the venue and purchase alcohol.";
// }
// else if (userAge >= 19) {
//   message = "You are allowed to enter the venue, but alcohol purchase is not permitted.";
// }
// else {
//   message = "You are denied entry to the venue.";
// }
// console.log(message);


// 1. Create a Boolean value for an ID variable
// 2. Using a ternary operator, create a message variable that will check whether 
// their ID is valid and either allow a person into a venue or not
// 3. Output the response to the console
// 1. Create a Boolean value for an ID variable

// const isIDValid = false; 

// const message = isIDValid ? "You are allowed to enter the venue." : "You are not allowed to enter the venue.";

// console.log(message);


// switch(activity) {
//   case "Get up":
//   console.log("It is 6:30AM");
//   break;
//   case "Breakfast":
//   console.log("It is 7:00AM");
//   break;
//   case "Drive to work":
//   console.log("It is 8:00AM");
//   break;
//   case "Lunch":
//   console.log("It is 12:00PM");
//   break; 
//   case "Drive home":
//   console.log("It is 5:00PM");
//   break; 
//   case "Dinner":
//   console.log("It is 6:30PM");
//   break;
//   default:
//   console.log("I cannot determine the current time.");
//   break;
//  }

// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value 
// is assigned by generating a random number 0-5, for 6 possible results. You 
// can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can 
// repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different 
// value from the random number generator. 
// 4. Create a variable to hold the end response, which should be a sentence 
// printed for the user. You can assign different string values for each case, 
// assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case 
// response, to the console after the user enters their question.


// const randomNumber = Math.floor(Math.random() * 6);

// const userQuestion = prompt("Ask the Magic 8-Ball a yes or no question:");

// let response;
// switch (randomNumber) {
//   case 0:
//     response = "It is certain.";
//     break;
//   case 1:
//     response = "Without a doubt.";
//     break;
//   case 2:
//     response = "Reply hazy, try again.";
//     break;
//   case 3:
//     response = "Don't count on it.";
//     break;
//   case 4:
//     response = "My sources say no.";
//     break;
//   case 5:
//     response = "Outlook not so good.";
//     break;
// }

// const finalResponse = `You asked: "${userQuestion}"\nThe Magic 8-Ball says: "${response}"`;

// console.log(finalResponse);

// Practice exercise 4.5 
// 1. Create a variable called prize and use a prompt to ask the user to set the 
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My 
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back 
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable 
// strings and the output message string

// const prizeInput = prompt("select a number between 0 and 10");

// const convert = parseInt(prizeInput);

// const outputMessage = "My Selection: ";

// let prize;
// switch (convert) {
//   case 0:
//     prize = "A trip to a tropical paradise!";
//     break;
//   case 1:
//     prize = "A brand new car!";
//     break;
//   case 2:
//   case 3:
//     prize = "A weekend getaway package!";
//     break;
//   case 4:
//   case 5:
//   case 6:
//     prize = "A gift card to your favorite restaurant!";
//     break;
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     prize = "A fluffy stuffed animal!";
//     break;
//   default:
//     prize = "Sorry, no prize for that selection. Try again!";
// }
// console.log(outputMessage + prize);


// Chapter projects
// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less 
// than a dynamic number value in your code. Output the result to the user

// const dynamicNumber = 42;

// const userNumberInput = prompt("Enter a number:");

// const userNumber = parseFloat(userNumberInput);

// if (isNaN(userNumber)) {
//   console.log("Invalid input. Please enter a valid number.");
// } else if (userNumber > dynamicNumber) {
//   console.log(`Your number (${userNumber}) is greater than the dynamic number (${dynamicNumber}).`);
// } else if (userNumber === dynamicNumber) {
//   console.log(`Your number (${userNumber}) is equal to the dynamic number (${dynamicNumber}).`);
// } else {
//   console.log(`Your number (${userNumber}) is less than the dynamic number (${dynamicNumber}).`);
// }

// Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation 
// that the user is a friend if the name selected is known in the case statements. You 
// can add a default response that you don't know the person if it's an unknown name. 
// Output the result into the console

// const userName = prompt("Enter a name to check if they are your friend:");
// switch (userName) {
//   case "Amna":
//     console.log(`${userName} is your friend!`);
//     break;
//   case "Iqra":
//     console.log(`${userName} is your friend!`);
//     break;
//   case "Asma":
//     console.log(`${userName} is your friend!`);
//     break;
//   default:
//     console.log(`Sorry, you don't know ${userName}.`);
// }


// Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a random 
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version 
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and 
// Scissors will beat out Paper. You can use JavaScript to create your own version of 
// this game, applying the logic with an if statement. Since this project is a little more 
// difficult, here are some suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then 
// do the same for the computer's selection. The number represents the index 
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the 
// random results for the player and then also the result for the computer of the 
// matching item from the array. 
// 4. Create a condition to handle the player and computer selections. If both are 
// the same, this results in a tie. 
// 5. Use conditions to apply the game logic and return the correct results. 
// There are several ways to do this with the condition statements, but you 
// could check which player's index value is bigger and assign the victory 
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the 
// computer selection and the result of the game.

// 1. Create an array that contains the variables Rock, Paper, and Scissors.
const choices = ["Rock", "Paper", "Scissors"];

// 2. Generate random selections for the player and the computer.
const playerIndex = Math.floor(Math.random() * 3); // 0 for Rock, 1 for Paper, 2 for Scissors
const computerIndex = Math.floor(Math.random() * 3);

// 3. Create a variable to hold a response message to the user.
const playerChoice = choices[playerIndex];
const computerChoice = choices[computerIndex];

// 4. Check for a tie.
let resultMessage;
if (playerIndex === computerIndex) {
  resultMessage = "It's a tie!";
} else {
  // 5. Apply game logic to determine the winner.
  if (
    (playerIndex === 0 && computerIndex === 2) || // Rock beats Scissors
    (playerIndex === 1 && computerIndex === 0) || // Paper beats Rock
    (playerIndex === 2 && computerIndex === 1)    // Scissors beats Paper
  ) {
    resultMessage = "You win!";
  } else {
    resultMessage = "Computer wins!";
  }
}

// 6. Display the player and computer selections and the result of the game.
console.log(`Player chose: ${playerChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(resultMessage);
