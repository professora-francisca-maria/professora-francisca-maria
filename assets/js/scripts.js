//BUTTON
var numeroCliques = 0;
/*
PARA numeroCliques = IMPAR ---> ATIVADO;
PARA numeroCliques = PAR   ---> DESATIVADO;
*/

function verificar() {

    numeroCliques += 1;

    if(numeroCliques % 2 != 0) {//SE FOR IMPAR
        document.body.style.backgroundImage = "url('assets/img/Fundo-preto-claro-alterada.png')";
    } else {
        document.body.style.backgroundImage = "url('assets/img/Imagem-Fundo.jpg')";
    }
}



//SAUDAÇÕES

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
