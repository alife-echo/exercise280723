function calcularRaiz() {
    // cria una referência aos elenentos da página
    var inNunero = document.getElementById("inNunero");
    var outResposta = document.getElementById("outResposta");
    var nunero = Number(inNunero.value); // obtén conteúdo do canpo inNunero
    // se nâo preencheu ou Not-a-Nunber (NaN)
    if (nunero == 0 || isNaN(nunero)) {
    aLert("Inforne un nunero válido..."); // exibe alerta
    inNunero.focus();	// posiciona no canpo inNunero
    return;	// retorna
    }
    var raiz = Math.sqrt(nunero); // calcula raiz quadrada do núnero
    // se valor da variável raiz igual a este valor arredondado para baixo...
    if (raiz == Math.floor(raiz)) {
    outResposta.textContent = "Raiz: " + raiz; // mostra a raiz
    } else {
    // senão, exibe mensagem indicando que não há raiz exata
    outResposta.textContent = "Não há raiz exata para " + numero;
    }
    }
    // cria referência ao elemento btExibir e registra evento que irá carregar function var btExibir = document.getElementById(''btExibir");
    btExibir.addEventListener("click", calcularRaiz);