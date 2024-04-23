//Creando un archivo externo de js
/*De este archivo se espera aprender los conceptos básicos de javaScript tales como aprender a declarar variables, conectar el archivo con el html para poder ejecutarlo en el navegador y observar los procedimientos que podemos realizar*/

//Parte 2
const miNumero = 10
console.log(miNumero);

const miBooleano = true
console.log(typeof(miBooleano));

const miCadena = "Hola desde Riwi"
console.log(miCadena.length);

const miArray = ["Daniela", 128, ["mango","manzana","banano"]]
console.log(miArray);

const miObjeto = {
    nombre: "Daniela",
    apellido: "Mendoza",
    edad: 27
}
console.log(miObjeto);

//Parte 3

const nombreUsuario = prompt("Ingresa tu nombre aquí")

alert("Hola, tu nombre es " + nombreUsuario)

const validarGusto = confirm("¿Te gusta javaScript?")

if (validarGusto) {
    alert("¡Genial!, a mi también me gusta")
} else {
    alert("¡Qué lástima!")
}


//Parte 4

console.warn("Esto es solo una práctica")
console.error("Esto es un error")

const personas = [
    { nombre: "Juan", edad: 30, profesion: "Ingeniero" },
    { nombre: "Ana", edad: 25, profesion: "Diseñadora" },
    { nombre: "Pedro", edad: 35, profesion: "Arquitecto" }
];

console.table(personas);





