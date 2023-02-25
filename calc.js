alert("Usted está en a la calculadora.");

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let operacion = prompt("Ingrese la operación deseada, suma (+) ; resta (-) ; multiplicación(*) ; división (/) :");
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

function calculadora(n1,operacion,n2){
if (operacion == "+") {
    alert("La suma es: " + (n1 + n2));
} else if (operacion == "-") {
    alert("La resta es: " + (n1 - n2));
} else if (operacion == "*") {
    alert("La multiplicación es: " + (n1 * n2));
} else if (operacion == "/") {
    alert("La división es: " + (n1 / n2));
}
}

calculadora(numero1, operacion, numero2);
