const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('button', function(e){
    let formEValido = false
    e.preventDefault()

    const nomeBeneficiario = document.getElementById('nome_beneficiario')
    const numeroContaBeneficiario = document.getElementById('numero_conta')
    const valorDeposito = document.getElementById('valor_deposito')
    const mensagemSucesso = `Montante de: ${valorDeposito.Value} depositado para o cliente: ${nomeBeneficiario.Value} - conta ${numeroContaBeneficiario.Value} `
    

    formEValido = validaNome(nomeBeneficiario.Value)
    if (formEValido){
        document.querySelector('.sucess_msg').innerHTML = mensagemSucesso;
        
        valorDeposito.Value = '';
        nomeBeneficiario.Value = '';
        numeroContaBeneficiario.Value = '';

    }else{
        alert("O nome nao esta completo");
    }
})

console.log(form);
