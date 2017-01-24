function Alumno(){
  this.edad;
  this.nombre;
  this.sexo;
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
  this.__Alumno=function (edad,nombre,sexo){
    this.edad=edad;
    this.nombre=nombre;
    this.sexo=sexo;
  };
  this.toString = function() {
    return("\n Edad "+this.getEdad()+", Nombre "+this.getNombre()+" , Sexo "+this.getSexo());
  };
}

Alumno.prototype.toString2 = function () {
  return this.toString();
}
