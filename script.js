var elementoMisterioso = parseInt(Math.random() * 11);
function Chutar() {
  var efeitofinal = document.getElementById("resultado");
  var numero = parseInt(document.getElementById("valor").value);

  if (numero == elementoMisterioso) {
    efeitofinal.innerHTML = "você acertou";
  } else if (numero > 10 || numero < 0) {
    efeitofinal.innerHTML = "Digitar Número de 0 a 10";
  } else {
    efeitofinal.innerHTML = "Errou, Número Correto é " + elementoMisterioso;
  }
}
