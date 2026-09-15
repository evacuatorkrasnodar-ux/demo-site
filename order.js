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
  steps.forEach((step, i) => {
    if (i === index) {
      step.style.display = 'block';
      step.style.opacity = '1';
    } else {
      step.style.display = 'none';
      step.style.opacity = '0';
    }
  });

  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === index);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentStep++;
    if (currentStep > steps.length - 1) {
      currentStep = steps.length - 1;
    }
    showStep(currentStep);
  });
});

// Показать первый шаг
showStep(0);
