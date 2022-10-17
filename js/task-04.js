
let span = document.getElementById('value')
let counter = 0

let div = document.getElementById("counter")
let buttonInc = div.querySelector('button[data-action="increment"]')
let buttonDec = div.querySelector('button[data-action="decrement"]')

buttonInc.addEventListener('click', () => {
    counter += 1
    span.textContent = counter
})

buttonDec.addEventListener('click', () => {
    counter -= 1
    span.textContent = counter
} )