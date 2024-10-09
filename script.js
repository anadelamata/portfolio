const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar el menú y la navegación
    const menu = document.querySelector("#menu");
    const nav = document.querySelector(".links");

    // Lógica del menú
    if (menu && nav) {
        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            nav.classList.toggle('active');
        };
    }

    // Seleccionar el formulario
    const form = document.getElementById('contact-form');

    // Escuchar el evento de envío del formulario
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir la acción predeterminada del formulario

            // Enviar el formulario a Formspree usando fetch
            fetch(form.action, {
                method: form.method,
                body: new FormData(form)
            })
            .then(response => {
                if (response.ok) {
                    // Mostrar el mensaje toast
                    showToast();

                    // Limpiar los campos del formulario
                    form.reset(); // Limpia todos los campos del formulario
                } else {
                    console.error('Error al enviar el formulario:', response);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }

    function showToast() {
        const toast = document.getElementById('toast');
        toast.style.display = 'block'; // Mostrar el toast

        // Ocultar el toast después de 3 segundos
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }
});
