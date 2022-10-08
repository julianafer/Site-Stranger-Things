import capitulos from './capitulos'

function createCapitulos(capitulos) {
    return `${capitulos}`
}

const capitulosContent = capitulos
    .map((capitulos) => createCapitulos(capitulos))
    .join('');

const capitulosContainer = document.querySelector('.cap-temp');

capitulosContainer.innerHTML = capitulosContent;
