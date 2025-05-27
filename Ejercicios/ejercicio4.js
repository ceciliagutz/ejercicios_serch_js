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