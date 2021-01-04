function slide() {
    var tanyaImg = document.getElementById("tanyaImg");
    var tanya = document.getElementById("tanya");
    var johnImg = document.getElementById("johnImg");
    var john = document.getElementById("john");

    // si tanyaImg visible et tanya visible 
    if (tanyaImg.style.display !== "none" && tanya.style.display !== "none") {
        // alors 
        // rendre johnImg visible et john invisible
        johnImg.style.display = "block";
        john.style.display = "block";

        // rendre tanyaImg visible et tanya invisible
        tanyaImg.style.display = "none";
        tanya.style.display = "none";
    // sinon 
    } else {
        // rendre johnImg invisible et john invisible
        johnImg.style.display = "none";
        john.style.display = "none";

        // rendre tanyaImg visible et tanya invisible
        tanyaImg.style.display = "block";
        tanya.style.display = "block";
    }
}
