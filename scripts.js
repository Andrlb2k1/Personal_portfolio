function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '0000000000000';

    const texto = `Olá, meu nome é ${nome} e eu gostaria de falar com você sobre o seguinte projeto: ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

    window.open(url, '_blank');
}