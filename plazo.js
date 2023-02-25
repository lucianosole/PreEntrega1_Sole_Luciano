alert("Bienvenido al simulador de intereses para plazo fijo.")

let capital = parseFloat(prompt("Ingrese capital inicial para simular su ganacia: "));
let tiempo = parseInt(prompt("Ingrese cuantos días quiere depositar su capital: "));
let tasa = parseFloat(prompt("Ingrse la tasa anual, si la conoce."));
let total = parseFloat(capital);


function controlTasa(tasaIngresada){
if (isNaN(tasaIngresada)) {
    alert("Se utilizará una tasa promedio de 50% anual.");
    return tasa = 50/12;
} else {
    return tasa = tasaIngresada/12;
}

}

controlTasa(tasa);

for (let i = 1; i <= tiempo/30; i=i+1) {
    total = (total + (total * tasa / 100));
}

let ganancia = capital*(((tiempo/30)*tasa)/100);

let renovacion = prompt("ingrese el tipo de renovación mensual o total:");

switch(renovacion){
    case "mensual":
        alert("Capital ingresado: $ " + Number(capital.toFixed(2)) + ", si es renovado cada 30 días, obtendrá el monto final a  ser retirado: $ " + Number(total).toFixed(2));
        break;
    case "total":
        alert("Capital ingresado: $ " + Number(capital.toFixed(2)) + ", el cual generará una ganacia de: $ " + Number(ganancia.toFixed(2)) + " en " + tiempo + " días" + ". Total a retirar: $ " + Number(capital+ganancia).toFixed(2));    
        break
    default:
        alert("Si no sabe que tipo de plazo generar, le damos una comparación. El mensual genera al finalizar: $ " + (Number(total).toFixed(2) - Number(capital.toFixed(2))) + ". Si la renovación fuera única, el total generado es de: $ "+ Number(ganancia.toFixed(2))) ;
        break
}