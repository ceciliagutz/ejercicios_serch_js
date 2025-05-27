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