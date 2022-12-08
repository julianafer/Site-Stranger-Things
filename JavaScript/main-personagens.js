const inputSearchPerson = document.querySelector('#exampleDataList.form-control');
const CardsContainer = document.querySelector('#cards');
const Card = document.querySelectorAll('.div-personagens')

// parte do regex //

var padrao = /^[a-zA-Z]+\s?[a-zA-Z]+\s?[a-zA-Z]*$/gm;
// regex para só aceitar no máximo 3 palavras, sem símbolos especiais
function validar(input) {
    if (!padrao.test(input.value)) {
        input.setCustomValidity('Formato inválido! Tente usar somente letras sem caracteres especiais.');
    } else {
        input.setCustomValidity('');
    }
    document.getElementById('msg-erro').innerHTML = input.validationMessage;
}

inputSearchPerson.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()

    // if (inputValue === '') {
    //     document.getElementById('msg-erro').innerHTML.style.display = 'none'
    // }

    const Cards = Array.from(CardsContainer.children)

    Cards
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.add('hidden')
        });
    Cards
      .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
      .forEach(todo => {
          todo.classList.remove('hidden')
       })
})
