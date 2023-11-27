const reloj = document.getElementById("reloj");

const comprobarDato = valor => {
    if (valor < 10) {
        return `0${valor}`;
    } else {
        return valor;
    }
};

const modificarReloj = () => {
    let date = new Date();
    let hou = comprobarDato(date.getHours());
    let min = comprobarDato(date.getMinutes());
    let sec = comprobarDato(date.getSeconds());

    reloj.innerText = `${hou} : ${min} : ${sec}`;
};

var intervalo = setInterval(modificarReloj, 1000);
