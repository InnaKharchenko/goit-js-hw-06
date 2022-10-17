let control = document.getElementById('font-size-control')
let text = document.getElementById('text')

control.addEventListener('input', (event) => {
    text.style.fontSize=`${event.currentTarget.value}px`
})