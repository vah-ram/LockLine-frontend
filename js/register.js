
const form = document.querySelector('#registerForm');

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
