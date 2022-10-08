const capitulos = [
    {
        temporada: '2',
        numero: 'um',
        titulo: 'Mad Max'
    },
    {
        temporada: '2',
        numero: 'dois',
        titulo: 'Gostusura ou travessura, aberração'
    },
    {
        temporada: '2',
        numero: 'três',
        titulo: 'O girino'
    },
    {
        temporada: '2',
        numero: 'quatro',
        titulo: 'Will, o sábio'
    },
    {
        temporada: '2',
        numero: 'cinco',
        titulo: 'Dig Dug'
    },
    {
        temporada: '2',
        numero: 'seis',
        titulo: 'O espião'
    },
    {
        temporada: '2',
        numero: 'sete',
        titulo: 'A irmã perdida'
    },
    {
        temporada: '2',
        numero: 'oito',
        titulo: 'O Devorador de Mentes'
    },
    {
        temporada: '2',
        numero: 'nove',
        titulo: 'O portal'
    }
]

function createCapitulos(capitulos) {
    return `<div class="capitulos-temp${capitulos.temporada}">
        <h4>Capítulo ${capitulos.numero}:</h4>
        <h4 class="ms-1 color-red">${capitulos.titulo}</h4>
    </div>`
}

const capitulosContent = capitulos
    .map((capitulos) => createCapitulos(capitulos))
    .join('');

const capitulosContainer = document.querySelector('.cap-temp');

capitulosContainer.innerHTML = capitulosContent;
