const inputSearchPerson = document.querySelector('#exampleDataList.form-control');
const CardsContainer = document.querySelector('#cards');
const Card = document.querySelectorAll('.div-personagens')

const regex = /^[a-zA-Z]+\s?[a-zA-Z]+\s?[a-zA-z]*$/gm;
// console.log(regex.test('millie bób brown'))

inputSearchPerson.addEventListener('input', event => {
    const inputValue = regex.test(event.target.value.trim().toLowerCase())
    console.log(inputValue)
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
