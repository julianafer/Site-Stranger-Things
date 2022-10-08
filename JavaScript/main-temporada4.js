const capitulos = [
    {
        temporada: '4',
        numero: 'um',
        titulo: 'O Clube Hellfire'
    },
    {
        temporada: '4',
        numero: 'dois',
        titulo: 'A maldição de Vecna'
    },
    {
        temporada: '4',
        numero: 'três',
        titulo: 'O monstro e a super-heroína'
    },
    {
        temporada: '4',
        numero: 'quatro',
        titulo: 'Querido Billy'
    },
    {
        temporada: '4',
        numero: 'cinco',
        titulo: 'Projeto Nina'
    },
    {
        temporada: '4',
        numero: 'seis',
        titulo: 'Mergulho'
    },
    {
        temporada: '4',
        numero: 'sete',
        titulo: 'O massacre no laboratório de Hawkins'
    },
    {
        temporada: '4',
        numero: 'oito',
        titulo: 'Papai'
    },
    {
        temporada: '4',
        numero: 'nove',
        titulo: 'E o plano de Onze'
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
