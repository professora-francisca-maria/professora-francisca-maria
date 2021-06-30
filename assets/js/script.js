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
//var background = window.document.getElementById('background');


if (hora <= 5) {
    //var saudacoes = window.document.querySelector('span#saudacoes');
    //saudacoes.innerText = 'Boa Madruga!';
    document.body.style.backgroundImage = "url('assets/img/Fundo-preto-claro-alterada.png')";
} else {
    if (hora < 12) {
        //var saudacoes = window.document.querySelector('span#saudacoes');
        //saudacoes.innerText = 'Bom dia!';
    } else {
        if (hora < 18) {
            //var saudacoes = window.document.querySelector('span#saudacoes');

            document.body.style.backgroundImage = "url('assets/img/Fundo-preto-claro-alterada.png')";
            saudacoes.innerText = 'Boa Tarde!';

            //document.getElementById("background").style.backgroundImage = "url('assets/img/Fundo-preto-claro-alterada.png')";

            //background.style.backgroundImage = 'url(../img/Fundo-preto-claro-alterada.png)';
            
            //document.body.style.backgroundAttachment = "fixed";
            //document.body.style.backgroundSize = "30%";
        } else {
            //var saudacoes = window.document.querySelector('span#saudacoes');
            //saudacoes.innerText = 'Boa Noite!';
            document.body.style.backgroundImage = "url('assets/img/Fundo-preto-claro-alterada.png')";
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

/*
    var texto = window.document.getElementById('lerMais');

    texto.innerHTML = `Na qual os mesmo possuem de suas versão física e estão upando para essa plataforma com objetivo de oferecer exclusivamente para uso parcial em pesquisas e estudos acadêmicos. Venda ou distribuição do conteúdo é ilegal. <a href=""><span id='lerMenos'>Ler menos.</span></a>`

    texto.style.color = 'black';
    texto.style.cursor = 'inherit';
    texto.style.border = 'none';
    
    lerMenos.style.color = 'blue';
    lerMenos.style.cursor = 'pointer';
    lerMenos.style.borderBottom = 'blue solid 1px';
*/
}
