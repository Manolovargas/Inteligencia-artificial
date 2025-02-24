// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    }
});