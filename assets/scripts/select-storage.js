// Quando o HTML estiver completamente carregado, configura a persistência do select
window.addEventListener('DOMContentLoaded', setupSelectPersistence);

function setupSelectPersistence() {
  const select = document.getElementById('selectTitle');

  // Se o elemento não existir na página, interrompe a execução
  if (!select) return;

  // Recupera o valor salvo anteriormente (se existir)
  loadSelectValue(select);

  // Quando o usuário muda a opção do select, salva o novo valor
  select.addEventListener('change', handleSelectChange);
}

function handleSelectChange(event) {
  const select = event.target;

  // Salva o valor atual do select no localStorage
  localStorage.setItem('selectValue', select.value);
}

function loadSelectValue(select) {
  // Busca o valor salvo anteriormente
  const savedValue = localStorage.getItem('selectValue');

  // Se existir valor salvo, aplica no select
  if (savedValue) {
    select.value = savedValue;
  }
}