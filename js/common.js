window.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    fetch("../header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("achieveHeader").innerHTML = data;
        });

    fetch("../footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("achieveFooter").innerHTML = data;
        });
});

$(function () {

    $("#testButton").click(function () {

        alert("クリックされました");

    });

});

function home() {
    location.href = '../index.html';
}

