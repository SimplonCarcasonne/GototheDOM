// Exercice one

//method 1
var paragraph = document.getElementById('addText');
paragraph.textContent = "Hello world";

// method 3
var paragraph = document.getElementById('addText');
paragraph.innerHTML = "Hello world";


// Exercice 2

//method 2
var removeId = document.getElementById('remove');
removeId.remove();

// Exercice 3

//method 1
var changeColor = document.getElementById('changeColor');
changeColor.style.backgroundColor = 'red';

//method 2
var changeColor = document.getElementById('changeColor');
changeColor.classList.remove('changeColor');
changeColor.classList.add('backgroundRed');

//Exercice 4

//method 1

var addChildren = document.getElementById('addChildren');
var child;

for (var i = 0; i < 4; i++) {
  child = document.createElement('p');
  console.log(child);
  addChildren.appendChild(child);
}

//method 2

for (var i = 0; i < 4; i++) {
 addChildren.appendChild(document.createElement('p'));
}

//method 3

for (var i = 0; i < 4; i++) {
  addChildren.innerHTML += "<p>Plop</p>";
}
