
        document.addEventListener('DOMContentLoaded', () => {
            const consentBox = document.getElementById('cookie-consent');
            const acceptBtn = document.getElementById('accept-cookies');

            if (!localStorage.getItem('cookieAccepted')) {
            setTimeout(() => {
                consentBox.classList.add('show');
            }, 500);
            }

            acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieAccepted', 'true');
            consentBox.classList.remove('show');
            });
        });
