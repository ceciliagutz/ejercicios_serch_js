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