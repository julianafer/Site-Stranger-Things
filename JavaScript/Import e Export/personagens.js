import personagens from './model-personagens.js';

function createPerson(personagens) {
    return `
<div id="div-personagens-${personagens.id}">
    <div class="div-personagens ${personagens.id}">
    <a class="position-relative" href="${personagens.link}">
        <img class="img-personagens" src="${personagens.imagem}">
    </a>
        <button type='reset' class="lixeira p-0 border-0 position-absolute me-3" onclick = "Delete(${personagens.id})" >
            <i class="fa-sharp fa-solid fa-trash-can bg-transparent p-1 pb-2 ps-2"></i>
        </button>
        <h3 class="bg-red">${personagens.nome}</h3>
        <h4 class="bg-red">${personagens.ator}</h4>
    
    </div>
</div>`
};

const PersonContent = personagens
    .map((personagens) => createPerson(personagens))
    .join('');

const PersonContainer = document.querySelector('#cards');

PersonContainer.innerHTML = PersonContent;

function Delete(id){
    const element = document.querySelector(`#div-personagens-${id}`)
    element.remove()
};

function Revert(){
    PersonContainer.innerHTML = PersonContent;
};
