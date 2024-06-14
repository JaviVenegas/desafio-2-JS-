
// Part 1

const imagen =document.querySelector("#img")

imagen.addEventListener("click", () =>{
    imagen.classList.toggle ("border")
})

// Part 2
const sticker1 = document.querySelector("#amount1")
const sticker2 = document.querySelector("#amount2")
const sticker3 = document.querySelector("#amount3")
const mesj = document.querySelector("#menssaje")
const btn2 = document.querySelector("#btn")

btn2.addEventListener("click", () => {
    const cant1 = parseInt(sticker1.value) || 0
    const cant2 = parseInt(sticker2.value) || 0
    const cant3 = parseInt(sticker3.value) || 0
    const total = cant1 + cant2 + cant3

    if (total <= 10) {
        mesj.innerHTML = `Llevas ${total} Stickers`
    } else {
        mesj.innerHTML = "¡Llevas Demasiados Stickers!"
    }
})

// Part 3


const digit1 = document.querySelector("#digit1")
const digit2 = document.querySelector("#digit2")
const digit3 = document.querySelector("#digit3")
const btn3 = document.querySelector("#btn3")
const response3 = document.querySelector("#message3")

btn3.addEventListener("click", () => {
    const value1 = parseInt(digit1.value)
    const value2 = parseInt(digit2.value) 
    const value3 = parseInt(digit3.value) 

    if (value1===9&&value2===1&&value3===1) {
        response3.innerHTML = "Password 1 Correcto"
    } else if (value1===7&&value2===1&&value3===4) {
        response3.innerHTML = "Password 2 Correcto"
    } else { 
        response3.innerHTML = "Password Incorrecto"
    }
})
