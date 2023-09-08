$(document).ready( ()=>{
    $('#carousel-images').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click( ()=>{
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', { //pluguin jQuery Mask
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({ // pluguin jQuery Validation
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Insira um número de celular valido',
            email: 'Campo e-mail é obrigatório'

        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(camposIncorretos)
            };
        }
    })
} )