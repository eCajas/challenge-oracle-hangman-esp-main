
var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");


function cavasInicio() {

    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 1200, 800);

    //triangulo
    pincel.fillStyle = "black"; //propiedad
    pincel.beginPath();
    pincel.moveTo(200, 710);
    pincel.lineTo(100, 750);
    pincel.lineTo(300, 750);
    pincel.fill();

    pincel.fillStyle = "white"; //propiedad
    pincel.beginPath();
    pincel.moveTo(200, 715);
    pincel.lineTo(125, 745);
    pincel.lineTo(275, 745);
    pincel.fill();
}

//poste vertical
function posteVertical() {
    pincel.fillStyle = "black";
    pincel.fillRect(197, 200, 6, 512);
}

//poste horizontal
function posteHorizontal() {
    pincel.fillStyle = "black";
    pincel.fillRect(203, 200, 300, 6);
}
//soga
function soga() {
    pincel.fillStyle = "black";
    pincel.fillRect(500, 200, 6, 100);
}
//cabeza
function cabeza() {
    //cabeza exterior
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(502, 300, 40, 0, 2 * 3.14);
    pincel.fill();
    //cabeza interior
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(502, 300.5, 35, 0, 2 * 3.14);
    pincel.fill();
}
//cuerpo
function cuerpo() {
    pincel.fillStyle = "black";
    pincel.fillRect(500, 340, 6, 150);
}
//brazo izquierdo
function brazoIzquierdo() {
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(502, 400);
    pincel.lineTo(400, 340);
    pincel.stroke();
}
//brazo derecho
function brazoDerecho() {
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(502, 400);
    pincel.lineTo(600, 340);
    pincel.stroke();
}
//pierna derecho
function piernaDerecha() {
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(504, 490);
    pincel.lineTo(600, 570);
    pincel.stroke();
}
//pierna izquierda
function piernaIzquierda() {
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(502, 490);
    pincel.lineTo(400, 570);
    pincel.stroke();
}
