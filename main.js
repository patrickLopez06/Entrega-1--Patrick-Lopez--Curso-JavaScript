// Objeto principal que representa la tienda de joyería.
// Guarda el nombre del negocio y el catálogo de productos agrupados por categoría. 
const JoyeriaPalero = {
  nombre: "Joyería Palero",
  productos: []
};

// Array de collares disponibles en la tienda
// Collares
const collares = [
  "Collar de plata 925",
  "Collar de acero inoxidable",
  "Collar con dije corazón",
  "Collar minimalista dorado",
  "Collar con piedra natural",
  "Collar tipo cadena gruesa"
];

// Array de anillos disponibles
// Anillos
const anillos = [
  "Anillo de plata liso",
  "Anillo ajustable dorado",
  "Anillo con piedra blanca",
  "Anillo estilo vintage",
  "Anillo minimalista"
];

// Array de pulseras disponibles
// Pulseras
const pulseras = [
  "Pulsera de acero",
  "Pulsera con dijes",
  "Pulsera ajustable",
  "Pulsera minimalista",
  "Pulsera con piedras"
];

// Array de aros disponibles
// Aros
const aros = [
  "Aros pequeños plateados",
  "Aros argolla",
  "Aros colgantes",
  "Aros minimalistas",
  "Aros con piedras"
];

// Se agrupan todos los arrays de productos dentro del objeto principal
// para mantener el catálogo organizado.
JoyeriaPalero.productos = {
  collares,
  anillos,
  pulseras,
  aros
};

// Mensaje de bienvenida mostrado en la consola del navegador
console.log(`Te doy la bienvenida a ${JoyeriaPalero.nombre}!`);
// Alerta inicial para avisar que el usuario entra al simulador
alert("Estás ingresando al simulador de Joyería Palero");

// Función que solicita al usuario una opción mediante prompt
// y devuelve la opción elegida.
function pedirOpcion() {
  let opcion = prompt(
    "¿Qué querés ver?\n" +
    "1 - Collares\n" +
    "2 - Anillos\n" +
    "3 - Pulseras\n" +
    "4 - Aros"
  );
  return opcion;
}

// Función que procesa la opción ingresada por el usuario
// y muestra la categoría correspondiente según la selección.
function procesarOpcion(opcion) {
  if (opcion === "1") {
    mostrarProductos(collares, "Collares disponibles:");
  } else if (opcion === "2") {
    mostrarProductos(anillos, "Anillos disponibles:");
  } else if (opcion === "3") {
    mostrarProductos(pulseras, "Pulseras disponibles:");
  } else if (opcion === "4") {
    mostrarProductos(aros, "Aros disponibles:");
  } else {
    alert("Opción inválida. Recargá la página e intentá de nuevo.");
  }
}

// Función que muestra un título y recorre un array de productos
// imprimiendo cada uno en la consola.
function mostrarProductos(lista, titulo) {
  console.log(`${titulo}:`);
  for (let i = 0; i < lista.length; i++) {
    console.log(`${i + 1}. ${lista[i]}`);
  }
}

// Se pide la opción al usuario y luego se procesa la selección
let opcionElegida = pedirOpcion();
procesarOpcion(opcionElegida);