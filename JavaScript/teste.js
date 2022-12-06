document.querySelector('input').oninvalid = function() {  
    // remove mensagens de erro padrão
    this.setCustomValidity("");
    // faz a validação novamente
    if (!this.validity.valid) {
        // se estiver inválido, coloca a mensagem
        this.setCustomValidity("Nome está inválido!");
     }
 };