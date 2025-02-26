// Modo Oscuro
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        this.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        this.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    }
});