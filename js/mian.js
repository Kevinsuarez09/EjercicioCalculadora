// variables generales de la función

var valorA;
var valorB;
var operacion;

// función principal de la calculadora

function calculadora() {
    var pantalla = document.getElementById("pantalla");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multi = document.getElementById("multi");
    var divi = document.getElementById("divi");
    var borrar = document.getElementById("borrar");
    var igual = document.getElementById("igual");

    // eventos Números

    uno.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "1";
    }

    dos.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "2";
    }

    tres.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "3";
    }

    cuatro.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "4";
    }

    cinco.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "5";
    }

    seis.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "6";
    }

    siete.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "7";
    }

    ocho.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "8";
    }

    nueve.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "9";
    }

    cero.onclick = function(e) {
        pantalla.textContent = pantalla.textContent + "0";
    }



    // eventos de las operaciones

    suma.onclick = function(e) {
        valorA = pantalla.textContent;
        operacion = "+";
        vaciar();
    }

    resta.onclick = function(e) {
        valorA = pantalla.textContent;
        operacion = "-";
        vaciar();
    }

    multi.onclick = function(e) {
        valorA = pantalla.textContent;
        operacion = "*";
        vaciar();
    }

    divi.onclick = function(e) {
        valorA = pantalla.textContent;
        operacion = "/";
        vaciar();
    }

    borrar.onclick = function(e) {
        resetear();
    }

    igual.onclick = function(e) {
        valorB = pantalla.textContent;
        resultado();
    }

}

// funciones externas (secundarias) para la funcion principal

function vaciar(e) {
    pantalla.textContent = "";
}

function resetear(e) {
    pantalla.textContent = "";
    valorA = 0;
    valorB = 0;
    operacion = "";
}

function resultado(e) {

    var total = 0;

    switch (operacion) {
        case "+":
            total = parseFloat(valorA) + parseFloat(valorB)
            break;
        case "-":
            total = parseFloat(valorA) - parseFloat(valorB)
            break;
        case "*":
            total = parseFloat(valorA) * parseFloat(valorB)
            break;
        case "/":
            total = parseFloat(valorA) / parseFloat(valorB)
            break;            
    }

    pantalla.textContent = total
}