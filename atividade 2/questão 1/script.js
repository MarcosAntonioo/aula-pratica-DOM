const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const soma = document.getElementById("botao");

soma.addEventListener("click", () => {
    
   if(valor1.value >= 2 && valor1.value <= 10 && valor2.value >= 2 && valor2.value <= 10){
    var resultado = Number(valor1.value) + Number(valor2.value)
    document.getElementById("resultado").textContent = resultado
   } else{
    document.getElementById("resultado").textContent = "Por favor, digite um número maior ou igual a 2 e menor ou igual a 10."
   }
});