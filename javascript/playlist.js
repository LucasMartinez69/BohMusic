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
    let cancion= ""; /*se genera un string vacío para que toda la información
     se junte en esta caja y no se generen otras*/ 
    listaObjetos.forEach(function (objeto){
        cancion += `
        <div class="song">
            <div class="song-features">
                <img class="img-canciones" src= "${objeto.img}" alt="${objeto.nombre}">
                <p class="nombre-canciones">${objeto.nombre}</p>
            </div>
        </div>
        `;
        /*console.log(cancion)*/
    });
    mainCanciones.innerHTML = cancion; /*traduce el código metiod en la variable canción, a código html*/
}
imprimir(listaDeCanciones, localizacion);