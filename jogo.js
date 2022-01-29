let altura
let largura
let vidas = 1
let tempo = 15

let criaMosquitoTempo = 1500

let receberParanmetro = window.location.search

receberParanmetro = receberParanmetro.replace('?','')

switch(receberParanmetro) {
    case 'normal':
        criaMosquitoTempo = 1500
        break

    case 'dificil':
        criaMosquitoTempo = 1000
        break

    case 'chucknorris':
        criaMosquitoTempo = 750
        break
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


let cronometro = setInterval(function() {
        tempo -= 1

        if(tempo < 0) {
            clearInterval(cronometro)
            clearInterval(criaMosquito)
            window.location.href = 'vitoria.html'
        } else{
            document.getElementById('cronometro').innerHTML = tempo
        }
        
    }, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
       document.getElementById('mosquito').remove()

      
       if( vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
       } else {
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas ++
       }
    }

    let posicaoX = (Math.random() *  largura) - 90
    let posicaoY = (Math.random() * altura) - 90
    
    parseInt(posicaoX)
    parseInt(posicaoY)
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(parseInt(posicaoX), parseInt(posicaoY))
    
    //criando elemento HTML de forma programatica
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    
    mosquito.id = 'mosquito'

    mosquito.onclick = function () {
        //document.getElementById('mosquito').remove()
        this.remove()
    }
    document.body.appendChild(mosquito)
    
}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    //console.log(classe)
    switch(classe) {
        case 0: 
        return 'mosquito_1'
        
        case 1: 
        return 'mosquito_2'
        
        case 2: 
        return 'mosquito_3'
        
    }   
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0: 
        return 'ladoA'
        
        case 1: 
        return 'ladoB'
    }
}
