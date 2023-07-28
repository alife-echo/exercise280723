function addMovies(){
  let inGe = document.querySelector('#inGenere')
  let inTitle = document.querySelector('#inTitleMovie')
  let tbMovies = document.querySelector('#table_Movies')
  let genre = inGe.value  
  let title = inTitle.value 
 
  if(inGe == '' || inTitle == ''){
      alert('Informe os dados corretamente')
      inTitle.focus()
  }
  insertRows(tbMovies,title,genre)
  storageMovie(title,genre)
  
  inTitle.value = ''
  inGe.value = ''
}

function insertRows(table,title,genre){

  let row = table.insertRow(-1)
  let col1 = row.insertCell(0)
  let col2 = row.insertCell(1)
  let col3 = row.insertCell(2)

  col1.textContent = title
  col2.textContent = genre
  col3.innerHTML = "<input type='checkbox'>"
  let deleteAll = document.querySelector('#btnDeleteAll')
  deleteAll.className = 'button_show buttonDelete style_button'
 
}
function keyPressEnter(targetKey){
  if(targetKey.keyCode == 13){
      addMovies()
  }
}

function storageMovie(titles,genres){
  if(localStorage.getItem('filmestitulo')){
      let moviesTitles = localStorage.getItem('filmesTitulo') + ';' + titles
      let moviesGenres = localStorage.getItem('filmesGenero') + ';' + genres

      localStorage.setItem('filmesTitulo',moviesTitles)
      localStorage.setItem('filmesGenero',moviesGenres)
  }
  else{
      localStorage.setItem('filmesTitulo',titles)
      localStorage.setItem('filmesGenero',genres)
  }
}

let ckAll = document.querySelector('#ckTodos')
ckAll.addEventListener('change',()=>{
  let tbMovies = document.querySelector('#table_Movies')
  let checksDelete = tbMovies.querySelectorAll('input')

  let status = ckAll.checked

  for(let i = 1; i<checksDelete.length;i++){
      checksDelete[i].checked = status
  }
})

function removeMovies(){
  let tbMovies = document.querySelector('#table_Movies')
  let checksDelete = tbMovies.querySelectorAll('input')

  let hasSelect = false // variavel de controle

  for(let i = 1; i<checksDelete.length;i++){
      if(checksDelete[i].checked){
          hasSelect = true
          break
      }
  }
  if(!hasSelect){
      alert('Não há filmes selecionados para exclusão')
  }
  if(confirm('Confirmar exclusão dos Filmes Selecionados?')){
      localStorage.removeItem('filmesTitulo')
      localStorage.removeItem('filmesGenero')
  }

  for(j = checksDelete.length - 1; j>0; j--){
      if(checksDelete[j].checked){
          tbMovies.deleteRow(j)
      }
  }
  checksDelete[0].checked = false

}

let btDelete = document.querySelector('#btnDeleteAll')
btDelete.addEventListener('click',removeMovies)

let addMovie = document.querySelector('#btn_Add')
addMovie.addEventListener('click',addMovies)

let inGe = document.querySelector('#inGenere')
inGe.addEventListener('keypress',keyPressEnter)
