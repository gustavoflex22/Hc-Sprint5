function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    
    if (email === 'usuario@gmail.com' && password === '1234') {
        
        window.location.href = 'index.html';
    } else {
        
        errorMessage.innerText = 'E-mail ou senha incorretos. Tente novamente.';
    }
}