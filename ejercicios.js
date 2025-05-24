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

//---------EJERCICIO 3-----------------
/* 
Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/
function sumAndProduct(numeros) {
  const suma = numeros.reduce((acc, num) => acc + num, 0); //acc es un acumulador
  const multiplicacion = numeros.reduce((acc, num) => acc * num, 1);
  console.log("Suma:", suma);
  console.log("Multiplicación-Producto:", multiplicacion);
}
sumAndProduct([1, 2, 3, 4]);

// --------------EJERCICIO 4------------
/* 
Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourses = student1Courses.filter(course => student2Courses.includes(course));
console.log("Common course(s):", commonCourses);

