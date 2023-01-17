var valor1 = document.querySelector('#valor1')
var valor2 = document.querySelector('#valor2')
var resultado = document.querySelector("span")

function somarDoisValores () {
    resultado.innerHTML =  parseInt(valor1.value) + parseInt(valor2.value);
}

function subtrairDoisValores () {
    resultado.innerHTML =  parseInt(valor1.value) - parseInt(valor2.value);
}

function dividirDoisValores () {
    resultado.innerHTML =  parseInt(valor1.value) / parseInt(valor2.value);
}

function multiplicarDoisValores () {
    resultado.innerHTML =  parseInt(valor1.value) * parseInt(valor2.value);
}