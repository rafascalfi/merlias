const header = document.querySelector("header");

window.addEventListener("scroll", function (){
    header.classList.toggle('sticky', window.scrollY > 0);
})













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


function searchProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const productName = item.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            item.style.display = ''; // Exibe o item
        } else {
            item.style.display = 'none'; // Oculta o item
        }
    });
}




