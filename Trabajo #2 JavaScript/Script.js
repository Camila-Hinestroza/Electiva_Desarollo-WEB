//Crear mínimo 4 arreglos distintos.

let numeros = [1, 2, 3, 4, 5];
let nombres = ["Ana", "Juan", "Luis", "Camila", "Maria"];
let precios = [10.5, 5.0, 12.75, 3.99, 8.99];
let edades = [25, 18, 30, 22, 35];

//Aplicar a cada arreglo los cuatro metodos

//.reduce()
let sumaNumeros = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(sumaNumeros);  

let nombresUnidos = nombres.reduce((acumulador, valorActual) => acumulador + " " + valorActual, "");
console.log(nombresUnidos);  

let totalPrecios = precios.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(totalPrecios);  

let sumaEdades = edades.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
let edadPromedio = sumaEdades / edades.length;
console.log(edadPromedio);  


//.filter()
let numerosFiltrados = numeros.filter(num => num > 3);
console.log(numerosFiltrados);  

let preciosFiltrados = precios.filter(precio => precio > 5);
console.log(preciosFiltrados);  

let edadesFiltradas = edades.filter(edad => edad > 20);
console.log(edadesFiltradas);  

let nombresFiltrados = nombres.filter(nombre => nombre.length > 3);
console.log(nombresFiltrados);  


//.map()
let numerosMultiplicados = numeros.map(num => num * 2);
console.log(numerosMultiplicados);  

let preciosIVA = precios.map(precio => precio * 1.19);
console.log(preciosIVA);  

let edadesIncrementadas = edades.map(edad => edad + 1);
console.log(edadesIncrementadas);  

let nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresMayusculas);  


//.forEach()
numeros.forEach(num => console.log(num));  

nombres.forEach(nombre => console.log(`Hola, ${nombre}`));  

edades.forEach(edad => console.log(`Tienes ${edad} años`));  

precios.forEach(precio => console.log(`Precio: $${precio.toFixed(2)}`));  


// 5 funciones tipo Flecha. 

let saludar = () => "Hola, ¿cómo estás?";
console.log(saludar()); 

let cuadrado = num => num * num;
console.log(cuadrado(4)); 

let sumar = (a, b) => a + b;
console.log(sumar(3, 5));  

let calcularDescuento = (precio, descuento) => (precio - (precio * descuento));
console.log(calcularDescuento(100, 0.1));  

let unirNombres = (nombre1, nombre2, nombre3) => `Nombre 1: ${nombre1}, nombre 2: ${nombre2} y nombre 3: ${nombre3}`;
console.log(unirNombres("Ana", "Luis", "Maria"));  

