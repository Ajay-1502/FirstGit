const subHeading = document.createElement('h3');
const text = document.createTextNode('Buy high quality organic fruits online');

subHeading.appendChild(text);

const divs = document.getElementsByTagName('div');
divs[0].appendChild(subHeading);

subHeading.style.fontStyle = 'italic';

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
const fruits = document.querySelector('.fruits');

para.appendChild(paraText);
divs[1].insertBefore(para, fruits);

para.setAttribute('id', 'fruits-total');
