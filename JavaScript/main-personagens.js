import {personagens} from './personagens.js';


let ID = 4;
let CONFIRMATION_REMOVE_PERSON = undefined;

function RollPerson() {
    const persons = JSON.parse(localStorage.getItem('dataset-person'));
    const arrayPerson = persons;
    for (const person of persons){
        CreatePerson(person);
    };

    localStorage.setItem('dataset-person', JSON.stringify(arrayPerson));
}

function removePerson(id){
    document.querySelector(`#id-${id}`).remove();

    removeInPersonagens(id);
}

function removeInPersonagens(id){
    const arrayPerson = JSON.parse(localStorage.getItem('dataset-person'));

    array.forEach( (item, index, arr) => {
        if(item.id === id){
            arr.splice(index, 1);
        }
    })

    localStorage.setItem('dataset-person', JSON.stringify(arrayPerson));
}

function CreatePerson(person){
   const creat = `<div class="div-personagens">
   <a
       href="${person.link}">
       <img class="img-personagens" src="${person.imagem}">
       <h3 class="bg-red">${person.n_personagem}</h3>
       <h4 class="bg-red">${person.n_ator}</h4>
       <button  type= "button" id="id-${person.id}">X</button>
   </a>
</div>`;

    const local_person = document.querySelector('.main-sections');
    local_person.insertAdjacentHTML('after', creat);
}

function CreatingPerson(name){
    const arrayPersons = JSON.parse(localStorage.getItem('dataset-persons'));

    const person = {
        id: ID,
        Name: name
    }
    arrayPersons.push(person);

    ID = ID + 1;

    localStorage.setItem('dataset-persons', JSON.stringify(arrayPersons));
    CreatePerson(person);

    console.log(personagens);

}
document.querySelector('#btn-secondary').addEventListener('click', function(){
    const form = document.querySelector('form-pesquisa');
    const formData = new FormData(form);

    const Name = formData.get('name');

    document.querySelector('#name').value = '';
    CreatingPerson(Name);
})

document.querySelector('#btn-secondary').addEventListener('click', function(){
    removePerson(CONFIRMATION_REMOVE_PERSON);

})

RollPerson();

window.removePerson = removePerson;
