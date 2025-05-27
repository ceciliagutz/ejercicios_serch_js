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
