function submitForm() {
    const form = document.getElementById('feedbackForm');
    const formData = new FormData(form);
    const contactModal = document.getElementById('contactModal');

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

    try {
        console.log('Данные формы:', data);
    } catch (error) {
        console.error('Ошибка логирования:', error);
    }

    alert('Спасибо! Ваше обращение отправлено. Мы свяжемся с вами в ближайшее время.');

    if (contactModal) {
        contactModal.close();
    }

    form.reset();
}

document.getElementById('contactModal').addEventListener('click', function (event) {
    if (event.target === this) {
        this.close();
    }
});

document.getElementById('feedbackForm').addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && event.target.type !== 'textarea') {
        event.preventDefault();
    }
});

document.getElementById('contactModal').addEventListener('cancel', function () {
    this.close();
});

