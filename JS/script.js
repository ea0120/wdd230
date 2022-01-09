window.onload = function getTime() {
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + 
        currentDate.getMinutes() +
        ":" + currentDate.getSeconds();
    document.getElementById("time").innerHTML = time;
    document.querySelector(".example").style.backgroundColor = "red";
}