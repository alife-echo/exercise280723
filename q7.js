let itens = []
function trocarItem() {
  let inPizza = document.querySelector('#inPizza')
  let inBebida = document.querySelector('#in_Bebida')

  if (rbPizza.checked) {
    inBebida.className = 'oculta'
    inPizza.className = 'exibe'
  } else {
    inPizza.className = 'oculta'
    inBebida.className = 'exibe'
  }
}
function mostrarNumSabores() {
  if (rbPizza.checked) {
    let pizza = document.querySelector('#inPizza').value
    let num = pizza == 'media' ? 2 : pizza == 'grande' ? 3 : 4
    inDetalhes.placeholder = 'Até ' + num + ' Sabores'
  }
}
function adicionarItem() {
  let inPizza = document.querySelector('#inPizza')
  let inBebida = document.querySelector('#in_Bebida')
  let outPedido = document.querySelector('#outPedido')
  let detalhes = inDetalhes.value
  if (rbPizza.checked) {
    let num = inPizza.selectedIndex // obtem numero do item selecionado
    console.log(num)
    let produto = inPizza.options[num].text // texto do item selecionado
    console.log(produto, typeof produto)
    itens.push(produto + '(' + detalhes + ')')
  } else {
    let num = inBebida.selectedIndex // obtem numero do item selecionado
    let produto = inBebida.options[num].text // texto do item selecionado
    itens.push(produto + '(' + detalhes + ')')
  }
  outPedido.textContent = itens.join('\n')
  limparCampos()
}
function limparCampos() {
  let inPizza = document.querySelector('#inPizza')
  let inBebida = document.querySelector('#in_Bebida')
  rbPizza.checked = true
  inBebida.className = 'oculta'
  inPizza.className = 'exibe'
  inPizza.selectedIndex = 0
  inDetalhes.value = ''
  rbPizza.focus()
}

let btAdicionar = document.querySelector('#btAdicionar')
btAdicionar.addEventListener('click', adicionarItem)
let inDetalhes = document.querySelector('#inDetalhes')
inDetalhes.addEventListener('focus', mostrarNumSabores)
let rbPizza = document.querySelector('#rbPizza')
rbPizza.addEventListener('change', trocarItem)
let rbBebida = document.querySelector('#rbBebida')
rbBebida.addEventListener('change', trocarItem)

inDetalhes.addEventListener('blur', () => {
  inDetalhes.placeholder = ''
})
inDetalhes.addEventListener('keypress', tecla => {
  if (tecla.keyCode == 13) {
    adicionarItem()
  }
})
