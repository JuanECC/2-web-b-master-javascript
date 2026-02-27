const passwordInput = document.getElementById("password");
const longitudInput = document.getElementById("longitud");
const mayusculasCheck = document.getElementById("mayusculas");
const minusculasCheck = document.getElementById("minusculas");
const numerosCheck = document.getElementById("numeros");
const simbolosCheck = document.getElementById("simbolos");
const generarBtn = document.getElementById("generar");
const copiarBtn = document.getElementById("copiar");

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+[]{}<>?/";

function generarPassword() {
    let caracteres = "";

    if (mayusculasCheck.checked) caracteres += mayusculas;
    if (minusculasCheck.checked) caracteres += minusculas;
    if (numerosCheck.checked) caracteres += numeros;
    if (simbolosCheck.checked) caracteres += simbolos;

    if (caracteres === "") {
        alert("Selecciona al menos una opción.");
        return;
    }

    let longitud = parseInt(longitudInput.value);
    if (longitud < 8) longitud = 8;

    let password = "";

    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex];
    }

    passwordInput.value = password;
}

generarBtn.addEventListener("click", generarPassword);

copiarBtn.addEventListener("click", () => {
    passwordInput.select();
    document.execCommand("copy");
    alert("Contraseña copiada");
});