// Variables con let
let nombre = "Camila";
let apellido = "Hinestroza";
let edad = 19;
let ciudad = "Medellín";
let pais = "Colombia";
let esEstudiante = true;
let carrera = "Tecnologia en Desarrollo de Software"
let semestreActual = 4;
let cuantosDiasEstudia = 5;
let mesActual = 10;

// Variables const
const duracionSemestresTecnologia = 6;
const diasSemana = 7;
const mesNacimiento = 6;
const mesesAño = 12;
const lenguaMaterna = "Español"

// Operaciones con las variables
let nombreCompleto = nombre + " " + apellido; 
let lugarResidencia = ciudad + ", " + pais;
let semestresFatalantes = duracionSemestresTecnologia - semestreActual;
let diasLibres = diasSemana - cuantosDiasEstudia;

// Operador ternario
let mensajeEdad = edad >= 18 ? ("Es mayor de edad, tiene: " + edad) : "Es menor de edad"; 
let estadoEstudiante = esEstudiante ? ("Es un estudiante de: " + carrera) : "No es un estudiante";
let mesesFaltantes = mesActual <= mesNacimiento ? mesNacimiento - mesActual : (mesesAño - mesActual) + mesNacimiento;


// Consola 
console.log("Informacion")
console.log("Nombre completo:", nombreCompleto);
console.log(mensajeEdad, "años.")
console.log(`Faltan ${mesesFaltantes} meses para su cumpleaños.`);
console.log("Reside en:", lugarResidencia)
console.log(estadoEstudiante)
console.log(`No estudia ${diasLibres} dias a la semana.`);
console.log("Su idioma principal es el:", lenguaMaterna)


