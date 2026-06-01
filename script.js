function calcularImpacto() {
    // Pegando os elementos do HTML
    const irrigacao = document.getElementById('chkIrrigacao');
    const solar = document.getElementById('chkSolar');
    const floresta = document.getElementById('chkFloresta');
    
    const resultadoDiv = document.getElementById('resultado');
    const textoResultado = document.getElementById('textoResultado');
    const barraProgresso = document.getElementById('progressoSustentavel');

    let pontuacaoTotal = 0;

    // Verificando quais opções foram marcadas e somando os valores
    if (irrigacao.checked) {
        pontuacaoTotal += parseInt(irrigacao.value);
    }
    if (solar.checked) {
        pontuacaoTotal += parseInt(solar.value);
    }
    if (floresta.checked) {
        pontuacaoTotal += parseInt(floresta.value);
    }

    // Se a soma passar de 100 por conta dos valores, limitamos a 100%
    if (pontuacaoTotal > 100) {
        pontuacaoTotal = 100;
    }

    // Mostra a área de resultado removendo a classe 'hidden'
    resultadoDiv.classList.remove('hidden');

    // Atualiza a barra de progresso visualmente
    barraProgresso.style.width = pontuacaoTotal + '%';

    // Personaliza a mensagem baseada na nota de sustentabilidade
    if (pontuacaoTotal === 0) {
        textoResultado.innerHTML = "⚠️ <strong>Sua fazenda está em risco!</strong> Sem práticas sustentáveis, os recursos podem se esgotar. Tente adotar alguma medida!";
        barraProgresso.style.backgroundColor = "#e53935"; // Vermelho
    } else if (pontuacaoTotal < 70) {
        textoResultado.innerHTML = "🌱 <strong>Bom começo!</strong> Você já iniciou a transição ecológica. Adicione mais práticas para alcançar o equilíbrio ideal!";
        barraProgresso.style.backgroundColor = "#ffb300"; // Amarelo/Laranja
    } else {
        textoResultado.innerHTML = "🚜💚 <strong>Parabéns! Fazenda Nota 10!</strong> Você provou que é possível ter um Agro Forte e um Futuro Sustentável lado a lado.";
        barraProgresso.style.backgroundColor = "#4caf50"; // Verde
    }
}