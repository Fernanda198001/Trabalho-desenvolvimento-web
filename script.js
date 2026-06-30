const btn = document.getElementById('btn-enviar');
const campo = document.getElementById('campo-comentario');
const msg = document.getElementById('msg-enviada');

btn.addEventListener('click', function () {
    msg.classList.remove('hidden');
    campo.value = '';

    setTimeout(function () {
        msg.classList.add('hidden');
    }, 3000);
});
