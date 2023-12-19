// Reference: https://www.w3schools.com/howto/howto_css_modal_images.asp

window.onload = function () {

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var images = document.getElementsByClassName("img-container");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    for (var i = 0; i < images.length; i++) {
        var img = images[i].getElementsByTagName("img")[0];
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    // When the user clicks on <span> (x), close the modal
    modal.onclick = function () {
        modal.style.display = "none";
    }
};