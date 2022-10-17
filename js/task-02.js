const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const target = document.getElementById('ingredients')
const newChildren = []

ingredients.forEach(ingredient => {
  const element = document.createElement('li')
  element.textContent = ingredient
  element.className = 'item'
  newChildren.push(element)
})

target.append(...newChildren)
