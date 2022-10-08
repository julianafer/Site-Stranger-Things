import capitulos from './capitulos'

function createCapitulos(capitulos) {
    return `<div class="capitulos-temp1">
        <h4>Capítulo ${capitulos.numero}:</h4>
        <h4 class="ms-1 color-red">${capitulos.titulo}</h4>
    </div>`
}

const capitulosContent = capitulos
    .map((capitulos) => createCapitulos(capitulos))
    .join('');

const capitulosContainer = document.querySelector('.cap-temp');

capitulosContainer.innerHTML = capitulosContent;
