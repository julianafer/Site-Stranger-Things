const temporadas = [
    {
        temporada: '1'
    },
    {
        temporada: '2'
    },
    {
        temporada: '3'
    },
    {
        temporada: '4'
    }
]

function createTemporadas(temporadas) {
    return `<a class="text-decoration-none" href="html/temporadas.html?${temporadas.temporada}">
        <div id="temporada${temporadas.temporada}" class="div-temporadas d-flex flex-column justify-content-center align-items-center">
            <h1 class="h1-temporadas mb-0">${temporadas.temporada}ª</h1>
            <h2 class="h2-temporadas mb-0">Temporada</h2>
        </div>
    </a>`
}

const temporadasContent = temporadas
    .map((temporadas) => createTemporadas(temporadas))
    .join('');

const temporadasContainer = document.querySelector('.cards-temporadas');

temporadasContainer.innerHTML = temporadasContent;
