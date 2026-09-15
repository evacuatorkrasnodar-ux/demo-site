const overlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal-order');
const closeBtn = document.getElementById('modal-close');
const orderBtn = document.getElementById('openModal');

// Открытие модалки
orderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.style.display = 'block';
  modal.style.display = 'block';
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
