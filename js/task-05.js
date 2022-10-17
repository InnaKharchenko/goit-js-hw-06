
let output = document.getElementById('name-output')
let input = document.getElementById('name-input')

input.addEventListener('input', (event) => {
    let text = event.currentTarget.value
    if (text === "") {
        text = "Anonymous"
    }
    output.textContent = text
})