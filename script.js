const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

if (menu && nav) {
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        nav.classList.toggle('active');
    };
}

//FUNCION FLECHA
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Mostrar o ocultar el botón de desplazamiento
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block"; // Mostrar el botón
        } else {
            scrollToTopBtn.style.display = "none"; // Ocultar el botón
        }
    });

    // Al hacer clic en el botón, desplazarse hacia arriba
    scrollToTopBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave
        });
    });
});

//FUNCION RELOJ
function updateClock() {
    const now = new Date();

    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };

    const formattedDate = now.toLocaleDateString('es-ES', optionsDate).replace(/\//g, '-');
    const formattedTime = now.toLocaleTimeString('es-ES', { hour12: false });

    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = formattedTime;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializa el reloj
updateClock();


