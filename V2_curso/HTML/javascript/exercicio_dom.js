form = document.getElementById('form-valor')
console.log(form)

function validaValores(valorA, valorB){
    return valorA > valorB
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const valorA = document.getElementById('valorA');
    const valorB = document.getElementById('valorB');

    validation = validaValores(parseInt(valorA.value), parseInt(valorB.value))
    if(validation){
        const element = document.querySelector('.error-message')
        element.innerHTML = 'Valor de A não pode ser maior que B'
        element.style.display = 'block'
    }else {
        const element = document.querySelector('.success-message');
        element.innerHTML = 'Valores Validos'
        element.style.display = 'block'
    }

})

