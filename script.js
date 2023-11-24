function calcularRaizesQuadraticas(a, b, c) {
    let delta = b * b - 4 * a * c;
    let raizes = {};
  
    if (delta > 0) {
      raizes.x1 = (-b + Math.sqrt(delta)) / (2 * a);
      raizes.x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("tipoRaizes").innerText = "Δ > 0 possui duas raízes reais diferentes";
    } else if (delta === 0) {
      raizes.x1 = -b / (2 * a);
      raizes.x2 = raizes.x1; // Mesma raiz para delta = 0
      document.getElementById("tipoRaizes").innerText = "Δ = 0 possui duas raízes reais iguais";
    } else {
      document.getElementById("tipoRaizes").innerText = "Δ < 0 não possui raízes reais";
    }
  
    document.getElementById("delta").innerText = delta;
    document.getElementById("x1").innerText = raizes.x1;
    document.getElementById("x2").innerText = raizes.x2;
  }
  
  function calcular() {
    let a = parseFloat(document.getElementById("inputA").value);
    let b = parseFloat(document.getElementById("inputB").value);
    let c = parseFloat(document.getElementById("inputC").value);
  
    calcularRaizesQuadraticas(a, b, c);
  }
  