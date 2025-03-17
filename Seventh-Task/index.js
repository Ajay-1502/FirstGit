const fruits = document.querySelector('.fruits');
const form = document.querySelector('form');

const fruitItems = document.querySelectorAll('.fruit');

for (let i = 0; i < fruitItems.length; i++) {
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  const text = document.createTextNode('Edit');
  editBtn.appendChild(text);
  fruitItems[i].appendChild(editBtn);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const fruitToAdd = document.getElementById('fruit-to-add');
  const newLi = document.createElement('li');
  const newLiText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newLiText);
  newLi.className = 'fruit';

  const deleteBtn = document.createElement('button');
  const deleteBtnText = document.createTextNode('x');
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className = 'delete-btn';
  newLi.appendChild(deleteBtn);

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  const text = document.createTextNode('Edit');
  editBtn.appendChild(text);
  newLi.appendChild(editBtn);

  fruits.appendChild(newLi);
});

fruits.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});
