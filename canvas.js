
var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");
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

//array de palabras
var palabras = ["CHILE", "BRASIL", "COLOMBIA", "PERU", "BOLIVIA", "ECUADOR"];

var palabraEscogida = palabras[Math.floor(Math.random() * palabras.length)];
console.log(palabraEscogida);

//Dibujar lineas para letras  de palabra escogida
var x = 700;
var y = 710;
const arrayEjeXaleatorio = [];

for (let i = 0; i < palabraEscogida.length; i++) {
    pincel.fillStyle = "black";
    pincel.fillRect(x, 600, 40, 3);
    x += 60;
    arrayEjeXaleatorio.push(y);
    y += 60;
}

var indice = Math.floor(Math.random() * palabraEscogida.length)

/*
//Poner una letra ramdom de la palabraEscogida en la pantalla para que usuario tenga una pista de la palabra
var letraEscogida = palabraEscogida[indice];
var lugarParaLetraEscogida = arrayEjeXaleatorio[indice];

console.log(letraEscogida);
console.log(arrayEjeXaleatorio);


pincel.beginPath();
pincel.fillStyle = "black";
pincel.font = "bold 50px arial";
pincel.fillText(letraEscogida, lugarParaLetraEscogida, 570);
*/
document.addEventListener("keypress", letraAdivinada);

var error = 0;
var i = 0;
var palabraEscogidaSplit=palabraEscogida.split("");
console.log(palabraEscogidaSplit);
function letraAdivinada() {
    var letraPresionada = event.key;
    
    console.log(error);
    console.log(letraPresionada);
    var xy="";
    xy=palabraEscogidaSplit.find(element => element==letraPresionada)
    var posicion=palabraEscogidaSplit.indexOf(xy);
   
    pincel.beginPath();
            pincel.fillStyle = "black";
            pincel.font = "bold 50px arial";
            pincel.fillText(xy, arrayEjeXaleatorio[posicion], 570);

    if(error>=9){
        alert("perdiste");
        i=0;
        error=0;
    }else if(i==palabraEscogidaSplit.length){
        alert("G A N A S T E");
        i=0;
        error=0;
    }

    console.log(xy);
    console.log(posicion);
    console.log(i);
    
    if(posicion==-1){
        error++;
        switch (error) {

            case 1:
                posteVertical();
                break;
            case 2:
                posteHorizontal();
                break;
            case 3:
                soga();
                break;
            case 4:
                cabeza();
                break;
            case 5:
                cuerpo();
                break;
            case 6:
                brazoDerecho();
                break;
            case 7:
                brazoIzquierdo();
                break;
            case 8:
                piernaDerecha();
                break;
            case 9:
                piernaIzquierda();
                break;
            default:
                break;
        }
    }else{
        i++;
    }

}

