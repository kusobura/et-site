function toggleItem() {
    var menu = document.getElementById("toggleItem");
    var btn = document.getElementById("headerItemBtn");
    btn.classList.add("hidden");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
