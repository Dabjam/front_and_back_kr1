// Функция отправки формы (только если форма существует)
function submitForm() {
    const form = document.getElementById('feedbackForm');
    if (!form) return;

    const formData = new FormData(form);

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        category: formData.get('category'),
        message: formData.get('message')
    };

    console.log('Данные формы:', data);
    alert('Спасибо! Ваше обращение отправлено. Мы свяжемся с вами в ближайшее время.');
    const modal = document.getElementById('contactModal');
    if (modal) modal.close();
    form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactModal');
    const form = document.getElementById('feedbackForm');

    if (modal) {
        modal.addEventListener('click', function (event) {
            if (event.target === this) {
                this.close();
            }
        });
    }

    if (form) {
        form.addEventListener('keypress', function (event) {
            if (event.key === 'Enter' && event.target.type !== 'textarea') {
                event.preventDefault();
            }
        });
    }

    // Тема
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeButtons(savedTheme);
    console.log('Тема применена:', savedTheme);

    // Динамика для карточек: toggle selected по клику (демо)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('card--selected');
        });
    });
});

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButtons(newTheme);
    console.log('Тема переключена на:', newTheme);
}

function updateThemeButtons(theme) {
    const buttons = document.querySelectorAll('.theme-toggle');
    buttons.forEach(button => {
        button.textContent = theme === 'light' ? '🌙' : '☀️';
    });
}