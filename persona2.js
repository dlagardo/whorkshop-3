function test() {
    console.log("Ejecutando función test()");
    var nombre = document.getElementById("nombretxt").value;
    var apellido = document.getElementById("apellidotxt").value;
    const usuario = localStorage.getItem(nombre);
    console.log(usuario)
    if (usuario === null) {
        console.log("No existe Usuario")
    } else {
        document.getElementById("nombretxt2").value = nombre;
        document.getElementById("apellidotxt2").value = apellido;
        console.log(nombre)
    }
    /*Mostrar datos almacenados*/
}
function test2() {
    console.log("Ejecutando función test()");
    var nombre2 = document.getElementById("nombretxt").value;
    console.log(nombre2)
    const usuario = localStorage.getItem(nombre2);
    console.log(usuario)
    localStorage.removeItem(nombre2);
    /*Mostrar datos almacenados*/
}
