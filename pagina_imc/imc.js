$('#calcular').click(function(){
    if(cont<3){
        alert('Verifique se todos os dados estão corretos');
    }
    if(cont==0){
        alert('Verifique se todos os dados estão corretos');
    }
    if(atividadeFisica==undefined){
        $('#erroAtividadeFisica').css('display','block');
        $('#erroAtividadeFisica').html('Preenchimento Obrigatório');
    }else{
        $('#erroAtividadeFisica').css('display','none');
    }

    var idade = parseInt($('#idade').val());
    var altura =parseFloat($('#altura').val());
    var peso= parseFloat($('#peso').val());
    /*
    $('#magreza').css('','');
    $('#normal').css('','');
    $('#sobrePeso').css('','');
    $('#obesidade').css('','');
    */


    var imc = peso/Math.pow(altura,2);
    $('#imagem').css('display','none');
    $('#resultado').css('display','block');
    console.log('imc :'+imc);
    if(imc<18.5 && peso < 53.5){
        $('#magreza').css('background','red');
    }else if(imc>=16.7 && imc<=24.9 && peso>=53.5 && peso<=72){
        $('#normal').css('background','green');
    }else if(imc>=24.9 && imc<=30 && peso>=72 && peso<=86.7){
        $('#sobrePeso').css('background','yellow');
    }else if(imc>30. && peso >=86.7){
        $('#obesidade').css('background','red');
    }







})
