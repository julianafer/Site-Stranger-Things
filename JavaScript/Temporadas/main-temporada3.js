const capitulos = [
    {
        temporada: '3',
        numero: 'um',
        titulo: 'Está me ouvindo, Suzie?'
    },
    {
        temporada: '3',
        numero: 'dois',
        titulo: 'O caso dos ratos'
    },
    {
        temporada: '3',
        numero: 'três',
        titulo: 'A salva-vidas desaparecida'
    },
    {
        temporada: '3',
        numero: 'quatro',
        titulo: 'A prova da sauna'
    },
    {
        temporada: '3',
        numero: 'cinco',
        titulo: 'Os devorados'
    },
    {
        temporada: '3',
        numero: 'seis',
        titulo: 'E pluribus unum'
    },
    {
        temporada: '3',
        numero: 'sete',
        titulo: 'A mordida'
    },
    {
        temporada: '3',
        numero: 'oito',
        titulo: 'A batalha de Startcourt'
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
