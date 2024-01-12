$(document).ready(function(){
    var menu = new MmenuLight(document.querySelector("#menu"), "all");
    menu.navigation({ theme: "dark" });
    var drawer = menu.offcanvas();
    document
    .querySelector('a[href="#menu"]')
    .addEventListener("click", (evnt) => {
        evnt.preventDefault();
        drawer.open();
    });
});

// Video Start -------------------


