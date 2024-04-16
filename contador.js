let valor = document.getElementById('numeros');
let menos = document.getElementById('subtrair');
let mais = document.getElementById('somar');


function aumentarNumero() {
    let valor = document.getElementById('numeros');
    valor.innerHTML = parseInt(valor.innerText) + 1;
}

function dimunuirNumero() {
    let valor = document.getElementById('numeros');
    valor.innerHTML = parseInt(valor.innerText) - 1;
}

function limpar() {
valor = 0;
document.getElementById('numeros').textContent = '0';
}
