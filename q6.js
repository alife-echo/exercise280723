let inText = document.querySelector('#nameFuncionario')
let btnSubmitText = document.querySelector('#btnSubmit')
let result = document.querySelector('#outResult')
let array = []
let last = ''
let conc = ''
btnSubmitText.addEventListener('click',()=>{
    let values =  inText.value.split(' ')
    if(inText.value === ''){
        alert('Insira os dados corretamente')
    }
    else{
        for(let i = 0; i< values.length;i++){
            array.push(values[i].charAt(0))
            last = values[values.length - 1]
        }
        array.pop()
        for(let j = 0; j<array.length;j++){
            conc+= array[j]
        }
    
        result.innerHTML = conc.toLowerCase() + last + '@empresa.com.br'
    }
   
}) 