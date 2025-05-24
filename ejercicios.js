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
elDobleNumeros([1, 2, 4, 5]);// el resultado sera 2,4,8,20

//---------EJERCICIO 3-----------------
/* 
Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/
function sumAndProduct(numeros) {
    const suma = numeros.reduce((acc, num) => acc + num, 0); //acc es un acumulador
    const multiplicacion = numeros.reduce((acc, num) => acc * num, 1);
    console.log("Suma:", suma);// el producto sera 10
    console.log("Multiplicación-Producto:", multiplicacion); // el producto sera 24
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
console.log("Common course(s):", commonCourses); // Imprimira "Programming" porque es el curso que se repite


//----------EJERCICIO 5 --------------
/* 
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.

*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Imprimira a toda la gente
console.log(people);

// 2. Remove "Dani"
people.splice(people.indexOf("Dani"), 1);

// 3. Remove "Juan"
people.splice(people.indexOf("Juan"), 1);

// 4. Mueve a "Luis" al frente
let luisIndex = people.indexOf("Luis");
let luis = people.splice(luisIndex, 1)[0];
people.unshift(luis);

// 5. Agrego mi Nombre
people.push("Cecilia"); // Reemplaza "TuNombre" con tu nombre real

// 6. Loop and break after "Maria"
for (let person of people) {
    console.log(person);
    if (person === "Maria") break;
}

// 7. Index of "Maria"
console.log("Index of Maria:", people.indexOf("Maria"));

// Final array
console.log("Final array:", people);

//----------EJERCICIO 6-------------
/* 
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/
function burbuja(array) {
  for (let i = 0; i < array.length; i++) { // Recorremos el array completo
    for (let j = 0; j < array.length - 1; j++) {// En cada vuelta, comparamos cada par de elementos
      if (array[j] > array[j + 1]) {// Si el número actual es mayor que el siguiente, los cambiamos de lugar
        let temp = array[j];// Guardamos temporalmente uno de los valores
        array[j] = array[j + 1]; // Intercambiamos
        array[j + 1] = temp;
      }
    }
  }
  return array; // Cuando ya no hay cambios, el array está ordenado
}

let numeros = [3, 6, 12, 5, 100, 1]; 
let resultado = burbuja(numeros);
console.log(resultado);//1,3,5,6,12,100
