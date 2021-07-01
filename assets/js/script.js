//PASSWORD

function verificacao() {

    var input = document.querySelector("input#password");
    var senha = input.value;

    if (senha == 123) {
        window.location.href='../../main.html';
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

let agora = new Date();
let milisegundos = 3600000 - (agora.getMinutes() * 60000);

var saudacoes = window.document.querySelector('span#saudacoes');


temporizador();

function temporizador() {

    let tempo = new Date();

    if (tempo.getHours() <= 5) {
        document.body.style.backgroundImage = "url('assets/img/Fundo-preto-claro-alterada.png')";
        saudacoes.innerText = 'Boa Madruga!';
    } else {
        if (tempo.getHours() < 12) {
            saudacoes.innerText = 'Bom dia!';
        } else {
            if (tempo.getHours() < 18) {
                saudacoes.innerText = 'Boa Tarde!';
            } else {
                document.body.style.backgroundImage = "url('assets/img/Fundo-preto-claro-alterada.png')";
                saudacoes.innerText = 'Boa Noite!';
            }
        }
    }

    setTimeout(retornarFuncao, milisegundos);
}

function retornarFuncao() {
    
    milisegundos = 3600000;
    return temporizador();

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
