
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

pincel.fillStyle = "black";
pincel.beginPath();
pincel.arc(502,300, 40, 0, 2 * 3.14);
pincel.fill();

pincel.fillStyle = "white";
pincel.beginPath();
pincel.arc(502,300.5, 35, 0, 2 * 3.14);
pincel.fill();

