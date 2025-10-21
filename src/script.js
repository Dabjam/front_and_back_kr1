function submitForm() {
    const form = document.getElementById('feedbackForm');
    if (form && form.checkValidity()) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Данные формы:', data);
        alert('Спасибо! Ваше обращение отправлено.');
        const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
        modal.hide();
        form.reset();
    } else if (form) {
        form.reportValidity();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);
});

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.textContent = theme === 'light' ? '🌙' : '☀️';
    });
}