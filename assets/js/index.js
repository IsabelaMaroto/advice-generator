async function getAPI(){
    const showAnswer = document.querySelector('#advice')
    const showId = document.querySelector('#id')
    const button = document.getElementById('button')

    //pegar API
    try{
        const api = await fetch('https://api.adviceslip.com/advice')
        const answer= await  api.json()
        console.log(answer)
    

    //escutar botao
    button.addEventListener("click", async () => {
        console.log('clicou')
        showAdvice()
    })

    //exibir resposta
    const showAdvice = () => {
        showId.textContent = `${answer.slip.id}`
        showAnswer.textContent = ` “${answer.slip.advice}”`
    }

    }catch{
        console.log("mensagem de erro")
    }
}

getAPI()