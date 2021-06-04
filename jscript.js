function nav(){
    var lanz = document.querySelector("#enlace-menu");
    lanz.addEventListener("click", despliegaMenu, "false");
}

function despliegaMenu (event){
    event.preventDefault();
    var despl = document.querySelector("#menu");
    despl.classList.toggle("menu-desplegado");
}

nav()