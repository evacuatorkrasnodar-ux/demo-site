const modalOverlay = document.getElementById('modal-overlay');
const modalOrder = document.getElementById('modal-order');
const modalClose = document.getElementById('modal-close');
const operatorTyping = document.getElementById('operator-typing');
const operatorStatus = document.getElementById('operator-status');

const orderBtn = document.getElementById('openModal');

// Открытие модалки
orderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modalOverlay.style.display = 'block';
  modalOrder.style.display = 'block';

  operatorTyping.style.display = 'block';
  operatorStatus.textContent = 'Печатает...';

  setTimeout(() => {
    operatorTyping.style.display = 'none';
    operatorStatus.textContent = 'Онлайн';
  }, 2000);
});

// Закрытие
modalClose.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
  modalOrder.style.display = 'none';
});

modalOverlay.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
  modalOrder.style.display = 'none';
});
