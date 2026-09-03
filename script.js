dragElement(document.getElementById("welcome-div-id"));

function dragElement(element) {
    var yPosition = 0;
    var xPosition = 0;
    var xCurrent = 0;
    var yCurrent = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
        xPosition = e.clientX;
        yPosition = e.clientY;

        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    }

    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        xCurrent = xPosition - e.clientX;
        yCurrent = yPosition - e.clientY;
        xPosition = e.clientX;
        yPosition = e.clientY;

        element.style.top = (element.offsetTop - yCurrent) + "px";
        element.style.left = (element.offsetLeft - xCurrent) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

var welcomePopup = document.querySelector("#welcome-div-id");

function closePopup(element) {
    element.style.display = "none";
}

function openPopup(element) {
    element.style.display = "block";
}

var welcomeClose = document.querySelector("#welcomeclose");

var welcomeOpen = document.querySelector("#welcomeopen")

welcomeClose.addEventListener("click", function() {
    closePopup(welcomePopup);
});

welcomeOpen.addEventListener("click", function() {
    openPopup(welcomePopup);
});