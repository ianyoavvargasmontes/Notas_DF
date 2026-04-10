const galeria = document.querySelector("#galeria");
const btnAgregar = document.querySelector("#btnAgregar");

let contador = 1;

const colores = ["red","blue","green","orange","purple","pink","cyan"];


/* EVENTO DELEGADO EN LA GALERIA */
galeria.addEventListener("click", (e) => {

    if(e.target.classList.contains("item")){

        const color = e.target.dataset.color;

        /* cambiar color de la galeria */
        galeria.style.backgroundColor = color;

    }

});


/* CREAR NUEVAS CAJAS */
btnAgregar.addEventListener("click", () => {

    const nuevo = document.createElement("div");

    nuevo.className = "item";
    nuevo.innerText = "Caja " + contador;

    nuevo.style.padding = "10px";
    nuevo.style.border = "1px solid black";
    nuevo.style.cursor = "pointer";

    /* generar color aleatorio */
    const colorAleatorio = colores[Math.floor(Math.random()*colores.length)];

    /* guardar color */
    nuevo.dataset.color = colorAleatorio;

    /* aplicar color a la caja */
    nuevo.style.backgroundColor = colorAleatorio;

    galeria.appendChild(nuevo);

    contador++;

});