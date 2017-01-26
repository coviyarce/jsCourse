//js para la página

var para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName() {
  var name = promt('enter new name: ');
  para.textContent =  'Player 1: '+name;
}
