// Премиум форма — шаги

const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const indicators = [
  document.getElementById('step1-indicator'),
  document.getElementById('step2-indicator'),
  document.getElementById('step3-indicator'),
  document.getElementById('step4-indicator')
];

let currentStep = 0;

function showStep(index) {
  steps.forEach(step => step.style.display = 'none');
  steps[index].style.display = 'block';

  indicators.forEach(ind => ind.classList.remove('active'));
  indicators[index].classList.add('active');
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentStep++;
    if (currentStep > steps.length - 1) currentStep = steps.length - 1;
    showStep(currentStep);
  });
});

// Показать первый шаг
showStep(0);
// Плавная анимация перехода между шагами
function showStep(index) {
  steps.forEach((step, i) => {
    step.style.display = i === index ? 'block' : 'none';
    step.style.opacity = i === index ? '1' : '0';
    step.style.transition = 'opacity 0.6s ease';
  });

  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === index);
  });
}
