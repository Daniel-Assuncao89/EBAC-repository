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

    $('.lista-veiculos button').click( function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text(); // this represente o proprio objeto. Não funciona com arrow function (perguntar o pq)

        $('#veiculo-interesse').val(nomeVeiculo) // Seta no valor do campo o texto obtido com o click

        $('html').animate({
            scrollTop: destino.offset().top //Retorno a distancia do objeto para o Topo. offset: distancia ; .top : de referencia
        }, 1000)
    })

})