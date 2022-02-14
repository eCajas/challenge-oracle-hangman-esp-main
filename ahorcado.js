
//array de paises
var palabras = ["CHILE", "BRASIL", "COLOMBIA", "PERU", "BOLIVIA", "ECUADOR"];
var arrayLetrasPresionadas=[];

var buttonIniciarJuego = document.querySelector("#iniciar-juego");
buttonIniciarJuego.onclick = jugar;

var error = 0;
var i = 1;

function jugar() {

    cavasInicio();
    window.scrollTo(800, 500);
    //document.getElementById("ahorcado").focus();

    var palabraEscogida = palabras[Math.floor(Math.random() * palabras.length)];
    console.log(palabraEscogida);
    
    var palabraEscogidaSplit = palabraEscogida.split("");
    console.log(palabraEscogidaSplit);

    //Dibujar lineas para letras  de palabra escogida
    var x = 700;
    var y = 710;
    const arrayEjeXaleatorio = [];

    for (let i = 0; i < palabraEscogidaSplit.length; i++) {
        pincel.fillStyle = "black";
        pincel.fillRect(x, 600, 40, 3);
        x += 60;
        arrayEjeXaleatorio.push(y);
        y += 60;
    }

    document.addEventListener("keypress", letraAdivinada);


    function letraAdivinada() {
        var letraPresionada = event.key;
    
        console.log(error);
        console.log(letraPresionada);
        var xy = "";
        var posicion=-1;

        for(var j=0;j<palabraEscogidaSplit.length;j++){

            if(letraPresionada==palabraEscogidaSplit[j]){
                pincel.beginPath();
                pincel.fillStyle = "black";
                pincel.font = "bold 50px arial";
                pincel.fillText(palabraEscogidaSplit[j], arrayEjeXaleatorio[j], 570); 
                posicion++;
                arrayLetrasPresionadas.push(palabraEscogidaSplit[i]);
            }
       
        }

        if (error >= 9) {
            alert("perdiste");
            i = 0;
            error = 0;
            posicion=-1;
            location.reload(true)
            window.scrollTo(0,100);
          
        } else if (i == palabraEscogidaSplit.length) {
            window.scrollTo(0,100);
            alert("G A N A S T E");
            i = 0;
            error = 0;
            posicion=-1;
            location.reload(true)
            
        }
    
        if (posicion == -1) {
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
            }
        } else {
            i++;
        }
    
    }
 
}

//ingresando palabra nueva al array

var buttonNuevaPalabra = document.querySelector("#nueva-palabra");
buttonNuevaPalabra.onclick = nuevaPalabra;

function nuevaPalabra() {

    var inputNuevaPalabra = document.querySelector("#input-nueva-palabra");
    var nuevaPalabraAgregada = inputNuevaPalabra.value.toUpperCase();


    if (palabras.includes(nuevaPalabraAgregada)) {
        alert("La palabra " + nuevaPalabraAgregada + " ya existe... ingrese otra palabra")
    } else {
        alert("La palabra " + nuevaPalabraAgregada + " a sido agregada con exito...")
        palabras.push(nuevaPalabraAgregada);
        console.log(palabras)
    }
    inputNuevaPalabra.focus();
}








