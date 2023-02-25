let anio = parseInt(prompt("Ingrese el año de nacimiento 'formato (YYYY)': "));
const fecha = new Date();
const anioActual = fecha.getFullYear();
const mesActual = fecha.getMonth() + 1;
const hoy = fecha.getDate();

// LOGS DE PRUEBA
// console.log(anioActual);
// console.log(mesActual);
// console.log(hoy);
// console.log(anio);

function obtenerEdad(anio1){
if (anio1 > anioActual-110) {
    alert("Ud tiene " + (anioActual - anio1) + " años.");
} else {
    alert("Ingrese una fecha correcta");
}

}

obtenerEdad(anio);