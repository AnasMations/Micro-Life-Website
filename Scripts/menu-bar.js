window.onload = function () {
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var menu = document.getElementsByClassName("menu-bar");
    var nav = document.getElementsByClassName("nav-menu");

    // When the user clicks on <span> (x), close the modal
    menu.onclick = function () {
        menu.style.display = "none";
        nav.style.display = "block";
    }
};