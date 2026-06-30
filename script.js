const form = document.getElementById('form-contato');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome     = document.getElementById('nome').value.trim();
    const email    = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        exibirFeedback('Por favor, preencha todos os campos.', 'erro');
        return;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(email)) {
        exibirFeedback('Informe um e-mail válido. Ex: nome@dominio.com', 'erro');
        return;
    }

    form.reset();
    exibirFeedback('Mensagem enviada com sucesso! 🎀', 'sucesso');
});

function exibirFeedback(texto, tipo) {
    const caixa = document.getElementById('msg-feedback');
    caixa.textContent = texto;
    caixa.className = 'feedback ' + tipo;
    caixa.style.display = 'block';

    setTimeout(() => {
        caixa.style.display = 'none';
    }, 4000);
}
