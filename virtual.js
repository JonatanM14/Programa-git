function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Verificar si los campos están vacíos
    if (email === "" || password === "") {
        document.getElementById("error-message").textContent = "Por favor, ingrese un correo electrónico y una contraseña válidos.";
    } 
    // Validación del formato del correo electrónico
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("error-message").textContent = "Por favor, ingrese un correo electrónico válido.";
    } 
    // Verificar las credenciales
    else if (email === "usuario@example.com" && password === "contraseña") {
        // Autenticación exitosa
        document.getElementById("error-message").textContent = "";
        alert("¡Inicio de sesión exitoso!");
        
        // Redirigir a la página principal o realizar otras acciones
        window.location.href = "documentos/nuevo.html"; } 
    // Si las credenciales no son correctas
    else {
        document.getElementById("error-message").textContent = "ERROR: La contraseña que has escrito para el usuario es incorrecta. Intenta de nuevo.";
    }
}