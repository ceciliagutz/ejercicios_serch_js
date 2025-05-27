
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
