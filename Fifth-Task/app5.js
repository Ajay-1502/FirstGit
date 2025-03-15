// i) QuerySelector is used to grab only single element
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';

// ii) QuerySelectorAll is used to grab all elements of class/tag
const fruitItems = document.querySelectorAll('.fruit');

for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.backgroundColor = 'white';
  fruitItems[i].style.margin = '10px';
  fruitItems[i].style.padding = '10px';
  fruitItems[i].style.borderRadius = '5px';
}

const oddFruits = document.querySelectorAll('.fruit:nth-child(odd)');

for (let i = 0; i < oddFruits.length; i++) {
  oddFruits[i].style.backgroundColor = 'lightgray';
}

// Write answer to the questions asked below:

const headingBasket = document.querySelector('#basket-heading');
headingBasket.style.color = 'brown';

const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');

for (let i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = 'brown';
  evenFruitItems[i].style.color = 'white';
}
