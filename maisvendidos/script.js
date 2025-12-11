const slideContainer = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-slide img').length;

// Função para mover o carrossel
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slideContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
}

// Eventos para as setas de navegação
prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));

// Função para iniciar o carrossel automático
function startAutoSlide() {
    setInterval(() => {
        moveSlide(1); // Mover uma imagem para frente a cada 3 segundos
    }, 4000); // 3000 milissegundos = 3 segundos
}

// Inicia o carrossel automático
startAutoSlide();
