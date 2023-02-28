console.log(document.title);
document.title = 'Tittle Test';
console.log(document.title);
console.log(document.body);
var h1 = document.getElementsByTagName('h1');

h1[0].innerHTML = 'Test';
console.log(h1);

var button = document.getElementById('button');
console.log(button);

button.addEventListener('click' , message);

function message(){
    alert('This is my Message')
}