$(document).ready(function(){
    $(document).ready(function(){
       
        console.log('script loaded');
    
        const wghtmax = 900;
    
        //mouseposition
        $('#intro').mousemove(function(event) {
    
            console.log(event.pageX, event.pageY);
    
            let cursorX = event.pageX / $(this).width();
    
            let settingX = Math.floor(cursorX * wghtmax);
    
            // console.log( settingX, settingY)
    
            $("#bigletter").css({
                "--wght": settingX
            });
            
        });
        $('#girls').mousemove(function(event) {
    
            console.log(event.pageX, event.pageY);
    
            let cursorX = event.pageX / $(this).width();
    
            let settingX = Math.floor(cursorX * wghtmax);
    
            // console.log( settingX, settingY)
    
            $("#girls").css({
                "--wght": settingX
            });
            
        });
        //click buttons
	$('#pride').click(function(event) {
        $([document.documentElement, document.body]).animate({scrollTop: $("#pr").offset().top});
	});
    $('#greed').click(function(event) {
		$([document.documentElement, document.body]).animate({scrollTop: $("#gr").offset().top});
	});
    $('#lust').click(function(event) {
		$([document.documentElement, document.body]).animate({scrollTop: $("#lu").offset().top});
	});
    $('#envy').click(function(event) {
		$([document.documentElement, document.body]).animate({scrollTop: $("#en").offset().top});
	});
    $('#gluttony').click(function(event) {
		$([document.documentElement, document.body]).animate({scrollTop: $("#gl").offset().top});
	});
    $('#wrath').click(function(event) {
		$([document.documentElement, document.body]).animate({scrollTop: $("#wr").offset().top});
	});
    $('#sloth').click(function(event) {
		$([document.documentElement, document.body]).animate({scrollTop: $("#sl").offset().top});
	});
    $('#top').click(function(event) {
		$([document.documentElement, document.body]).animate({scrollTop:0});
	});
    }
    );
 var showcase=document.getElementById("showcase"); 
    let spellsource="                    ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.,-——(){}[]“”‘’&$"
   let spell=spellsource.split("");
   genspell()
   
   function genspell(){
    let w = getRandomIntInclusive(7, 60)
    for (let i = 7; i < w; i++) {
    let n = getRandomIntInclusive(0, 100);
    let magic = document.createElement("span");
    magic.innerHTML = spell[n];
    showcase.appendChild(magic);
   }
}
$('#spell').click(function(event){
    remove();
    genspell();
})
function remove() {
    var div = document.getElementById("showcase");
    while (div.firstChild) div.removeChild(div.firstChild);
  }
    // Function to generate random number 
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }
});
