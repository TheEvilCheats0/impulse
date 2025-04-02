// Анимация появления секций при скролле
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('scroll-animation');
  observer.observe(section);
});

// Плавный скролл для навигации
// Плавный скролл для навигации
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault(); // Предотвращаем действие только для якорных ссылок
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Элемент с селектором ${href} не найден на странице`);
      }
    }
    // Для обычных ссылок (например, impulse.html) ничего не делаем — переход происходит автоматически
  });
});
// Инициализация AOS
AOS.init({
  duration: 1000,
  once: false,
  mirror: true
});




// Новые скрипты
gsap.registerPlugin(ScrollTrigger);

// Анимация заголовка
gsap.from(".cyber-glitch", {
  duration: 2,
  opacity: 0,
  y: 100,
  ease: "power4.out"
});



// 3D модель
const modelViewer = document.querySelector('model-viewer');
let currentMaterial = 0;

document.querySelector('.material-switch').addEventListener('click', () => {
  const materials = ['fabric', 'leather', 'metal'];
  currentMaterial = (currentMaterial + 1) % materials.length;
  modelViewer.material = materials[currentMaterial];
});

// Анимация скролла
document.querySelectorAll('section').forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top center"
    },
    opacity: 0,
    y: 100,
    duration: 1
  });
});

