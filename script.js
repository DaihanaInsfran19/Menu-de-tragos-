
document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.imagen-trago img');
    
    
    imagenes.forEach(img => {
        
        img.addEventListener('load', function() {
            if (this.src && this.src !== window.location.href && this.src !== '') {
                this.parentElement.classList.add('con-imagen');
            }
        });
        
    
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});