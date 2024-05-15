'use strict';

//Sin parámetros, sin valor de retorno
function despedir() {
    alert("¡Adiós! Que tengas un buen día.");
}

despedir();

//Con parámetros, sin valor retorno
function imprimirDetallesPersona(nombre, edad, ciudad) {
    alert("Nombre: " + nombre);
    alert("Edad: " + edad);
    alert("Ciudad: " + ciudad);
}

imprimirDetallesPersona("Sebastian", 18, "Cuenca");

//Sin parámetros, con valor retorno
function MensajeBienvenida() {
    return "¡Bienvenido a nuestro sitio web!";
}
let mensajeBienvenida = MensajeBienvenida();
alert(mensajeBienvenida);

//Con parámetros, con retorno
function calcularAreaRectangulo(ancho, alto) {
    return ancho * alto;
}
let areaRectangulo = calcularAreaRectangulo(7,6);
alert("El área del rectángulo es: " + areaRectangulo);