/**
 * Obtenim referències als elements del DOM i les emmagatzemem en unes variables.
 */
const picture = document.getElementById('picture');
const img = document.getElementById('img');
const peuFoto = document.getElementById('peuFoto');

/**
 * Obtenim referències als elements del DOM i les emmagatzemem en una variable.
 */
const array = document.getElementsByTagName('img');

/**
 * A traves d'un bucle s'afegeix un esdeveniment de clic el qual modifica els atributs src i alt 
 * de la variable 'img' i el contingut de la variable 'peuFoto'
 */
for (let index = 0; index < (array.length - 1); index++) {
    let foto = array[index];
    foto.addEventListener('click', () => {
        img.setAttribute('src', foto.src);
        img.setAttribute('alt', foto.alt);
        peuFoto.innerText = foto.alt;
    });
}