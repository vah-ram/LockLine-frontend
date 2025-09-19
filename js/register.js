
const form = document.querySelector('#registerForm');
const eyeBtnPass = document.querySelector('.register__form .eye__btn--pass');
const eyeBtnCorrectPass = document.querySelector('.register__form .eye__btn--correctPass');
const passInput = document.querySelector('.passInput');
const correctPassInput = document.querySelector('.correct__passInput');

form.addEventListener('submit', async (evt) => {
    evt.preventDefault()

    const formData = new FormData(form);

    const res = await fetch("../server/register.php", {
        method: "POST",
        body: formData
    });

    const data = await res.json();

    if(data.status) {
        alert(data.message);
        window.location.href = 'index.html'
    } else {
        alert(data.message);
    }

});

    eyeBtnPass.addEventListener('click', (evt) => {
        evt.preventDefault();

        eyeBtnPass.classList.toggle('hiddened');
        
        if(eyeBtnPass.classList.contains('hiddened')) {
            passInput.setAttribute('type', 'text');
        } else {
            passInput.setAttribute('type', 'password');
        }
    });

    eyeBtnCorrectPass.addEventListener('click', (evt) => {
        evt.preventDefault();

        eyeBtnCorrectPass.classList.toggle('hiddened');
        
        if(eyeBtnCorrectPass.classList.contains('hiddened')) {
            correctPassInput.setAttribute('type', 'text');
        } else {
            correctPassInput.setAttribute('type', 'password');
        }
    });