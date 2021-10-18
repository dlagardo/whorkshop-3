class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
let x = 0;
const personas = [];
let persona1 = '';

function test() {
    console.log("Ejecutando función test()");
    var nombre = document.getElementById("nombretxt").value;
    var apellido = document.getElementById("apellidotxt").value;
    localStorage.setItem(nombre, apellido);
    /*Mostrar datos almacenados*/
    document.getElementById("nombretxt").innerHTML = nombre;
    document.getElementById("apellidotxt").innerHTML = apellido;
}