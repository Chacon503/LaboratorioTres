const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

var hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


var boton = document.getElementById("btn");
var colorElement = document.querySelector(".color");


boton.addEventListener("click", function() {

var colorHex = "#";

for (var i = 0; i < 6; i++) {
    colorHex = colorHex + hexValues[obtenerNumeroAleatorio()];
}

document.body.style.backgroundColor = colorHex;
});

function obtenerNumeroAleatorio() {
  return Math.floor(Math.random() * hexValues.length);
}