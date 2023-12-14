//Ejercicios destructuring
//Dado el siguiente objeto:

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];


//Extrae la empleada Ana completa.

//const Luis = empleados[0];
//const Ana = empleados[1];
//const Andrea = empleados[2];

const [Luis, Ana, Andrea] = empleados;

console.log("Ana: ", Ana);
//Object { name: "Ana", email: "Ana@gmail.com" }

//Extrae el email del empleado Luis --> Luis@gmail.com
const { name, email } = Luis;
console.log("Luis -->", email);

//Usa destructuración para intercambiar los valores de a y b.
// Inicialmente
let a = 5;
let b = 3;

//metodo
({ a, b } = { a: 3, b: 5 });

// Al final
console.log("a = ", a);// a = 3
console.log("b = ", b);// b = 5
//Dado el siguiente objeto:

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};


//Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana.

//const [ayer, hoy, maniana] = HIGH_TEMPERATURES
//TypeError: 'x' is not iterable

const { today: maximaHoy } = HIGH_TEMPERATURES;
const { tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log("maximaHoy: ", maximaHoy);
console.log("maximaManana: ", maximaManana);

