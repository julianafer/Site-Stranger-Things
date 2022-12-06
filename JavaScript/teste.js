async function search() {
    const inputSearchPerson = document.querySelector('#exampleDataList.form-control');
    const CardsContainer = document.querySelector('#cards');
    const Card = document.querySelectorAll('.div-personagens')

    const regex = /^[a-zA-Z]+\s?[a-zA-Z]+\s?[a-zA-z]*$/gm;
    // regex para só aceitar no máximo 3 palavras, sem símbolos especiais

    let h5 = document.getElementById('error')

    if (regex.test(inputSearchPerson) === True) {
        inputSearchPerson.addEventListener('input', event => {
            const inputValue = event.target.value.trim().toLowerCase()
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
    }
    else {
        error.style.display = 'block'
    }
}
