const Elemente = () => {

  const url = `https://stranger-things-api.mridul.tech/10`
  fetch(url)
  .then( Response => Response.json())
  .then(person => { console.log(person)})

}
Elemente()