function obterMedia(){
var a = parseInt(document.getElementById("a").value);

var b = parseInt(document.getElementById("b").value);

var c = parseInt(document.getElementById("c").value);

var media = (a + b + c) / 3;

document.getElementById("resultado").innerHTML = "Resultado: " + media;

console.log(a + b + c);
}

function calcularMedia( notas ){
    let soma = 0;
    for ( c = 0; c < notas.length; c++){
        soma += notas[c]
    }

    media = soma / notas.length;

    return media;
}

function aprovacao ( notas ){
    
    let media = calcularMedia( notas );

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' Resultado: ' + condicao;
}

// Funções Recursivas

function contagemRegressiva( numero ){

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}

document.addEventListener('submit', function( event ){

    event.preventDefault();

    let formulario = document.getElementById("formulario-01");

    let dados = new FormData(formulario) // proprio para pegar valores

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);

        //adicionar itens no array
        notas.push( parseInt(dados.get(key)));
    }

    console.log(notas);
    console.log(objeto);

    document.getElementById("resultado").innerHTML = aprovacao(notas);
})