const form = document.getElementById('form-deposito')

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    const nome = document.getElementById('name')
    const conta = document.getElementById('conta').value
    const valor = document.getElementById('valor').value
    
    if(validaNome(nome.value)){
        res.innerHTML = `Nome: ${nome.value} <br> Conta: ${conta} <br> Valor: ${valor}` 
    }else {
        alert('[ERRO]')
    } 
})