import personagens from "./personagens";



function CreatePerson(person){
   const creat = `<div class="div-personagens">
   <a
       href="${person.link}">
       <img class="img-personagens" src="${person.imagem}">
       <h3 class="bg-red">${person.n_personagem}</h3>
       <h4 class="bg-red">${person.n_ator}</h4>
   </a>
</div>`;

    const local_person = document.querySelector('.main-sections');
    local_person.insertAdjacentHTML('after', creat);
}