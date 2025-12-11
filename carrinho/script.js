document.addEventListener('DOMContentLoaded', function () {
    const btnIncrease = document.querySelectorAll('.btn-increase');
    const btnDecrease = document.querySelectorAll('.btn-decrease');
    const removeButtons = document.querySelectorAll('.remove');

    // Atualiza o subtotal e o total
    function updateTotals() {
        let subtotal = 0;
        document.querySelectorAll('tbody tr').forEach(function (row) {
            const price = parseFloat(row.dataset.price);
            const quantity = parseInt(row.querySelector('.qty-value').textContent);
            const totalItem = price * quantity;

            // Atualiza o valor total de cada item na linha
            row.querySelector('.total-item').textContent = `R$ ${totalItem.toFixed(2)}`;

            // Soma ao subtotal
            subtotal += totalItem;
        });

        // Atualiza o subtotal e o total
        document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
        document.getElementById('total').textContent = `R$ ${subtotal.toFixed(2)}`;
    }

    // Função para aumentar a quantidade
    btnIncrease.forEach(button => {
        button.addEventListener('click', function () {
            const qtyValue = this.parentElement.querySelector('.qty-value');
            let quantity = parseInt(qtyValue.textContent);
            quantity += 1;
            qtyValue.textContent = quantity;
            updateTotals();
        });
    });

    // Função para diminuir a quantidade
    btnDecrease.forEach(button => {
        button.addEventListener('click', function () {
            const qtyValue = this.parentElement.querySelector('.qty-value');
            let quantity = parseInt(qtyValue.textContent);
            if (quantity > 1) {
                quantity -= 1;
                qtyValue.textContent = quantity;
                updateTotals();
            }
        });
    });
    // Função para remover item
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const row = this.closest('tr');
            row.remove();
            updateTotals();
        });
    });
    
    // Atualiza o total ao carregar a página
    updateTotals();
});

    




document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkout-btn');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            // Redireciona para a página de checkout
            window.location.href = "metododepagamento/metodospagamento.html"; // Altere para o caminho correto se necessário
        });
    } else {
        console.log('Botão não encontrado!');
    }
});
