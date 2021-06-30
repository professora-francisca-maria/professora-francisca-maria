//PASSWORD

function verificacao() {

    var input = document.querySelector("input#password");
    var senha = input.value;


    if (senha == 123) {
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


//SAUDAÇÕES

var agora = new Date();
var hora = agora.getHours();
var saudacoes = window.document.querySelector('span#saudacoes');


if (hora <= 5) {
    document.body.style.backgroundImage = "url('assets/img/Fundo-preto-claro-alterada.png')";
    saudacoes.innerText = 'Boa Madruga!';
} else {
    if (hora < 12) {
        saudacoes.innerText = 'Bom dia!';
    } else {
        if (hora < 18) {
            saudacoes.innerText = 'Boa Tarde!';
        } else {
            document.body.style.backgroundImage = "url('assets/img/Fundo-preto-claro-alterada.png')";
            saudacoes.innerText = 'Boa Noite!';
        }
    }
}


//LER MAIS

function lerMais() {

    var lerMais = document.getElementById("lerMais");
    var apareceDesaparece = document.getElementById("aparece-desaparece");
    var lerMenos = document.getElementById("lerMenos");


    if(apareceDesaparece.style.display === "none") {
        lerMais.style.display = 'none';
        apareceDesaparece.style.display = 'inline';
        lerMenos.style.display = 'inline';
    }else {
        lerMais.style.display = 'inline';
        apareceDesaparece.style.display = "none";
        lerMenos.style.display = 'none';
    }
}
