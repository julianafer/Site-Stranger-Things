const inputSearchPerson = document.querySelector('#exampleDataList.form-control');
const CardsContainer = document.querySelector('#cards');
const Card = document.querySelectorAll('.div-personagens')



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