const textArea =  document.querySelector("textarea");
const mensaje = document.querySelector("#mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
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
    console.log(texto);
    let textoEncriptado = ""
    for (let i = 0; i < texto.length; i++) {
        if ("abcdefghijklmnñopqrstuvwxyz ".includes(texto[i])){
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
        } else {
            alert("Error! Solo se permiten letras sin caracteres especiales");
            break;
        }
    }
    return textoEncriptado;
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