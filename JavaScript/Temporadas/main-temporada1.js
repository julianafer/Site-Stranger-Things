const capitulos = [
    {
        temporada: '1',
        numero: 'um',
        titulo: 'O desaparecimento de Will Byers'
    },
    {
        temporada: '1',
        numero: 'dois',
        titulo: 'A estranha da Maple Street'
    },
    {
        temporada: '1',
        numero: 'três',
        titulo: 'Caramba'
    },
    {
        temporada: '1',
        numero: 'quatro',
        titulo: 'O corpo'
    },
    {
        temporada: '1',
        numero: 'cinco',
        titulo: 'A pulga e o acrobata'
    },
    {
        temporada: '1',
        numero: 'seis',
        titulo: 'O monstro'
    },
    {
        temporada: '1',
        numero: 'sete',
        titulo: 'A banheira'
    },
    {
        temporada: '1',
        numero: 'oito',
        titulo: 'De ponta-cabeça'
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
