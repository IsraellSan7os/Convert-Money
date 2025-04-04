function converter() {
    // Pegando os valores dos inputs
    let real = parseFloat(document.getElementById("real").value);
    let dolar = parseFloat(document.getElementById("dolar").value);

    // Verificando se os valores são válidos
    if (isNaN(real) || isNaN(dolar) || real <= 0 || dolar <= 0) {
        document.getElementById("resultado").innerText = "Insira valores válidos!";
        return;
    }

    // Calculando a conversão
    let convertido = real / dolar;

    // Exibindo o resultado
    document.getElementById("resultado").innerText = `Valor convertido: $${convertido.toFixed(2)}`;
}
