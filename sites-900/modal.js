const overlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal-order');
const closeBtn = document.getElementById('modal-close');
const orderBtn = document.getElementById('openModal');

// Открытие модалки
orderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.style.display = 'block';
  modal.style.display = 'block';

  // Анимация оператора
  const typing = document.getElementById('operator-typing');
  const status = document.getElementById('operator-status');

  typing.style.display = 'block';
  status.textContent = 'Печатает...';

  setTimeout(() => {
    typing.style.display = 'none';
    status.textContent = 'Онлайн';
  }, 2000);
});

// Закрытие по крестику
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  modal.style.display = 'none';
});

// Закрытие по клику на фон
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  modal.style.display = 'none';
});
