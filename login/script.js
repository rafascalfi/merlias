document.getElementById("oi").addEventListener('submit', function(event){
    event.preventDefault();
    
    var username = document.getElementsById('Usuário').value;
    var password = document.getElementsById('Senha').value;
    
    if (username === "giovana" && password === "nilio")
        window.location.href="https://boxicons.com/?query=arrow";
        }