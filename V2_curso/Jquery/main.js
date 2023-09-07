$(document).ready(function() {
    // console.log(document.querySelector('header button'));
    // console.log($('header button')); // qualquer tipo de seletor HTML

    // document.querySelector('header button').addEventListener('click', () => {
    //     // Callback é uma função dentro de outra função
    // })

    $('header button').click( ()=>{
        $('form').slideDown();
    } )

    $('#botao-cancelar').click( ()=>{
        $('form').slideUp();
    } )

    $('form').on('submit', (e)=>{
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val() //.val recupera o valor igual o .value do JS puro
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
            $('#endereco-imagem-nova').val('')
    })

    // $('form').on('reset', ()=>{
    //     alert("Clicou em cancelar")
    // })

})

