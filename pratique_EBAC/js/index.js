

const form = document.getElementById('form_camp');

const msgP = document.getElementById('msg');


form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valorA = Number(document.getElementById('campo_A').value);
    let valorB = Number(document.getElementById('campo_B').value);
    const mensagemValida = `O formulario foi validado`;
    const mensagemNegada = `O formulario foi negado`

    if(valorA < valorB){
        msgP.textContent = mensagemValida;
        document.getElementById('campo_A').value = '';
        document.getElementById('campo_B').value = '';

    } else {
        msgP.textContent = mensagemNegada;
        document.getElementById('campo_A').value = '';
        document.getElementById('campo_B').value = '';
    }
});
