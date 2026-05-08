<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fashion Hub</title>
  
  <!-- Подключение шрифтов и стилей -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="impulse.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css">
  
  <!-- AOS для анимации -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  <!-- GSAP для анимаций -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
</head>
<body>

  <!-- Хедер -->
  <header class="glass-header">
    <div class="container">
      <nav class="hologram-nav">
        <a href="#collections"><i class="las la-tshirt"></i> Коллекции</a>
        <a href="#trends"><i class="las la-chart-line"></i> Тренды</a>
        <a href="#philosophy"><i class="las la-star"></i> Философия</a>
        <a href="#contact"><i class="las la-lock"></i> Контакты</a>
        <a href="регестрация.html"><i class="las la-user"></i> Вход</a>
      </nav>

    </div>
  </header>

  <!-- Герой-секция -->
  <section id="hero">
    <div class="cyber-gradient"></div>
    <div class="hero-content">
      <h1 class="cyber-glitch" data-text="FASHION REBORN">FASHION REBORN</h1>
      <canvas id="fabricCanvas"></canvas>
      <div class="scroll-hint"><div class="scroll-line"></div></div>
    </div>
  </section>

  <main>
   <!-- Коллекции -->
<section id="collections">
  <div class="container">
    <h2>Ателье дизайнеров</h2>
    <p>Эксклюзивные капсульные коллекции от ведущих домов моды</p>
    <div class="grid">
      <div class="card">
        <img src="img/1701662860-1701594559-img_8724.webp" alt="Авангардная линия">
        <h3>Architectural Shapes</h3>
        <p>Концептуальные силуэты от Balenciaga</p>
        <div class="designer-tag">Demna Gvasalia</div>
      </div>
      <div class="card">
        <img src="img/f4d41c5680e02b144179300c3534df2b7372 (1).jpg" alt="Вечернее платье">
        <h3>Haute Couture</h3>
        <p>Ручная вышивка и редкие материалы от PRADA</p>
        <div class="designer-tag">Maria Grazia Chiuri</div>
      </div>
    </div>
  </div>
</section>

 

    <!-- Тренды -->
    <section id="trends">
      <div class="container">
        <h2>Главные тренды</h2>
        <div class="grid">
          <article class="card">
            <h3>Устойчивая мода</h3>
            <p>Эко-материалы и этичное производство</p>
          </article>
          <article class="card">
            <h3>Ультрафиолет</h3>
            <p>Яркие акценты в цвете года</p>
          </article>
        </div>
      </div>
    </section>

   
    <!-- Философия -->
<section id="philosophy">
  <div class="container">
    <h2>Наша философия</h2>
    <p>IMPULSE — это больше, чем одежда. Это вызов обыденности, вспышка вдохновения, момент, когда стиль становится искусством. Мы создаём для тех, кто не боится бросить вызов стандартам и выразить себя через каждую деталь. Смелость — в том, как мы ломаем шаблоны, экспериментируя с кроем, текстурами и формами. Инновации — в том, как мы используем передовые идеи и материалы, чтобы мода шагала в будущее. Индивидуальность — в том, что каждая вещь становится отражением вашей уникальной истории. IMPULSE — это не просто бренд, это движение. Мы верим, что мода должна быть живой, дерзкой и настоящей. Наши коллекции — это искры, которые зажигают ваш стиль, превращая повседневность в полотно для самовыражени</p>
    <a href="каталог.html"><i class="las la-shopping-bag"></i> Каталог Исторические коллекции</a>

    <div class="grid">
      <article class="card">
        <h3>Индивидуальность</h3>
        <p>Уникальные решения для каждого клиента</p>
        <div class="image-grid">
          <img src="img/Без названия.jpg" alt="Экспериментальный крой" class="left">
          <img src="img/Alexander McQueen  Braid Detail Back.jpg" alt="Инновационные материалы" class="center">
          <img src="img/beaded web.jpg" alt="Авторские принты" class="right">
        </div>
      </article>
    </div>
  </div>
</section>

    <!-- Контакты -->
    <section id="contact">
      <div class="container">
        <h2>Контакты</h2>
        <form>
          <input type="text" placeholder="Имя" required>
          <input type="email" placeholder="Email" required>
          <textarea placeholder="Сообщение" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  </main>

  
  <!-- Футер -->
  <footer class="neon-footer">
    <div class="footer-grid">
      <div class="social-holograms">
        <div class="hologram-button"></div>
        <div class="hologram-button"></div>
        <div class="hologram-button"></div>
      </div>
      <div class="news-ticker">
        <marquee>New Collection Coming Soon • Exclusive Paris Show • Sustainable Materials Initiative</marquee>
      </div>
    </div>
  </footer>

  <!-- Скрипты -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/parallax-js@3.1.0/src/parallax.min.js"></script>
  <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
  <script src="impulse.js"></script>
  
  <script>
    AOS.init();
  </script>
</body>
</html>

