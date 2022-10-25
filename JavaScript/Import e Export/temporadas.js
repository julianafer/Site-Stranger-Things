import temporadasSettings from "./model.js";

// function getId(id) {
//     element.id = idStr;
// }

const params = new URLSearchParams(window.location.search)

const temporadaId = window.location.href[window.location.href.length-1];
console.log() ;

const temporada = temporadasSettings.find((temporada) => temporada.id == temporadaId);

document.title = temporada.nome;

document.querySelector('picture').innerHTML = `
    <source media="print" srcset="${temporada.imagem.print}">
    <source media="(max-width: 600px)" srcset="${temporada.imagem.mobile}">
    <img class="img-ilustrativa w-100" src="${temporada.imagem.print}" alt="${temporada.nome}">
`;

resumo.innerHTML = temporada.resumo;

document.querySelector('.section-temporadas').innerHTML = `
<img class="img-temp" src="${temporada.imagem.poster}">
<div>
    <h1 class="capitulos1 mb-5">Capítulos</h1>
    <div class="cap-temp" id='cap-temp'>
       ${createCapitulos()}
    </div>
</div>
`

function createCapituloCard(capitulos) {
    return `<div class="capitulos-temp${capitulos.temporada}">
        <h4>Capítulo ${capitulos.numero}:</h4>
        <h4 class="ms-2 color-red">${capitulos.titulo}</h4>
    </div>`
}

function createCapitulos() {
    const capitulosContent = temporada.capitulos
        .map((capitulos) => createCapituloCard(capitulos))
        .join('');

    return capitulosContent;
}