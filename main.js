$(document).ready(function () {
    $("header button").click(function () {
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })
    $("form").on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaimagem = $("#endereco-imagem-nova").val();
        const novoItem = $('<li style = "display: none"></li>');
        $(`<img src="${enderecoDaNovaimagem}"/>`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
        <a href= "${enderecoDaNovaimagem}" target= "_blank" title = "ver imagem em tamanho real">
        Ver imagem em tamanho real
        </a>     
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1500);
        $('#endereco-imagem-nova').val('');
    })
})