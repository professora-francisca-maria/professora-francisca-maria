//PASSWORD
function verificacao() {

    let input = document.getElementById("password");
    let senha = input.value;

    if (senha == 123) {
        document.body.innerHTML = `

            <!--BOTÃO-->
            <input type="checkbox" id="ativar-dark" class="ativar-dark" value="false" onclick="verificar()">
            <div class="dark-mode"><!-- Agrupando todo o conteúdo -->
        
                <div class="container">
                    <label for="ativar-dark">
                        <span></span>
                    </label>
                </div>
        
            </div>


            <!--CONTEÚDO DO SITE-->
            <div>
                <header>
                    <img src="assets/img/cats.jpg" alt="Logo da Escola">
                    <h1>BIBLIOTECA DIGITAL: Escola Professora<br> Francisca Maria</h1>
                </header>

                <main>
                    <div>
                        <p><strong>ATENÇÃO:</strong> Os livros aqui expostos são de domínio 
                        público e propriedade intelectual, compartilhados pelos(as) alun@s 
                        e professores(os) da Escola Professora Francisca Maria da Silveira 
                        Santos de forma totalmente gratuita. <span id="lerMais" 
                        onClick='lerMais()'>Ler mais.</span> <span id="aparece-desaparece" 
                        style="display: none;">Na qual os mesmo possuem de suas versão física 
                        e estão upando para essa plataforma com objetivo de oferecer exclusivamente 
                        para uso parcial em pesquisas e estudos acadêmicos. Venda ou distribuição 
                        do conteúdo é ilegal.</span> <span id="lerMenos" onClick='lerMais()' 
                        style="display: none;">Ler menos.</span></p>
                    </div>
                    <h2>Acervo listado em ordem alfabética:</h2>
                    <div>
                        <ul>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                            <li>.</li>
                        </ul>
                    </div>
                </main>

                <footer>
                    <h3>Sobre a Escola:</h3>
                    <ul>
                        <li>Ensino Fundamental 6° ao 9° ano e EJA</li>
                        <li>E-mail: fmssantos18@gmail.com</li>
                        <li>Rua: Joaquim Vidal, s/n - Rua nova - Tenente Ananias - RN</li>
                        <li>CEP: 59955-000 &#124; INEP: 24084069 &#124; CNPJ: 09582.822/0001-00</li>
                    </ul>
                    <hr>
                    <h4>&copy; - <a href="https://genilsoncavalcante.github.io/" title="Portfólio do 
                    Desenvolvedor" target="_blank"> Genilson Cavalcante</a></h4>
                </footer>

            </div>

            <script src="assets/js/scripts.js"></script>

        `;
        
    } else {
        if (senha == "") {
            alert('Por favor, digite a senha.');
        } else {
            alert("Dados Inválidos");
            window.location.href='../../index.html';
        }
    }
}
