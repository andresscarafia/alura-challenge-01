const textArea =  document.querySelector("textarea");
const mensaje = document.querySelector("#mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    if (textArea.value != "" && mensaje.value != "") {
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnCopiar() {
    const textoCopiado = mensaje.value;
    alert("El texto ha sido copiado");
    textArea.value = textoCopiado;
    mensaje.value = "";
    mensaje.style.backgroundImage = "url(images/persona.png)";
}

function encriptar(texto) {
    texto = texto.toLowerCase();
    let textoNuevo = ""
    for (let i = 0; i < texto.length; i++) {
        if ("abcdefghijklmnñopqrstuvwxyz ".includes(texto[i])){
            if (texto[i] == "a") {
                textoNuevo += "ai";
            } else if(texto[i] == "e") {
                textoNuevo += "enter";
            } else if(texto[i] == "i") {
                textoNuevo += "imes";
            } else if(texto[i] == "o") {
                textoNuevo += "ober";
            } else if(texto[i] == "u") {
                textoNuevo += "ufat";
            } else {
                textoNuevo += texto[i];
            }
        } else {
            alert("Error! Solo se permiten letras sin caracteres especiales");
            return "";
        }
    }
    return textoNuevo;
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