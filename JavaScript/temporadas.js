const temporadas = [
    {
        id: 1,
        nome: "temporada 1",
        resumo: "<p class=\"text-justify\">O início da série se passa em 1983, em Hawkins, Indiana. O jovem Will Byers (Noah Schnapp) desparece e seus amigos, Mike (Finn Wolfhard), Lucas (Caleb McLaughlin) e Dustin (Gaten Matarazzo) decidem procurá-lo com a sua família e a polícia da cidade. Com isso, eles se deparam com uma série de eventos sobrenaturais e é aí que eles começam a entender um pouco o Mundo Invertido.</p><p class=\"text-justify\">Nancy (Natalia Dyer), que é a irmã de Mike, Steve (Joe Keery), namorado de Nancy, e Jonathan (Charlie Heaton), irmão de Will, investigam por conta própria o que pode ter acontecido com o menino e Barb (Shannon Purser), a melhor amiga de Nancy que é morta por um Demogorgon no início da história.</p><p class=\"text-justify\">Nesse meio-tempo, conhecemos Eleven (Millie Bobby Brown), uma garota que tem superpoderes e não sabe muito sobre seu passado ou conviver em sociedade. No final, eles salvam Will, graças a um sacrifício de Eleven, mas os problemas dos protagonistas e a ligação do menino com o Mundo Invertido estão longe de acabarem.</p>",
        imagem: {
            print: "../imagens/Temporadas/Temporada-1.png",
            mobile: "../imagens/Temporadas/1temporada_500px.png",
            poster: "../imagens/Posters/Temporada-1.jpg"
        },
        capitulos: [
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
    }
]

const params = new URLSearchParams(window.location.search)

const temporadaId = params.get('temporada') ?? 1;

const temporada = temporadas.find((temporada) => temporada.id == temporadaId);

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
        <h4 class="ms-1 color-red">${capitulos.titulo}</h4>
    </div>`
}

function createCapitulos() {
    const capitulosContent = temporada.capitulos
        .map((capitulos) => createCapituloCard(capitulos))
        .join('');

    return capitulosContent;
}