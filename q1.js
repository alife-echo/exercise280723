function calcularPreco() {
  let inputQuilo = document.getElementById('in_quilo')
  let inputConsumo = document.getElementById('in_consumo')
  let quilo = Number(inputQuilo.value)
  let consumo = Number(inputConsumo.value)
  let porQuilo = quilo / 1000
  let calcConsumo = consumo * porQuilo
  document.getElementById('outValorpagar').innerHTML =
    '<h3> Valor a pagar R$: ' + calcConsumo + '</h3>'
}
var button = document.getElementById('btnCalcular')
button.addEventListener('click', calcularPreco)
