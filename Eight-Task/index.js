const input = document.createElement('input');
input.setAttribute('id', 'description');
const button = document.querySelector('button');
const form = document.querySelector('form');
form.insertBefore(input, button);

// Show the fruit description in italics on the next line
const fruit = document.getElementById('fruit-to-add');
const description = document.getElementById('description');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const fruitName = document.createTextNode(fruit.value);
  const fruitDescription = document.createTextNode(description.value);
  const fruitList = document.querySelector('.fruits');
  const newList = document.createElement('li');
  newList.appendChild(fruitName);
  const para = document.createElement('p');
  para.appendChild(fruitDescription);
  para.style.fontStyle = 'italic';
  newList.appendChild(para);
  newList.classList = 'fruit';
  fruitList.appendChild(newList);
});
// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter = document.getElementById('filter');
const fruitItems = document.getElementsByClassName('fruit');

filter.addEventListener('keyup', function (event) {
  const textInput = event.target.value.toLowerCase();

  for (let i = 0; i < fruitItems.length; i++) {
    const currentFruit = fruitItems[i].firstChild.textContent.toLowerCase();

    const fruitDes = fruitItems[i].querySelector('p')
      ? fruitItems[i].querySelector('p').textContent.toLowerCase()
      : '';

    if (currentFruit.includes(textInput) || fruitDes.includes(textInput)) {
      fruitItems[i].style.display = 'flex';
    } else {
      fruitItems[i].style.display = 'none';
    }
  }
});
