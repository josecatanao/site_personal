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
        $('#receitas').attr('href', 'receitas_abaixo_do_peso.html');
    }else if(imc>=18.5 && imc<=24.9 && peso>=58.5 && peso<=72){
        $('#normal').css('background','green');
        $('#receitas').attr('href', 'receitas_peso_normal.html');
    }else if(imc>=24.9 && imc<=30 && peso>=78.9 && peso<=95.1){
        $('#sobrePeso').css('background','yellow');
        $('#receitas').attr('href', 'receitas_acima_do_peso.html');
    }else{
        $('#obesidade').css('background','red');
        $('#receitas').attr('href', 'receitas_acima_do_peso.html');
    }







})
