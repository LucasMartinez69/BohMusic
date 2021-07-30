let listaDeCanciones = [
    {
        "id": 0,
        "img": "./images/songs.png",
        "nombre": "Song0",
    },
    {
        "id": 1,
        "img": "./images/songs.png",
        "nombre": "Song1",
    },
    {
        "id": 2,
        "img": "./images/songs.png",
        "nombre": "Song2",
    },
    {
        "id": 3,
        "img": "./images/songs.png",
        "nombre": "Song3",
    },
    {
        "id": 4,
        "img": "./images/songs.png",
        "nombre": "Song4",
    },
    {
        "id": 5,
        "img": "./images/songs.png",
        "nombre": "Song5",
    },
    {
        "id": 6,
        "img": "./images/songs.png",
        "nombre": "Song6",
    },

    ];

    let localizacion = ".canciones";

function imprimir (listaObjetos, localizacion){
    let mainCanciones = document.querySelector(localizacion);
    let cancion= "";
    listaObjetos.forEach(function (objeto){
        cancion += `
        <div class="song0">
            <img class="img-canciones" src= "${objeto.img}" alt="${objeto.nombre}">
            <p class="nombre-canciones">${objeto.nombre}</p>
        </div>
        <div class="song1">
            <img class="img-canciones" src= "${objeto.img}" alt="${objeto.nombre}">
            <p class="nombre-canciones">${objeto.nombre}</p>
        </div>
        <div class="song2">
            <img class="img-canciones" src= "${objeto.img}" alt="${objeto.nombre}">
            <p class="nombre-canciones">${objeto.nombre}</p>
        </div>
        <div class="song3">
            <img class="img-canciones" src= "${objeto.img}" alt="${objeto.nombre}">
            <p class="nombre-canciones">${objeto.nombre}</p>
        </div>
        <div class="song4">
            <img class="img-canciones" src= "${objeto.img}" alt="${objeto.nombre}">
            <p class="nombre-canciones">${objeto.nombre}</p>
        </div>
        <div class="song5">
            <img class="img-canciones" src= "${objeto.img}" alt="${objeto.nombre}">
            <p class="nombre-canciones">${objeto.nombre}</p>
        </div>
        <div class="song6">
            <img class="img-canciones" src= "${objeto.img}" alt="${objeto.nombre}">
            <p class="nombre-canciones">${objeto.nombre}</p>
        </div>
        `;
    });
    mainCanciones.innerHTML = cancion;
}
imprimir(listaDeCanciones, localizacion);