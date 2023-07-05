function buscarCep(){
    var cep = document.getElementById('cep').value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";

    fetch(url)
    .then(respanse => respanse.json())
    .then(data => {
        if(data.erro){
            document.getElementById(resultado).textContent = "CEP não encontrado!";

        }else{
            document.getElementById(resultado).innerHTML = 
            "<b>Cidade:</b>" + data.cep +"<br>";
            "<b>logradouro:</b>" + data.logradouro +"<br>";
            "<b>bairro:</b>" + data.bairro +"<br>";
            "<b>Cidade:</b>" + data.localidade +"<br>";
            "<b>estado:</b>" + data.uf +"<br>";
        
        
        }




    }).catch(error => alert(error))
}