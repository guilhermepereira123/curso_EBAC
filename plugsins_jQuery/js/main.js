$(document).ready(function(){
    $('#carousel_img').slick({
        autoplay: true
    });

    $('.menu_hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('+000 000 000 000');

    $('form').validate({
        rules : {
            nome : {
                required: true
            },
            email : {
                required: true,
                email : true
            },
            telefone : {
                required: true
            },
            mensagem :{
                required: true
            },
            veiculo_interesse:{
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insera o seu nome',
            telefone: 'Por favor, insera o seu telefone',
            email: 'Por favor, insera um e-mail valido'
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

    $('.lista_veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo_interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})