document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector("#menu");
    const nav = document.querySelector(".links");

    if (menu && nav) {
        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            nav.classList.toggle('active');
        };
    }

    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                mode: 'no-cors' 
            })
            .then(response => {
               
                showToast();

                form.reset(); 
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }

    function showToast() {
        const toast = document.getElementById('toast');
        toast.style.display = 'block'; 
        toast.style.opacity = '1'; 

       
        setTimeout(() => {
            toast.style.opacity = '0'; 
            setTimeout(() => {
                toast.style.display = 'none'; 
            }, 500); 
        }, 3000); 
    }
});
