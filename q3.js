var numContas = 0
var valTotal = 0
var resposta = ''

function registrarConta() {
  var inputConta = document.getElementById('inConta')
  var inputValor = document.getElementById('inValor')
  var outLista = document.getElementById('outListaContas')
  var outTotal = document.getElementById('outTotal')
  var conta = inputConta.value
  var valor = Number(inputValor.value)

  // verificação para ver se os valores foram preenchidos corretamente
  if (conta == '' || isNaN(valor) || valor == 0) {
    alert('Informe os dados corretamente')
    inputConta.focus()
    return
  }
  numContas++
  valTotal = valor + valTotal
  resposta = resposta + conta + ' - R$:' + valor.toFixed(2) + '\n'
  outLista.textContent = resposta + '-----------------'
  outTotal.textContent =
    numContas + 'Conta(s) - Total R$:' + valTotal.toFixed(2)
  //LIMPA OS CAMPOS
  inputConta.value = ''
  inputValor.value = ''
  inputConta.focus()
}

var button = document.getElementById('btnRegistrar')
button.addEventListener('click', registrarConta)
