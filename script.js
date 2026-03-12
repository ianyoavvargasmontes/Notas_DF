const galeria = document.querySelector("#galeria");
const btnAgregar = document.querySelector("#btnAgregar");

let contador = 1;

const colores = ["red","blue","green","orange","purple","pink","cyan"];


/* EVENTO DELEGADO EN EL CONTENEDOR */
galeria.addEventListener("click", (e) => {

    if (e.target.classList.contains("item")) {

        const color = e.target.dataset.color;

        e.target.style.backgroundColor = color;

        console.log("Color aplicado:", color);

    }

});


/* CREACIÓN DINÁMICA DE CAJAS */
btnAgregar.addEventListener("click", () => {

    const nuevo = document.createElement("div");

    nuevo.className = "item";

    nuevo.innerText = "Caja " + contador;

    nuevo.style.padding = "10px";
    nuevo.style.border = "1px solid black";
    nuevo.style.cursor = "pointer";

    /* GENERAR COLOR ALEATORIO */
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    /* GUARDAR EN DATASET */
    nuevo.dataset.color = colorAleatorio;

    galeria.appendChild(nuevo);

    contador++;

});