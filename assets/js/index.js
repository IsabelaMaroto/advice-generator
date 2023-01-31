const showAnswer = document.querySelector('#advice')
const showId = document.querySelector('#id')
const button = document.getElementById('button')

async function getAPI(){
    //pegar API
    const api = await fetch('https://api.adviceslip.com/advice')
    const answer= await  api.json()
    console.log(answer)
    showId.textContent = `${answer.slip.id}`
    showAnswer.textContent = ` “${answer.slip.advice}”`
}

function Listener() {
      //escutar botao
    button.addEventListener("click", async () => {
        console.log('clicou')
        getAPI()
        Show()
    })
}

function Show(answer) {
     //exibir resposta
    return () => {
        showId.textContent = `${answer.slip.id}`
        showAnswer.textContent = ` “${answer.slip.advice}”`
    }
}

getAPI()
Listener()