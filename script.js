let idiomaatual="pt"
function conversor(){
 let Html= document.getElementById("Real")
 let valorreal = Html.value 

if (idiomaatual==="pt"){
 let resultado = valorreal/5.17 
alert("O valor em dólar é: " + resultado.toFixed(2));
return
}
else{
    let result=valorreal*5.17
     alert("the value in REAL is: " + result.toFixed(2));
}
}
function mudaridioma(){
      let campoTexto = document.getElementById("Real"); 

if (idiomaatual === "pt") {
    idiomaatual = "en";
        campoTexto.placeholder = "U$0,00"; 
    document.getElementById("digite").innerHTML ="Type here";
    document.getElementById("frase").innerHTML = "What is the value in dollars?";
  } else {
    idiomaatual = "pt";
     campoTexto.placeholder = "R$0,00"; 
       document.getElementById("digite").innerHTML ="Digite Aqui"
    document.getElementById("frase").innerHTML = "Qual é o valor em Real?";
  }
}
document.getElementById("botao-calcular").addEventListener("click", conversor);
document.getElementById("tradutor").addEventListener("click", mudaridioma);
