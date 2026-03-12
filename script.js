const galeria = document.querySelector("#galeria");
const btnAgregar = document.querySelector("#btnAgregar");

let contador = 1;

/* Lista de colores posibles */
const colores = ["red", "blue", "green", "orange", "purple", "pink", "cyan"];

/* EVENTO DELEGADO EN EL CONTENEDOR */
galeria.addEventListener("click", function(evento){

    /* Verificamos si el click fue en un item */
    if(evento.target.classList.contains("item")){

        /* Leemos el dataset */
        const color = evento.target.dataset.color;

        /* Cambiamos el color */
        evento.target.style.backgroundColor = color;

        console.log("Color aplicado:", color);
    }

});


/* CREACIÓN DINÁMICA DE ELEMENTOS */
btnAgregar.addEventListener("click", function(){

    const nuevo = document.createElement("div");

    nuevo.className = "item";

    nuevo.innerText = "Caja " + contador;

    nuevo.style.padding = "10px";
    nuevo.style.border = "1px solid black";

    /* Generar color aleatorio */
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    /* Guardar color en dataset */
    nuevo.dataset.color = colorAleatorio;

    galeria.appendChild(nuevo);

    contador++;

});