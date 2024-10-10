document.addEventListener('DOMContentLoaded', () => {
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
        toast.style.opacity = '1'; // Asegúrate de que la opacidad sea visible

        // Ocultar el toast después de 3 segundos
        setTimeout(() => {
            toast.style.opacity = '0'; // Desvanecer el toast
            setTimeout(() => {
                toast.style.display = 'none'; // Ocultar después de desvanecer
            }, 500); // Tiempo de desvanecimiento
        }, 3000); // Mostrar durante 3 segundos
    }
});
