function encriptar(texto) {
    console.log("ENCRIPTAR")
    let textoEncriptado = ""
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoEncriptado += "ai";
        } else if(texto[i] == "e") {
            textoEncriptado += "enter";
        } else if(texto[i] == "i") {
            textoEncriptado += "imes";
        } else if(texto[i] == "o") {
            textoEncriptado += "ober";
        } else if(texto[i] == "u") {
            textoEncriptado += "ufat";
        } else {
            textoEncriptado += texto[i];
        }
    }
    return textoEncriptado
}

function desencriptar(texto) {
    let textoDesencriptado = ""
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoDesencriptado += "a";
            i++;
        } else if(texto[i] == "e") {
            textoDesencriptado += "e";
            i += 4;
        } else if(texto[i] == "i") {
            textoDesencriptado += "i";
            i += 3;
        } else if(texto[i] == "o") {
            textoDesencriptado += "o";
            i += 3;
        } else if(texto[i] == "u") {
            textoDesencriptado += "u";
            i += 3;
        } else {
            textoDesencriptado += texto[i];
        }
    }
    return textoDesencriptado;
}


/* Código relevante de JS:
  document.write(mensaje)

  parseInt("numero")

  document.querySelector(css-selector)
  document.getElementById()

  // Aquí viene la llamada a la función con el evento onclick
    pantalla.onclick = mostrarMensaje;
    button.onclick = nombreFuncion;

    var button = document.querySelector("button");
	  button.onclick = verificar;


  var input = document.querySelector("input");
	input.focus(); mueve el cursor al input
  input.value = ""; vacia el campo del input

  pantalla.onclick = cambiarColor;
    pantalla.onmousemove = dibujarCirculo;x
    pantalla.onmousedown = habilitarDibujar;
    pantalla.onmouseup = deshabilitarDibujar;


    function exhibirAlerta(evento) {
   		var x = evento.pageX - pantalla.offsetLeft;
   		var y = evento.pageY - pantalla.offsetTop;
   		console.log(evento);
	   	alert("Ud. hizo un click en (" + x + "," + y +")");
   	}
    pantalla.onclick = exhibirAlerta;

    texto = document.querySelector("textarea").value; // consigue el texto del textarea

*/