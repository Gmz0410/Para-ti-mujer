document.addEventListener('DOMContentLoaded', () => {
    const mensaje = "🌸 Hola, hermosa 🌸\n\nQuería hacer algo especial para ti, y pensé que este pequeño detalle sería una linda manera de recordarte lo increíble que eres. 💫\n\nNo sé qué pienses, pero solo quería que supieras lo mucho que me importas. Eres una persona única y maravillosa, y espero que nunca lo olvides. 💖";
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