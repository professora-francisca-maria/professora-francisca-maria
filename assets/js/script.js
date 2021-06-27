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

if (hora <= 5) {
    var saudacoes = window.document.querySelector('span#saudacoes');
    saudacoes.innerText = 'Boa Madruga!';
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

//LER MAIS

function lerMais() {

    var lerMais = document.getElementById("lerMais");
    var sumir = document.getElementById("sumir");
    var lerMenos = document.getElementById("lerMenos");


    if(sumir.style.display === "none") {
        lerMais.style.display = 'none';
        sumir.style.display = 'inline';
        lerMenos.style.display = 'inline';
    }else {
        lerMais.style.display = 'inline';
        sumir.style.display = "none";
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
