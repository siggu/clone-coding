
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const colors = ["red", "green", "blue", "pink", "white", "purple"];
    let num = Math.floor(Math.random()*colors.length);

    h1.style.color = colors[num];
}

function handleMouseenter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no wifi");
}

function handleWindowOnline() {
    alert("All Goood!");
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseenter;
h1.onmouseleave = handleMouseLeave;


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
