/* ********** ********** ********** ********** ********** ********** ********** */
// COMPROBADOR DE PALINDROMOS JAVASCRIPT.
/* ********** ********** ********** ********** ********** ********** ********** */

// Opcion N-1 (Original).
function comprobadorDePalindromo(textoQueSeRevisa) {
    const regexAlfaNumerico = /[a-z0-9]/g;
    const textoEnMayusculas = textoQueSeRevisa.toLowerCase();    
    const caracteresAlfaNumericos = textoEnMayusculas.match(regexAlfaNumerico).join("");
    const caracteresInvertidos = caracteresAlfaNumericos.split("").reverse().join("");      
    if(caracteresAlfaNumericos === caracteresInvertidos) {
        return true;
    } else {
        return false;
    }
}
  
console.log(comprobadorDePalindromo("525 Anita $%&# lava |^@{ la */+- tina 525."));

  
// Opcion N-2 (Mejorada).  
function comprobadorDePalindromo2(textoQueSeRevisa) {
    const caracteresAlfaNumericos = textoQueSeRevisa.toLowerCase().match(/[a-z0-9]/g).join("");
    const caracteresInvertidos = caracteresAlfaNumericos.split("").reverse().join("");
    return caracteresAlfaNumericos === caracteresInvertidos ? true : false;
}
  
console.log(comprobadorDePalindromo2("525 Anita $%&# lava |^@{ la */+- tina 525."));
  
  
/* ********** ********** ********** ********** ********** ********** ********** */
// Esta versión remueve todo tipo de diacriticos excepto en la letras Ñ y ñ.
/* ********** ********** ********** ********** ********** ********** ********** */

// CREDITOS:
// https://es.stackoverflow.com/questions/135707/c%C3%B3mo-puedo-reemplazar-las-letras-con-tildes-por-las-mismas-sin-tilde-pero-no-l

/* ([^n\u0300-\u036f])[\u0300-\u036f]+ un caracter que no es una n ni un diacrítico, 
seguido de diacríticos, o */

/* (n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+ una n que no está seguida por ~ 
(a menos que esta última esté seguida por otro diacrítico), entonces sí que coincida 
con todos los diacríticos que le siguen. */
  
//Opcion N-3 (Perfecto).
function comprobadorDePalindromo3(textoQueSeRevisa) {
    const regexQuitarAcentos = /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi;
    const quitarAcentos = textoQueSeRevisa.normalize('NFD').replace(regexQuitarAcentos, "$1").normalize();
    const caracteresAlfaNumericos = quitarAcentos.toLowerCase().match(/[a-z0-9ñ]/g).join("");
    const caracteresInvertidos = caracteresAlfaNumericos.split("").reverse().join("");
    return caracteresAlfaNumericos === caracteresInvertidos ? true : false;
}
  
console.log(comprobadorDePalindromo3("5Ñ2Ñ5 Anita $%&# lava |^@{ la */+- tina 5ñ2ñ5."));

/* ********** ********** ********** ********** ********** ********** ********** */
/* ********** ********** ********** ********** ********** ********** ********** */