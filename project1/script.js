const sung = document.getElementById("sung");

document.body.addEventListener("touchstart", (e) => {
  sung.setAttribute("style", "display: block;");
});
document.body.addEventListener("touchend", (e) => {
  sung.setAttribute("style", "display: none;");
});
