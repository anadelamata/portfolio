const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que la página se recargue

    // Enviar el formulario a Formspree
    fetch(this.action, {
        method: this.method,
        body: new FormData(this)
    })
    .then(response => {
        if (response.ok) {
            // Mostrar el mensaje toast
            showToast();

            // Limpiar los campos del formulario
            this.reset(); // Limpia todos los campos del formulario
        } else {
            console.error('Error al enviar el formulario:', response);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function showToast() {
    const toast = document.getElementById('toast');
    toast.style.display = 'block'; // Mostrar el toast

    // Ocultar el toast después de 3 segundos
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}