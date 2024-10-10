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

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_dm0y2ew';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });