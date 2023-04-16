/* ********** ********** ********** ********** ********** ********** ********** */
// SCRIPT "COMPROBADOR DE PALINDROMOS"
/* ********** ********** ********** ********** ********** ********** ********** */

const textoQueSeRevisa = document.querySelector("#texto-que-se-revisa");
const textoSinAcentos = document.querySelector("#texto-sin-acentos");
const textoEnMinusculas = document.querySelector("#texto-en-minusculas");
const soloAlfaNumericos = document.querySelector("#solo-alfa-numericos");
const caracteresInvertidos = document.querySelector("#caracteres-invertidos");
const resultadoPalindromo = document.querySelector("#resultado-palindromo");

const quitarAcentos = document.querySelector("#quitar-acentos");
const letrasMinusculas = document.querySelector("#letras-minusculas");
const eliminarCaracteres = document.querySelector("#eliminar-caracteres");
const invertirCaracteres = document.querySelector("#invertir-caracteres");
const comprobadorPalindromo = document.querySelector("#comprobador-palindromo");
const resetearCampos = document.querySelector(".resetear-campos");

/* ([^n\u0300-\u036f])[\u0300-\u036f]+ un caracter que no es una n ni un diacrítico, 
seguido de diacríticos, o */

/* (n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+ una n que no está seguida por ~ 
(a menos que esta última esté seguida por otro diacrítico), entonces sí que coincida 
con todos los diacríticos que le siguen. */

quitarAcentos.addEventListener("click", function() {
    const QA = /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi;
    textoSinAcentos.textContent = textoQueSeRevisa.value.normalize('NFD').replace(QA, "$1").normalize();
});

letrasMinusculas.addEventListener("click", function() {
    textoEnMinusculas.textContent = textoSinAcentos.textContent.toLowerCase();
});
  
eliminarCaracteres.addEventListener("click", function() {
    soloAlfaNumericos.textContent = textoEnMinusculas.textContent.match(/[a-z0-9ñ]/g).join(" ");
});

invertirCaracteres.addEventListener("click", function() {
    caracteresInvertidos.textContent = soloAlfaNumericos.textContent.split("").reverse().join("");
});  

const soyPalindromo = () => {
    if(soloAlfaNumericos.textContent === "" || caracteresInvertidos.textContent === "") {
        return "";
    }
    else if(soloAlfaNumericos.textContent === caracteresInvertidos.textContent) {
        resultadoPalindromo.style.color = "green";
        resultadoPalindromo.textContent = `Te felicito:
        ** ${textoQueSeRevisa.value} ** es un palíndromo.`;
    }
    else {
        resultadoPalindromo.style.color = "red";
        resultadoPalindromo.textContent = `Lamento decirtelo: 
        ** ${textoQueSeRevisa.value} ** no es un palíndromo.`;
    }
}
comprobadorPalindromo.addEventListener("click", soyPalindromo);

const resetearValores = () => {
    textoQueSeRevisa.style.height = "9rem";
    textoQueSeRevisa.value = "";    
    textoSinAcentos.textContent = "";
    textoEnMinusculas.textContent= "";
    soloAlfaNumericos.textContent = "";
    caracteresInvertidos.textContent = "";
    resultadoPalindromo.textContent = "";
}
resetearCampos.addEventListener("click", resetearValores);

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */