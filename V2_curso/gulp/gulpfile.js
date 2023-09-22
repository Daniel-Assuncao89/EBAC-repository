function funcaoPadrao(callback) {
    console.log("Executando via gulp");
    callback();
}

function dizOi(callback) {
    console.log("Olá gulp");
    dizTchau();
    callback();
}

function dizTchau(){ //tarefa privada. Utilizada dentro de outra tarefa
    console.log("Tchau gulp");
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi; // tarefas publicas são exportadas.