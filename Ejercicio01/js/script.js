let arrayResultado = Array(11).fill(0);
const MINNUMBER = 1;
const MAXNUMBER = 6;

const valorDado = () => {
    return Math.floor(Math.random() * (MAXNUMBER - MINNUMBER + 1) + MINNUMBER);
};

const tirarDado = () => {
    let dado1 = valorDado();
    let dado2 = valorDado();
    let suma = dado1 + dado2;
    arrayResultado[suma - 2]++;
};

const crearMessage = message => {
    for (let i = 0; i < arrayResultado.length; i++) {
        message += `\n Las veces que a salido el numero ${i + 2} es: ${
            arrayResultado[i]
        }.`;
    }
    return message;
};

const mostrarResultado = () => {
    let message = crearMessage(
        "El resultado de tirar los dados 36000 veces es: ",
    );

    document.getElementById("text").innerText = message;
};

for (let i = 0; i < 36000; i++) {
    tirarDado();
}

console.log(
    arrayResultado.reduce(
        (acumulador, valorActual) => acumulador + valorActual,
        0,
    ),
);

mostrarResultado();
