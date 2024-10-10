    const menu = document.querySelector("#menu");
    const nav = document.querySelector(".links");

    if (menu && nav) {
        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            nav.classList.toggle('active');
        };
    }


    