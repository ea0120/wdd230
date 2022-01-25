window.onload = function getTime() {
    let currentDate = new Date();
    document.querySelector(".year").innerHTML = currentDate.getFullYear();
    document.getElementById("lastmod").innerHTML = document.lastModified;
}