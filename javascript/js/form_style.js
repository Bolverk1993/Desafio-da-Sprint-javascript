//class fordform efeitos de estilo
const inputs = document.querySelectorAll('.fordform');

// Aplica o hover a cada input
inputs.forEach(input => {
    // Quando o mouse entra no input
    input.addEventListener('mouseenter', () => {
        input.style.border = '2px solid #1b357e';
        input.style.boxShadow = '0 0 8px rgba(27, 53, 126, 0.3)';
        input.style.transition = 'all 0.3s ease';
        input.style.transform = 'scale(1.15)';
    });
    
    // Quando o mouse sai do input
    input.addEventListener('mouseleave', () => {
        input.style.border = '1px solid #ccc';  // Volta ao estilo original
        input.style.boxShadow = 'none';
        input.style.transform = 'scale(1)';
    });
});