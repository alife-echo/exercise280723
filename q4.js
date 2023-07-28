let btnAdd = document.querySelector('#btnAdd')
let armazenarPacientes = []
btnAdd.addEventListener('click', function () {
  let inText = document.querySelector('#inputText')
  let text = inText.value
  let outList = document.querySelector('#outLista')
  let conc = ''
  if (text == '') {
    alert('Informe o nome do paciente')
    inText.focus()
    return
  }
  armazenarPacientes.push(text)
  for (let i = 0; i < armazenarPacientes.length; i++) {
    conc += i + 1 + '.' + armazenarPacientes[i] + '\n'
  }
  outList.textContent = conc
  inText.value = ''
  inText.focus()
})
// unshift = Adiciona um elemento no inicio do vetor
// shift = Remove o primeiro elemento do vetor
//pop = remove o ultimo elemento do vetor
// push = adiciona um elemento no final do vetor
let botaoUrgencia = document.querySelector('#btnUrgency')
botaoUrgencia.addEventListener('click', function () {
  let inText = document.querySelector('#inputText')
  let text = inText.value
  let outList = document.querySelector('#outLista')
  let conc = ''
  if (text == '') {
    alert('Informe o nome do paciente')
    inText.focus()
    return
  }
  armazenarPacientes.unshift(text)

  for (let i = 0; i < armazenarPacientes.length; i++) {
    conc += i + 1 + '.' + armazenarPacientes[i] + '\n'
  }
  outList.textContent = conc
  inText.value = ''
  inText.focus()
})
let btnMeet = document.querySelector('#btnMeet')
let inText = document.querySelector('#inputText')
btnMeet.addEventListener('click', function () {
  if (armazenarPacientes.length == 0) {
    alert('Não ha pacientes na lista de espera')
    inText.focus()
    return
  }
  let outAtendimento = document.querySelector('#outAtendimento')
  let outList = document.querySelector('#outLista')
  let atender = armazenarPacientes.shift()
  outAtendimento.textContent = atender
  let conc = ''
  for (let i = 0; i < armazenarPacientes.length; i++) {
    conc += i + 1 + '.' + armazenarPacientes[i] + '\n'
  }
  outList.textContent = conc
})
