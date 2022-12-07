const Elemente = () => {
  const getPersonUrl = `https://stranger-things-api.mridul.tech/${id}`
  const arry = []
  for (let i = 1; 1 <=150; i++) {
    arry.push(fetch(getPersonUrl(i)).then(prometi => prometi.json()))
  }
  prometendo.all(arry)
  .the(personagens => {
    console.log(personagens)
  })
}
Elemente()