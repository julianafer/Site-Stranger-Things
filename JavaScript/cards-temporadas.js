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
    return `<a class="text-decoration-none" href="html/temporada${temporadas.temporada}.html">
        <div id="temporada${temporadas.temporada}" class="div-temporadas">
            <h1 class="h1-temporadas">${temporadas.temporada}ª</h1>
            <h2 class="h2-temporadas">Temporadas</h2>
        </div>
    </a>`
}

const temporadasContent = temporadas
    .map((temporadas) => createTemporadas(temporadas))
    .join('');

const temporadasContainer = document.querySelector('.cards-temporadas');

temporadasContainer.innerHTML = temporadasContent;
