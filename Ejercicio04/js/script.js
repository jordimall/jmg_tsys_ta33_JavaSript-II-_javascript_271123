var valorVisor = 0;
var numeroA;
var numeroB;
var operacion;
var ahora = new Date();

function boton(valor) {
    var auxiliar = document.getElementById("visor").value; 
    document.getElementById("visor").value = auxiliar + valor; 

    valorVisor = document.getElementById("visor").value = auxiliar + valor;

    var hora = ahora.getHours();

    if (hora >= 0 && hora <= 12) {
        document.getElementById("historico").textContent = "Buenos dias";
    }
    
    if (hora >= 13 && hora <= 17) {
        document.getElementById("historico").textContent = "buenas tardes";
    }

    if (hora >= 18 && hora <= 23) {
        document.getElementById("historico").textContent = "Buenas noches";
    }
}

function btn_suma(caracter) {
    numeroA = valorVisor;
    operacion = "+";

    limpar();
}

function btn_resta(caracter) {
    numeroA = valorVisor;
    operacion = "-";

    limpar();
}

function btn_multiplicacion(caracter) {
    numeroA = valorVisor;
    operacion = "*";

    limpar();
}

function btn_division(caracter) {
    numeroA = valorVisor;
    operacion = "/";

    limpar();
}

function reset() {
    document.getElementById("visor").value = "";
    valorVisor = 0;
    operacion = "";
}
function limpar() {
    document.getElementById("visor").value = "";
}

function btn_igual() {
    numeroB = valorVisor;
    calcular();
}

function calcular() {

    var total = 0;
    var ultimoTotal = 0;
    switch (operacion) {
        case "+":
            total = parseFloat(numeroA) + parseFloat(numeroB);
            break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
            total = parseFloat(numeroA) * parseFloat(numeroB);
            break;
        case "/":
            total = parseFloat(numeroA) / parseFloat(numeroB);
            break;
    }
    ultimoTotal = total;
    reset();
    document.getElementById("visor").value = total;
    valorVisor = ultimoTotal;
}
