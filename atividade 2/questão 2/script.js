function toUpperCase(){
    var nome = document.getElementById("nome");
    document.getElementById("maiusculo").innerHTML = nome.value.toUpperCase();
}

function maisDez(){
    var idade = document.getElementById("idade").value;
    var idadeSoma = parseInt(idade) + 10
    document.getElementById("somaIdade").innerHTML = "Daqui a 10 anos você terá " + idadeSoma + " anos"
}