//contadores
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')
let mil = document.querySelector('#mil')
//botoes
let start = document.querySelector('#start')
let pause = document.querySelector('#pause')
let resume = document.querySelector('#resume')
let reload = document.querySelector('#reload')
//variaveis do js
let interval 
let minutejs = 0
let secondsjs = 0
let miljs = 0
let paused = false

//botao de iniciar
start.addEventListener('click', startTimer)

function startTimer(){
    interval = setInterval(() => {

        if (!paused){
            miljs += 1
        } if (miljs == 100){
            secondsjs++
            miljs = 0
        } if (secondsjs == 60){
            minutejs++
            secondsjs = 0
        }

        min.textContent = formatTime(minutejs)
        sec.textContent = formatTime(secondsjs)
        mil.textContent = formatTimeMil(miljs)
    }, 10)
    paused = false
    start.style.display = 'none'
    pause.style.display = 'block'
}

//ajeitando caracteres do time
function formatTime(time){
    if (time < 10){
        return `0${time}`
    } else {
        return time
    }
}

function formatTimeMil(timeMil){
    if (timeMil < 10){
        return `0${timeMil}`
    } else {
        return timeMil
    }
}

//botao de pausar
pause.addEventListener('click', pauseTimer)

function pauseTimer(){
    paused = true
    pause.style.display = 'none'
    resume.style.display = 'block'
}

//botao de continuar
resume.addEventListener('click', resumeTimer)

function resumeTimer(){
    paused = false
    resume.style.display = 'none'
    pause.style.display = 'block'
}

//botao de reiniciar tempo
reload.addEventListener('click', reloadTimer)

function reloadTimer(){
   
    clearInterval(interval)

    minutejs = 0
    secondsjs = 0
    miljs = 0

    min.textContent = '00'
    sec.textContent = '00'
    mil.textContent = '00'

    start.style.display = 'block'
    pause.style.display = 'none'
    resume.style.display = 'none'
}