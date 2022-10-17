function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let button = document.querySelector('.change-color')
let span = document.querySelector('.color')
let body = document.querySelector('body')

button.addEventListener('click', () => {
  let color = getRandomHexColor()
  span.textContent = color
  body.style.backgroundColor = color
})
