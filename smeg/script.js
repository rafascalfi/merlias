document.addEventListener("DOMContentLoaded", function() {
    const productGrid = document.getElementById('productGrid');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    const scrollAmount = 320; // Define a distância de rolagem para cada clique (ajustado para o tamanho dos itens)

    // Função para rolar para a esquerda
    leftArrow.addEventListener('click', function() {
        productGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Função para rolar para a direita
    rightArrow.addEventListener('click', function() {
        productGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const scrollAmount = 320; // Define a distância de rolagem para cada clique

    // Funções para a primeira seção
    const productGrid1 = document.getElementById('productGrid1');
    const leftArrow1 = document.getElementById('leftArrow1');
    const rightArrow1 = document.getElementById('rightArrow1');

    leftArrow1.addEventListener('click', function() {
        productGrid1.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightArrow1.addEventListener('click', function() {
        productGrid1.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Funções para a segunda seção
    const productGrid2 = document.getElementById('productGrid2');
    const leftArrow2 = document.getElementById('leftArrow2');
    const rightArrow2 = document.getElementById('rightArrow2');

    leftArrow2.addEventListener('click', function() {
        productGrid2.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightArrow2.addEventListener('click', function() {
        productGrid2.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});










document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById('commentForm');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obter os valores do formulário
        const avatarUrl = document.getElementById('commentAvatar').value;
        const authorName = document.getElementById('commentAuthor').value;
        const commentText = document.getElementById('commentText').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;

        // Criar um novo elemento de comentário
        const newComment = document.createElement('div');
        newComment.className = 'comment';

        newComment.innerHTML = `
            <div class="comment-header">
                <img src="${avatarUrl}" alt="Foto do Comprador" class="comment-avatar">
                <div class="comment-info">
                    <p class="comment-author">${authorName}</p>
                    <div class="comment-rating">
                        ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
                    </div>
                </div>
            </div>
            <p class="comment-text">${commentText}</p>
        `;

        // Adicionar o novo comentário à seção
        document.querySelector('.comments-section').appendChild(newComment);

        // Limpar o formulário
        commentForm.reset();
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.rating-input .star');
    const hiddenRating = document.getElementById('commentRatingValue');

    // Função para atualizar as estrelas
    function updateStars(rating) {
        stars.forEach(star => {
            star.classList.toggle('selected', parseInt(star.getAttribute('data-value')) <= rating);
        });
    }

    // Evento de clique nas estrelas
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-value'));
            hiddenRating.value = rating;
            updateStars(rating);
        });
    });

    // Função para adicionar novo comentário
    document.getElementById('commentForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obter os valores do formulário
        const avatarUrl = document.getElementById('commentAvatar').value;
        const authorName = document.getElementById('commentAuthor').value;
        const commentText = document.getElementById('commentText').value;
        const rating = hiddenRating.value;

        // Criar um novo elemento de comentário
        const newComment = document.createElement('div');
        newComment.className = 'comment';

        newComment.innerHTML = `
            <div class="comment-header">
                <img src="${avatarUrl}" alt="Foto do Comprador" class="comment-avatar">
                <div class="comment-info">
                    <p class="comment-author">${authorName}</p>
                    <div class="comment-rating">
                        ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
                    </div>
                </div>
            </div>
            <p class="comment-text">${commentText}</p>
        `;

        // Adicionar o novo comentário à seção
        document.querySelector('.comments-section').appendChild(newComment);

        // Limpar o formulário
        this.reset();
        updateStars(0);  // Resetar estrelas no formulário
    });
});









document.getElementById('finalizarCompraBtn').addEventListener('click', function() {
    const mensagem = document.getElementById('mensagem');
    mensagem.style.display = 'block'; // Exibe a mensagem
    setTimeout(() => {
        mensagem.style.display = 'none'; // Oculta a mensagem após 3 segundos
    }, 3000); // Dura 3 segundos
});



























// Seleciona todos os botões de "Comprar"
const buyButtons = document.querySelectorAll('.product-item button');

// Seleciona o elemento que mostra o número de itens no carrinho
const cartCount = document.getElementById('cart-count');

// Inicializa o contador
let itemCount = 0;

// Função para incrementar o contador
function addToCart() {
    itemCount++; // Aumenta o contador
    cartCount.textContent = itemCount; // Atualiza o valor exibido no carrinho
}

// Adiciona o evento de clique a todos os botões de "Comprar"
buyButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});