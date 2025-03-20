document.addEventListener('DOMContentLoaded', () => {
    const mensaje = "🌸 En el vasto universo, donde el tiempo no se detiene, tú eres la estrella que brilla con luz propia, sin que nada te frene. ✨" +
                    " He querido crear algo especial para ti, un pequeño gesto que ilumine tu día y te haga sonreír.💖" +
                    " Aunque las palabras no siempre alcanzan para expresar, quiero que sepas cuánto significas para mí. No eres solo un pensamiento pasajero, sino un capítulo esencial en una historia que no tiene final. 💞";
    const elemento = document.querySelector('.mensaje p');
    let index = 0;

    function escribirTexto() {
        if (index < mensaje.length) {
            elemento.innerHTML += mensaje.charAt(index);
            index++;
            setTimeout(escribirTexto, 50);
        }
    }

    escribirTexto();
});