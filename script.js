    const menu = document.querySelector("#menu");
    const nav = document.querySelector(".links");

    if (menu && nav) {
        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            nav.classList.toggle('active');
        };
    }


    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Enviando...';
    
       const serviceID = 'default_service';
       const templateID = 'template_dm0y2ew';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Enviar';
          alert('Mensaje Enviado Correctamente');
        }, (err) => {
          btn.value = 'Enviar';
          alert(JSON.stringify(err));
        });
    });
    