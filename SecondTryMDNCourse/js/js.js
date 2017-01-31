//js para la página
function Js() {
    this.para;// esta es la manera como se declaran las variables,
    //sin importar el tipo, ya que el tipo, se asigna luego ;)

    this.setPara = function(p) {//este setter es para recibir lo que
      //se va a usar dentro de la variable
        this.para = document.querySelector(p);
    }
    this.getPara = function() {
        return this.para;
    }
}
Js.prototype.updateName = function() {
    console.log("dentro del updateName");
    var name = prompt('enter new name: ');
    this.para.textContent = 'Player 1: ' + name;
};
