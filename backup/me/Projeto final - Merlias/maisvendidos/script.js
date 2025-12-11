const slideContainer = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-slide img').length;

// Função para mover o carrossel
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slideContainer.style.transform = `translateX(${-currentSlide * 1200}px)`;  // Ajustado para 1200px
}

// Eventos para as setas de navegação
prevBtn.addEventListener('click', () => {
    moveSlide(-1);  // Move uma imagem para trás
});

nextBtn.addEventListener('click', () => {
    moveSlide(1);  // Move uma imagem para frente
});

