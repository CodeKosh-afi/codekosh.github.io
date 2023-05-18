var navbtn = document.querySelector(".navbtn"),
    navmenu = document.querySelector("header nav"),
    root = document.documentElement,
    headerbar = document.querySelector("header");
navbtn.menutoggled = 0;

navbtn.onclick = () => {
    switch (navbtn.menutoggled) {
        case 0:
            navbtn.children[0].src = "assets/close_white_24dp.svg";
            navmenu.style.display = "flex";
            root.style.overflowY = "hidden";
            headerbar.style.setProperty("mix-blend-mode", "normal");
            break;

        case 1:
            navbtn.children[0].src = "assets/menu_white_24dp.svg";
            navmenu.style.display = "none";
            root.style.overflowY = "scroll";
            headerbar.style.setProperty("mix-blend-mode", "difference");
    }

    navbtn.menutoggled ^= 1;
}

var i = 0;
Array.from(navmenu.children).forEach(element => {
    element.style.setProperty("--posx-anim", `${-((i * 100) + 100)}px`);
    element.onclick = () => {
        if (navbtn.menutoggled) navbtn.onclick();
    }

    i++;
});