// Inicialização de variáveis e configuração inicial
let count = 1;
document.getElementById("radio1").checked = true;
let intervalId = setInterval(nextImage, 3500);

// Função para avançar para a próxima imagem
function nextImage() {
  count++;
  if (count > 4) count = 1;
  document.getElementById("radio" + count).checked = true;
}

// Função para executar ação ao clicar em um item
function acao(x) {
  count = x;
  resetInterval();
}

// Função para resetar o intervalo do slideshow
function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextImage, 3500);
}