<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Заказать сайт — премиум форма</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/sites-900/style.css">
</head>

<body>

<header>
  <h1>Заказать сайт</h1>
  <p>Премиальная форма заявки — как у американских студий</p>
</header>

<section id="order">
  <h2>Техническое задание</h2>

  <!-- ПРОГРЕСС-БАР -->
  <div class="progress-bar">
    <div class="progress-step" id="step1-indicator">1. Контакты</div>
    <div class="progress-step" id="step2-indicator">2. Параметры</div>
    <div class="progress-step" id="step3-indicator">3. ТЗ</div>
    <div class="progress-step" id="step4-indicator">4. Отправка</div>
  </div>

  <!-- ФОРМА -->
  <form id="orderForm" class="order-form" action="mailto:79996362202@ya.ru" method="post" enctype="text/plain">

    <!-- ШАГ 1 -->
    <div class="form-step" id="step1">
      <label>Ваше имя:</label>
      <input type="text" name="Имя" required>

      <label>Телефон:</label>
      <input type="text" name="Телефон" required>

      <button type="button" class="btn next-btn">Далее</button>
    </div>

    <!-- ШАГ 2 -->
    <div class="form-step" id="step2">
      <label>Сколько экранов нужно?</label>
      <select name="Количество экранов">
        <option value="1 экран">1 экран — 1000 ₽</option>
        <option value="2–3 экрана">2–3 экрана — 2100 ₽</option>
        <option value="4–6 экранов">4–6 экранов — 3700 ₽</option>
      </select>

      <label>Нужен домен?</label>
      <select name="Домен">
        <option value="Не нужен">Не нужен</option>
        <option value="Нужен">Нужен (+500 ₽)</option>
      </select>

      <label>Нужен логотип?</label>
      <select name="Логотип">
        <option value="Да">Да (бесплатно)</option>
        <option value="Нет">Нет</option>
      </select>

      <button type="button" class="btn next-btn">Далее</button>
    </div>

    <!-- ШАГ 3 -->
    <div class="form-step" id="step3">
      <label>Техническое задание:</label>
      <textarea name="ТЗ" rows="6" placeholder="Опишите сайт: структура, цвета, примеры, ссылки..."></textarea>

      <button type="button" class="btn next-btn">Далее</button>
    </div>

    <!-- ШАГ 4 -->
    <div class="form-step" id="step4">
      <h3>Проверьте данные и отправьте заявку</h3>

      <button type="submit" class="btn" style="margin-top:25px;">
        Отправить заявку
      </button>

      <p style="margin-top:20px;">
        Или напишите напрямую:  
        <a href="https://wa.me/79996362202">WhatsApp</a> · 
        <a href="https://t.me/+79996362202">Telegram</a>
      </p>
    </div>

  </form>
</section>

<footer>
  <div class="footer-bottom">
    <p>© 2026 Создание сайтов — Roman</p>
  </div>
</footer>

<script src="/sites-900/order.js"></script>

</body>
</html>
