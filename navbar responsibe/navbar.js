function accion() {
    console.log("El boton funciona");
    var ancla = document.
    getElementsByClassName("nav-enlace");
    for(var i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle
        ("desaparecer");
    }
}
