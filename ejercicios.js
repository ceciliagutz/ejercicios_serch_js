//------------EJERCICIO 1--------------------
/* 
Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}
printOutString();
Complete the function to print out the string: This is a sentence.

*/
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  console.log(arr.join(" "));
}
printOutString(); // Imprime: "This is a sentence."


//------------EJERCICIO 2-------------------


/* 
Exercise #2 (sugerencia map() )
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/
function elDobleNumeros(numbers) {
  const elDoble = numbers.map(num => num * 2);
  console.log(elDoble);
}
elDobleNumeros([1, 2, 4, 5]);


