const cep = document.querySelector('#cep')
cep.addEventListener('keydown', funcao)
const rua = document.querySelector('#street')
const bairro = document.querySelector('#neighborhood')
const estado = document.querySelector('#state')
const cidade = document.querySelector('#city')
const ceperrado = document.querySelector('#cepError')

async function funcao (e){
  if (e.key === 'Enter'){
    let cepAtual = document.querySelector('#cep').value
    const response = await fetch (`https://viacep.com.br/ws/${cepAtual}/json/`).catch(error =>{
      rmValues()
      console.log('AAAAAAAAAAAAAA')
    })
    const data = await fetch_To_Json(response)
    if (data.erro || cepAtual.length !== 8){
      console.log(data.erro)
      rmValues()
      
    }
    else{
      addValues(data)
    }
    
    
  }
}

async function fetch_To_Json(response){
  return await response.json()
}


function addValues(data){
   ceperrado.classList.add('hidden')
  rua.value = data.logradouro
  bairro.value = data.bairro
  estado.value = data.uf
  cidade.value = data.localidade
  
}

function rmValues(){
  ceperrado.classList.remove('hidden')
  rua.value = null
  bairro.value = null
  estado.value = null
  cidade.value = null
}