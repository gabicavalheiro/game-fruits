const outFrutas = document.querySelector("#outFrutas") //para id usa#
const outOk = document.querySelector("#outOk") //para id usa#
const outErro = document.querySelector("#outErro") //para id usa#

const imgMaca = document.querySelector("#imgMaca")
const imgLaranja = document.querySelector("#imgLaranja")
const imgKiwi = document.querySelector("#imgKiwi")
const imgManga = document.querySelector("#imgManga")
const imgUva = document.querySelector("#imgUva")

const divJogo = document.querySelector("#divJogo")

const btVerificar = document.querySelector("#btVerificar")
const btJogarNovamente = document.querySelector("#btJogarNovamente")

let numMaca;
let numLaranjas;
let numKiwis;
let numMangas;
let numUvas;

//load : quando a página for regarregada
window.addEventListener("load", () => {
    numMaca = Math.ceil(Math.random() * 5)
    numLaranjas = Math.ceil(Math.random() * 5)
    numKiwis = Math.ceil(Math.random() * 5)
    numMangas = Math.ceil(Math.random() * 5)
    numUvas = Math.ceil(Math.random() * 5)
    //random gera um numero aleatorio nesse caso até 5 e o ceil arredonda

    outFrutas.innerText = `Maçãs: ${numMaca}, Laranjas: ${numLaranjas}, Kiwis: ${numKiwis}, Mangas: ${numMangas}, Uvas: ${numUvas}`

})

const novaFruta = (fruta) => {
    const figura = document.createElement("img")
    //para inserir a imagem da fruta modificando propriedades desse elemento
    figura.src = fruta + ".jpg"
    figura.alt = "Fruta: " + fruta
    //indica o local da página que sera renderizado
    divJogo.append(figura)
}


imgMaca.addEventListener("click", () => novaFruta("maca"))
imgLaranja.addEventListener("click", () => novaFruta("laranja"))
imgKiwi.addEventListener("click", () => novaFruta("kiwi"))
imgManga.addEventListener("click", () => novaFruta("manga"))
imgUva.addEventListener("click", () => novaFruta("uva"))

btVerificar.addEventListener("click", () => {
    const frutas = divJogo.querySelectorAll("img")

    let jogoMaca = 0
    let jogoLaranja = 0
    let jogoKiwi = 0
    let jogoManga = 0
    let jogoUva = 0


    //No for (const fruta of frutas)
    //0 uva 1 laranja 2 maca 3 manga 4 uva; percorre os itens

    for (const fruta of frutas) {
        if (fruta.alt.includes("maca")) {
            jogoMaca++
        } else if (fruta.alt.includes("laranja")) {
            jogoLaranja++
        } else if (fruta.alt.includes("kiwi")) {
            jogoKiwi++
        } else if (fruta.alt.includes("manga")) {
            jogoManga++
        } else if (fruta.alt.includes("uva")) {
            jogoUva++
        }
    }

    if (numMaca == jogoMaca && numLaranjas == jogoLaranja &&
        numKiwis == jogoKiwi && numMangas == jogoManga &&
        numUvas == jogoUva){
           outOk.className = "display-2 text-primary d-inline"
        } else{
            outErro.className = "display-4 text-danger d-inline"
        }


        //desabilita o verificar
        btVerificar.disabled = true
        btJogarNovamente.classList.remove("d-none")
        btJogarNovamente.classList.add("d-inline")

})

btJogarNovamente.addEventListener("click", () =>{
    window.location.reload()
})

//target retorna sobre qual elemento ocorreu este evento
divJogo.addEventListener("click", (e) =>{
    //console.log(e.target)
    e.target.remove()
})
