document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  hero.style.background = 'linear-gradient(120deg, #e74c3c, #2980b9)';

  // Scroll animation for feature section
  const featureCards = document.querySelectorAll('.card');
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;
    featureCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top + window.scrollY;
      if (scrollPosition > cardPosition) {
        card.classList.add('visible');
      }
    });
  });

  // Scroll animation for best sellers section
  const productCards = document.querySelectorAll('.product');
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;
    productCards.forEach((product, index) => {
      const productPosition = product.getBoundingClientRect().top + window.scrollY;
      if (scrollPosition > productPosition) {
        setTimeout(() => {
          product.classList.add('visible');
        }, index * 200); // Delay for animation of each product
      }
    });
  });

  // Scroll animation for offers section
  const offerCards = document.querySelectorAll('.offer-card');
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;
    offerCards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top + window.scrollY;
      if (scrollPosition > cardPosition) {
        setTimeout(() => {
          card.classList.add('animate');
        }, index * 200); // Delay for animation of each offer card
      }
    });
  });
});
