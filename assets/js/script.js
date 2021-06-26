//SENHA

function verificacao() {
    console.log('Entrou!');

    var input = document.querySelector("input#password");
    var senha = input.value;
    console.log(senha);


    if (senha == 123) {
        //location = "main.html";
        window.location.href='../../main.html';

        return;
    } else {
        if (senha == "") {
            alert('Por favor, digite a senha.')
        } else {
            alert("Dados Inválidos");
            window.location.href='../../index.html';
        }
    }
    


}









/*
var input = document.querySelector("input#password");
var senha = input.value;

console.log(senha);


if (form.name.value == 123) {
    location = "main.html";
} else {
    alert("Dados Inválidos");
}
*/

//SAUDAÇÕES

var agora = new Date();
var hora = agora.getHours();

if (hora <= 5) {
    var saudacoes = window.document.querySelector('span#saudacoes');
    saudacoes.innerText = 'Boa Madrugada!';
} else {
    if (hora < 12) {
        var saudacoes = window.document.querySelector('span#saudacoes');
        saudacoes.innerText = 'Bom dia!';
    } else {
        if (hora < 18) {
            var saudacoes = window.document.querySelector('span#saudacoes');
            saudacoes.innerText = 'Boa Tarde!';
        } else {
            var saudacoes = window.document.querySelector('span#saudacoes');
            saudacoes.innerText = 'Boa Noite!';
        }
    }
}