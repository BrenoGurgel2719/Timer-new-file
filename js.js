//Função a se chamado para relógio digital

function relogio() {
    const relogio = document.querySelector(".relogio")
    const tempo = new Date()

    relogio.innerHTML = tempo.toLocaleString("pb-br", {
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    })
}

setInterval(relogio, 1000)

//Cronômetro regressivo

const tempo = new Date()
tempo.setDate(tempo.getDate()+1)
const regressivo = document.querySelector(".regres")

function Cronômetro(){
    const hoje = new Date()
    const diferençaT = tempo.getTime() - hoje.getTime()

    if (diferençaT < 0){
        regressivo.innerHTML="Tempo encerrado"
         regressivo.classList.add("encerrado")
    } else {

    const horas = String(Math.floor(diferençaT/(1000*60*60))).padStart(2,"0")
    const minutos = String(Math.floor(diferençaT % (1000*60*60)/ (1000*60))).padStart(2,"0")
    const segundos = String(Math.floor(diferençaT % (1000*60) / (1000))).padStart(2,"0")

    

    regressivo.innerHTML=`${horas}:${minutos}:${segundos}`

    }
}

setInterval(Cronômetro, 1000)


