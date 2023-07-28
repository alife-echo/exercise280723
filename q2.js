function calcularRaiz() {
    
    var inNunero = document.getElementById("inNunero");
    var outResposta = document.getElementById("outResposta");
    var nunero = Number(inNunero.value); 
    
    if (nunero == 0 || isNaN(nunero)) {
    aLert("Inforne un nunero válido..."); 
    inNunero.focus();	
    return;	
    }
    var raiz = Math.sqrt(nunero); 
    
    if (raiz == Math.floor(raiz)) {
    outResposta.textContent = "Raiz: " + raiz; 
    } else {
    
    outResposta.textContent = "Não há raiz exata para " + nunero;
    }
    }
    btExibir.addEventListener("click", calcularRaiz);