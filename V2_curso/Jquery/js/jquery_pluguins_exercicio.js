$(document).ready( function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#cpf').mask('999.999.999-99', {
        placeholder: '999.999.999-99'
    })

    $('#cep').mask('000000-00', {
        placeholder:'000000-00'
    })
} )