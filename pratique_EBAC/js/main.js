$(document).ready(function(){

    $('#telefone').mask('+000 000 000 000');
    $('#number_ident').mask('000.000.000')
    $('#location').mask('0000-000')

    $('form').validate({
        rules: {
            name:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone : {
                required: true
            },
            number_ident : {
                required: true
            },
            address :{
                required: true
            },
            location:{
                required:true
            }
        },
        messages: {
            name: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira um e-mail valido',
            number_ident: 'Por favor, insira NIF valido',
            address: 'Por favor, insira seu endereço',
            location: 'Por favor, insira CEP valido',
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert('Existem ' + camposIncorretos + ' campos incorretos')
            } 
        }
    })
})