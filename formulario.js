var cont=0;
alert('por favor utilize " . " na calculadora caso digite " , " ocorrerar um erro ')
$('#idade').blur(function(){
    if(sexoEscolhido==undefined){
        $('#erroSexo').css('display','block');
        $('#erroSexo').html('Preenchimento Obrigatório');
    }else{
        $('#erroSexo').css('display','none');
    }
    var idade = parseInt($('#idade').val());
    console.log(idade);
    var erroIdade=$('#erroIdade');
    if(idade<1){
        erroIdade.html('O valor minimo é : 1');
        erroIdade.css('display','block');  
        $('#idade').css('border','2px solid red'); 
    }else if(isNaN(idade)){
        erroIdade.html('Preenchimento Obrigatório(apenas numeros)');
        erroIdade.css('display','block');
        $('#idade').css('border','2px solid red');    
    }else if(idade>120){
        erroIdade.html('O valor máximo é : 120');
        erroIdade.css('display','block');
        $('#idade').css('border','2px solid red');    
    }else{
        erroIdade.css('display','none'); 
        $('#idade').css('border','2px solid green');
        cont++;      
    }
 })

 $('#altura').blur(function(){
    if(sexoEscolhido==undefined){
        $('#erroSexo').css('display','block');
        $('#erroSexo').html('Preenchimento Obrigatório');
    }else{
        $('#erroSexo').css('display','none');
    }
    var altura = parseFloat($('#altura').val());
    console.log(altura);
    var erroAltura=$('#erroAltura');
    if(altura<1){
        erroAltura.html('O valor minimo é : 1');
        erroAltura.css('display','block');  
        $('#altura').css('border','2px solid red'); 
    }else if(isNaN(altura)){
        erroAltura.html('Preenchimento Obrigatório(apenas numeros)');
        erroAltura.css('display','block');
        $('#altura').css('border','2px solid red');    
    }else if(altura>3){
        erroAltura.html('O valor máximo é : 3');
        erroAltura.css('display','block');
        $('#altura').css('border','2px solid red');    
    }else{
        erroAltura.css('display','none'); 
        $('#altura').css('border','2px solid green'); 
        cont++;     
    }
 })

 $('#peso').blur(function(){
    if(sexoEscolhido==undefined){
        $('#erroSexo').css('display','block');
        $('#erroSexo').html('Preenchimento Obrigatório');
    }else{
        $('#erroSexo').css('display','none');
    }
    var peso = parseFloat($('#peso').val());
    console.log(altura);
    var erroPeso=$('#erroPeso');
    if(peso<1){
        erroPeso.html('O valor minimo é : 1');
        erroPeso.css('display','block');  
        $('#peso').css('border','2px solid red'); 
    }else if(isNaN(peso)){
        erroPeso.html('Preenchimento Obrigatório(apenas numeros)');
        erroPeso.css('display','block');
        $('#peso').css('border','2px solid red');    
    }else if(peso>600){
        erroPeso.html('O valor máximo é : 600');
        erroPeso.css('display','block');
        $('#peso').css('border','2px solid red');    
    }else{
        erroPeso.css('display','none'); 
        $('#peso').css('border','2px solid green');
        cont++;      
    }
 })

var sexoEscolhido;
var atividadeFisica; 
 $('#mulher').click(function(){
     $('#homem').css('border','1px solid grey');
     sexoEscolhido=$('#mulher').val();
        $('#mulher').css('border','2px solid green');
 })
 $('#homem').click(function(){
    $('#mulher').css('border','1px solid grey');
    sexoEscolhido=$('#homem').val();
    $('#homem').css('border','2px solid green');
})

$('#sedentaria').click(function(){
    $('#moderada').css('border','1px solid grey');
    $('#intensa').css('border','1px solid grey');
    atividadeFisica=$('#sedentaria').val();
    $('#sedentaria').css('border','2px solid green');
})
$('#moderada').click(function(){
    $('#sedentaria').css('border','1px solid grey');
    $('#intensa').css('border','1px solid grey');
    atividadeFisica=$('#moderada').val();
    $('#moderada').css('border','2px solid green');
})
$('#intensa').click(function(){
    $('#moderada').css('border','1px solid grey');
    $('#sedentaria').css('border','1px solid grey');
    atividadeFisica=$('#intensa').val();
    $('#intensa').css('border','2px solid green');
})

$('#calcular').click(function(){
    if(cont<3){
        alert('Verifique se todos os dados estão corretos');
    }
    if(atividadeFisica==undefined){
        $('#erroAtividadeFisica').css('display','block');
        $('#erroAtividadeFisica').html('Preenchimento Obrigatório');
    }else{
        $('#erroAtividadeFisica').css('display','none');
    }
})

