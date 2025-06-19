document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        setTimeout(() => {
            registerForm.classList.add('active');
        }, 10);
    });
    
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.classList.remove('active');
        setTimeout(() => {
            loginForm.classList.add('active');
        }, 10);
    });
    
    // Validación del formulario de registro
    // registerForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
        
    //     const password = document.getElementById('regPassword').value;
    //     const confirmPassword = document.getElementById('confirmPassword').value;
        
    //     if (password !== confirmPassword) {
    //         alert('Las contraseñas no coinciden');
    //         return;
    //     }
        
    //     // Aquí iría la lógica para enviar el formulario de registro
    //     alert('Registro exitoso. Serás redirigido al login.');
    //     registerForm.classList.remove('active');
    //     loginForm.classList.add('active');
        
    //     // Limpiar formulario
    //     registerForm.reset();
    // });
    
    // // Validación del formulario de login
    // loginForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
        
    //     // Aquí iría la lógica para enviar el formulario de login
    //     alert('Inicio de sesión exitoso. Redirigiendo...');
        
    //     // Simular redirección
    //     setTimeout(() => {
    //         window.location.href = 'dashboard.html';
    //     }, 1000);
    // });

    [showRegister, showLogin].forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});