//js para la página
function Js() {
  // var this.para = document.querySelector('p');
    this.edad;
    this.nombre;
    this.sexo;
    this.contexto=this;
    this.setEdad=function(edad){
      this.edad=edad;
    };
    this.getEdad=function() {
      return this.edad;
    };
    this.setNombre=function(nombre){
      this.nombre=nombre;
    };
    this.getNombre=function(){
      return this.nombre;
    };
    this.setSexo=function(sexo){
      this.sexo=sexo;
    };
    this.getSexo=function() {
      return this.sexo;
    };
    // this.__Alumno=function (edad,nombre,sexo){
    //   this.edad=edad;
    //   this.nombre=nombre;
    //   this.sexo=sexo;
    // };
    this.toString = function() {
      return("\n Edad "+this.getEdad()+", Nombre "+this.getNombre()+" , Sexo "+this.getSexo());
    };
    this.showName = function() {
      //alert("Este es tu nombre weon: "+getNombre());// mi hermano como el metodo no esta definido en el contexto local, por q estas en el contexto del metodo mas no de la clase
      alert("Este es tu nombre weon: "+this.getNombre());
      this.user = document.forms[0].id="cilantro";
      alert("este es el del form, creo -_- "+user);
      return false;// con false sunpende el evento , con tru continua
    };

    this.setPara = function(p) {//este setter es para recibir lo que
      //se va a usar dentro de la variable - meta parametro
        this.para = document.querySelector(p);
    }
    this.getPara = function() {
        return this.para;
    }
}

//aqui comienza el merecumbe
Js.prototype.updateName = function() {
    console.log("dentro del updateName");
    var name = prompt('enter new name: ');
    this.setNombre(name);

    this.para.textContent = 'Player 1: ' + name;
};
Js.prototype.eventEtiqueta = function() {
  local =this;
  this.para.addEventListener('click',function(){
    var name = prompt('enter new name: ');
    local.setNombre(name);
    console.log(local.getNombre());
    this.textContent = 'Player 1: ' + name;
  });
}
Js.prototype.variableCambio = function(p) {
  var texto = prompt('cambia el texto: ');
  this.set
  this.para.textContent = 'Texto cambiado: '+texto;
}
