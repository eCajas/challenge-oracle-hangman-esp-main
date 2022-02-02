
var pantalla = document.querySelector("canvas");
var pincel=pantalla.getContext("2d");

pincel.fillStyle="black"; //propiedad
pincel.beginPath();
pincel.moveTo(200,710);
pincel.lineTo(100,750);
pincel.lineTo(300,750);
pincel.fill();

pincel.fillStyle="white"; //propiedad
pincel.beginPath();
pincel.moveTo(200,715);
pincel.lineTo(125,745);
pincel.lineTo(275,745);
pincel.fill();

pincel.fillStyle = "black";
pincel.fillRect(197,200,6,512);

pincel.fillStyle = "black";
pincel.fillRect(203,200,300,6);

pincel.fillStyle = "black";
pincel.fillRect(500,200,6,100);

pincel.fillStyle = "black";
pincel.beginPath();
pincel.arc(502,300, 20, 0, 2 * 3.14);
pincel.fill();

//cabeza exterior
pincel.fillStyle = "black";
pincel.beginPath();
pincel.arc(502,300, 40, 0, 2 * 3.14);
pincel.fill();

//cabeza interior
pincel.fillStyle = "white";
pincel.beginPath();
pincel.arc(502,300.5, 35, 0, 2 * 3.14);
pincel.fill();

//cuerpo
pincel.fillStyle = "black";
pincel.fillRect(500,340,6,150);

//brazo izquierdo
pincel.lineWidth = 5;
pincel.strokeStyle = "black";
pincel.beginPath();
pincel.moveTo(502, 400);
pincel.lineTo(400, 340);
pincel.stroke();

//brazo derecho
pincel.lineWidth = 5;
pincel.strokeStyle = "black";
pincel.beginPath();
pincel.moveTo(502, 400);
pincel.lineTo(600, 340);
pincel.stroke();

//pierna derecho
pincel.lineWidth = 5;
pincel.strokeStyle = "black";
pincel.beginPath();
pincel.moveTo(504, 490);
pincel.lineTo(600, 570);
pincel.stroke();

//pierna izquierda
pincel.lineWidth = 5;
pincel.strokeStyle = "black";
pincel.beginPath();
pincel.moveTo(502, 490);
pincel.lineTo(400, 570);
pincel.stroke();

//array de palabras
var palabras=["ORACLE","ALURA","PAN","CANASTA","PERU","CHILE","ECUADOR"];

var palabraEscogida=palabras[Math.floor(Math.random()*palabras.length)];
console.log(palabraEscogida);

//Dibujar lineas para letras  de palabra escogida
var x = 700;
var y = 710; 
const arrayEjeXaleatorio=[];

for(let i = 0;i<palabraEscogida.length;i++){
    pincel.fillStyle = "black";
    pincel.fillRect(x,600,40,3);
    x+=60;
    arrayEjeXaleatorio.push(y);
    y+=60;
}

var indice = Math.floor(Math.random()*palabraEscogida.length)
var letraEscogida = palabraEscogida[indice];
var lugarParaLetraEscogida=arrayEjeXaleatorio[indice];

console.log(letraEscogida);
console.log(arrayEjeXaleatorio);
  

pincel.beginPath();
pincel.fillStyle="black"; 
pincel.font="bold 50px arial"; 
pincel.fillText(letraEscogida,lugarParaLetraEscogida,570);

document.onkeyup = letraAdivinada;

function letraAdivinada(evento) {
    var letraPresionada = String.fromCharCode(evento.keyCode);
    console.log(letraPresionada);

    for (let i = 0; i < palabraEscogida.length; i++) {
        if (letraPresionada == palabraEscogida[i]) {
            pincel.beginPath();
            pincel.fillStyle = "black";
            pincel.font = "bold 50px arial";
            pincel.fillText(palabraEscogida[i], arrayEjeXaleatorio[i], 570);
            
        }
    }

}







