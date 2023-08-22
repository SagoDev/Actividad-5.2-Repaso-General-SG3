function getCardHTML(img, title) {
    return `
<div class="card">
    <img src="${IMAGE_URL}${img}" />
    <h3>${title}</h3>
    <a href="${API_URL_SEARCH}${encodeURIComponent(title)}" target="_blank">Ver Más</a>
</div>`;
}

/*BLOQUE 4 - Aqui está la función que se ejecuta en el bloque 2 cuando no surgen errores(showMovies)
la cual se encarga de recibir la peliculas retornadas por la función submitSearchEvent y mostrarlas.*/

function showMovies(movies) {
    // ## INICIO BLOQUE 4 ##
    debugger;
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let movie of movies) {
        container.innerHTML += getCardHTML(movie.poster_path, movie.title)
    }
    // ## FIN BLOQUE 4 ##
}

/*BLOQUE 2 - Aqui encontramos la función que es llamada en el bloque 1(submitSearchEvent) 
la que se encarga de controlar el envio de datos solicitados por el usuario donde a través 
de la función getMovies se obtienen las peliculas y con un for verifica errores, 
alerta de ellos y cuando no hay errores ejecuta la función showMovies.*/

async function submitSearchEvent(e) {
    // ## INICIO BLOQUE 2 ##
    debugger;
    e.preventDefault();
    const response = await getMovies(document.getElementById("txtSearch").value);
    if (response.status === "ok") {
        showMovies(response.data.results);
    } else {
        alert("OCURRIÓ UN ERROR");
    }
    // ## FIN BLOQUE 2 ##
}


/* BLOQUE 1 - En este bloque se realiza una escucha para el evento 'load', es decir, 
el momento cuando la página carga por completo y para cuando lo hace realiza otra escucha 
para el evento "submit",  es decir para cuando se envia el formulario, y cuando ocurre
se ejecuta la función submitSearchEvent.*/

window.addEventListener("load", function () {
    // ## INICIO BLOQUE 1 ##
    debugger;
    const formSearch = document.getElementById("formSearch");
    formSearch.addEventListener("submit", submitSearchEvent);
    // ## FIN BLOQUE 1 ##
});
