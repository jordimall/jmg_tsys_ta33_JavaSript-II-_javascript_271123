let validadorFecha = /\b\d{2}\/\d{2}\/\d{4}\b/;

if (validadorFecha.test("Nací el 05/04/1982 en Donostia")) {
    console.log("Ha pasado la validación");
} else {
    console.log("No ha pasado la validación");
}

let validarEmail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;
let arrayEmail = [
    "ejemplo.email-123@dominio.com",
    "ejemplo.email-123@dominio.c",
    "ejemplo&email-123@dominio.com",
];

arrayEmail.map(email => {
    if (validarEmail.test(email)) {
        console.log(`El email ${email} a pasado el test`);
    } else {
        console.log(`El email ${email} no a pasado el test`);
    }
});

const escapeHTML = text => {
    let replacements = [
        [/&/g, "&amp;"],
        [/"/g, "&quot;"],
        [/</g, "&lt;"],
        [/>/g, "&gt;"],
    ];

    replacements.map(replace => (text = text.replace(replace[0], replace[1])));

    return text;
};

let textOriginal = '&"<>';

console.log(
    `El texto original es ${textOriginal}, y al modificarlo queda ${escapeHTML(
        textOriginal,
    )}`,
);

const invertirNombre = nombre => {
    let regex = /(\w+)\s+(\w+)/;
    return nombre.replace(regex, "$2, $1");
};

let nombre = "John Smith";
let nombreInvertido = invertirNombre(nombre);

console.log(nombreInvertido);

const eliminarEtiquetasPeligrosas = html => {
    let regex = /<(script|style)[^>]*>[\s\S]*?<\/\1>/gi;
    return html.replace(regex, "");
};

let html =
    '<html><body><h1>Hola, mundo!</h1><script>alert("peligro");</script></body></html>';
let htmlSeguro = eliminarEtiquetasPeligrosas(html);

console.log(htmlSeguro);
