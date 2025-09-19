
const form = document.querySelector('#loginForm');
const eyeBtn = document.querySelector('.eye__btn');
const passInput = document.querySelector('.passInput');

form.addEventListener('submit', async(evt) => {
    evt.preventDefault();
    
    const formData = new FormData(form);

    const res = await fetch('../server/login.php', {
        method: "POST",
        body: formData
    });

    const data = await res.json();

    if(data.status) {
        alert(data.message);
        window.location.href = 'index.html';
    } else {
        alert(data.message);
    }
});

eyeBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    eyeBtn.classList.toggle('hiddened');
    
    if(eyeBtn.classList.contains('hiddened')) {
        passInput.setAttribute('type', 'text');
    } else {
        passInput.setAttribute('type', 'password');
    }
});