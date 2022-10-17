let input = document.getElementById('validation-input')
const reqLength = input.getAttribute('data-length')

input.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length != reqLength ) {
        input.className = 'invalid'
    } else {
        input.className = 'valid'
    }
})