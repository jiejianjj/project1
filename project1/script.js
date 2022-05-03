const sung = document.getElementById("sung");

document.body.addEventListener("touchstart", (e) => {
  sung.setAttribute("style", "display: block;");
});
document.body.addEventListener("touchend", (e) => {
  sung.setAttribute("style", "display: none;");
});
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 100);
});
