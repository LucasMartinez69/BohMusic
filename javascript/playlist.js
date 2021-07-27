let listaDeCanciones = [
    {
        "id": 0,
        "img": "./images/songs.png",
        "nombre": "Chicken Veggi Salad",
    },
    {
        "id": 1,
        "img": "./images/songs.png",
        "nombre": "Chicken Veggi Salad",
    },
    {
        "id": 2,
        "img": "./images/songs.png",
        "nombre": "Chicken Veggi Salad",
    },
    {
        "id": 3,
        "img": "./images/songs.png",
        "nombre": "Chicken Veggi Salad",
    },
    {
        "id": 4,
        "img": "./images/songs.png",
        "nombre": "Chicken Veggi Salad",
    },
    {
        "id": 5,
        "img": "./images/songs.png",
        "nombre": "Chicken Veggi Salad",
    },
    {
        "id": 6,
        "img": "./images/songs.png",
        "nombre": "Chicken Veggi Salad",
    },

    ];

    let localizacion = ".canciones";

function imprimir (listaDeCanciones, localizacion){
    let mainCanciones = document.querySelector(localizacion);
    let cancion= "";
    listaObjetos.forEach(function (objeto){
        cancion += `
        <div class="plato-individual">
            <div class="img-plato">
                <img class="plato-comida" src= "${objeto.img}" alt="${objeto.nombre}">
            </div>
            <div class="plato-contenido">
                <h2 class="nombre-plato">${objeto.nombre}</h2>
                <h3 class="precio-plato"><span>${objeto.precio}</span> €</h3>
                <p class="descripcion-plato">${objeto.descripcion}</p>
            </div>
            <div class="nombreYcontador">
                <div class="contador">
                    <button class="menos" onclick="quitarPlato(this, ${objeto.id})" >
                        <h1 class="signo-">-</h1>
                    </button>
    
                    <input class="numeroContador" value=${objeto.cantidad}></input>
    
                    <button class="mas" onclick="añadirPlato(this, ${objeto.id})">
                        <h2 class="signo+">+</h2>
                    </button>
                </div>
            </div>
        </div>
        `;
    });
    mainPlatos.innerHTML = plato;
}
imprimir(cartaDePlatos, localizacion);