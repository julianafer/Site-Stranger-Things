const personagens = [
    {
        id: 1,
        link: 'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Onze+(Stranger+Things)&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMLjYtNDRLNteSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRaxi_nlVqQoawSVFiXnpqUUKIRmZeenFmjtYGQGRUN0OWAAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAF',
        nome: 'Eleven/Onze',
        ator: 'Millie Bobby Brown',
        imagem: './imagens/Personagens/Eleven.jpg',
        link: 'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Onze+(Stranger+Things)&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMLjYtNDRLNteSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRaxi_nlVqQoawSVFiXnpqUUKIRmZeenFmjtYGQGRUN0OWAAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAF',
    },
    {
        id: 2,
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Mike+Wheeler&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMr6zISEm2KNSSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRaw8vpnZqQrhGampOalFO1gZAUZDnvJOAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAP',
        nome: 'Mike Wheeler',
        ator: 'Finn Wolfhard',
        imagem: './imagens/Personagens/Mike.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Mike+Wheeler&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMr6zISEm2KNSSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRaw8vpnZqQrhGampOalFO1gZAUZDnvJOAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAP',
    },
    {
        id: 3,
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Will+Byers&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMqjIotCgzT9KSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRaxc4Zk5OQpOlUDODlZGAE74h-NMAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAH',
        nome: 'Will Byers',
        ator: 'Noah Schnapp',
        imagem: './imagens/Personagens/Will.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Will+Byers&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMqjIotCgzT9KSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRaxc4Zk5OQpOlUDODlZGAE74h-NMAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAH',
    },
    {
        id: 4,
        nome: 'Dustin Henderson',
        ator: 'Gaten Matarazzo',
        imagem: './imagens/Personagens/Dustin.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Dustin+Henderson&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzTMMCnMKCwoStOSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRawCLqXFJZl5Ch6peSlAgfy8HayMAB9Aiu9SAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAV',
    },
    {
        id: 5,
        nome: 'Lucas Sainclair',
        ator: 'Caleb McLaughlin',
        imagem: './imagens/Personagens/Lucas.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Lucas+Sinclair&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMSyszqswxTtKSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRax8PqXJicUKwZl5yTmJmUU7WBkBLJtnG1AAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAd',
    },
    {
        id: 6,
        nome: 'Max Mayfield',
        ator: 'Sadie Sink',
        imagem: './imagens/Personagens/Max.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Max+Mayfield&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMNrUsNqhIy9OSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRaw8vokVCr6JlWmZqTkpO1gZAR1DpqlOAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAD',
    },
    {
        id: 7,
        nome: 'Nancy Wheeler',
        ator: 'Natalia Dyer',
        imagem: './imagens/Personagens/Nancy.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Nancy+Wheeler&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzTMiC83jK8sLtSSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRay8fol5yZUK4RmpqTmpRTtYGQGXQhKATwAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAN',
    },
    {
        id: 8,
        nome: 'Steve Harrington',
        ator: 'Joe Keery',
        imagem: './imagens/Personagens/Steve.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Steve+Harrington&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzTMMCnMKI8vM9OSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRawCwSWpZakKHolFRZl56SX5eTtYGQECO3lXUgAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAJ',
    },
    {
        id: 9,
        nome: 'Robin Buckley',
        ator: 'Maya Hawke',
        imagem: './imagens/Personagens/Robin.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Robin+Buckley&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMSyszKsstytKSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRay8QflJmXkKTqXJ2TmplTtYGQHDNbkiTwAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAR',
    },
    {
        id: 10,
        nome: 'Jonathan Byers',
        ator: 'Charlie Heaton',
        imagem: './imagens/Personagens/Jonathan.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Jonathan+Byers&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMqjLIMa_IMNOSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRax8Xvl5iSUZiXkKTpVAgR2sjAApXGyRUAAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAZ',
    },
    {
        id: 11,
        nome: 'Erica Sainclair',
        ator: 'Priah Ferguson',
        imagem: './imagens/Personagens/Erica.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Erica+Sinclair&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRML84psTTKNtGSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRax8rkWZyYkKwZl5yTmJmUU7WBkBHXdYsFAAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAn',
    },
    {
        id: 12,
        nome: 'Eddie Munson',
        ator: 'Joseph Quinn',
        imagem: './imagens/Personagens/Eddie.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=eddie+munson&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzQsqEorzy7MNdCSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRaw8qSkpmakKuaV5xfl5O1gZAR2F3ctOAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxA9',
    },
    {
        id: 13,
        nome: 'Jim Hopper',
        ator: 'David Harbour',
        imagem: './imagens/Personagens/Hopper.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Jim+Hopper&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMy00zzEnKzdGSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRaxcXpm5Ch75BQWpRTtYGQFAwYEcTAAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAX',
    },
    {
        id: 14,
        nome: 'Joyce Byers',
        ator: 'Winona Ryder',
        imagem: './imagens/Personagens/Joyce.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=joyce+byers&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRML84pMUg2N9aSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRazcWfmVyakKSZVA3g5WRgCR3lelTQAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAr',
    },
    {
        id: 15,
        nome: 'Murray Bauman',
        ator: 'Brett Gelman',
        imagem: './imagens/Personagens/Murray.jpg',
        link:'https://www.google.com/search?rlz=1C1CHBF_pt-BRBR919BR919&cs=1&sxsrf=ALiCzsZopkh_JtT5CQjX3zBPLJwE-bHOLw:1657500795534&q=Murray+Bauman&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQ2zMkzr1Ti1U_XNzRMibfINSvPqtCSyU620i8pA6L4gqL89KLEXKvkjMSixOSS1KLiRay8vqVFRYmVCk6JpbmJeTtYGQFkug8ATwAAAA&sa=X&ved=2ahUKEwiQgobRz-_4AhXeFbkGHb_OCTIQ9OUBegQIDxAx',
    }
]

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
}
const PersonContent = personagens
    .map((personagens) => createPerson(personagens))
    .join('');

const PersonContainer = document.querySelector('#cards');

PersonContainer.innerHTML = PersonContent;

function Delete(id){
    const element = document.querySelector(`#div-personagens-${id}`)
    element.remove()
}

function Revert(){
    PersonContainer.innerHTML = PersonContent;
}
