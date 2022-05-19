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
        $('#showcase').mousemove(function(event) {
    
            console.log(event.pageX, event.pageY);
    
            let cursorX = event.pageX / $(this).width();
    
            let settingX = Math.floor(cursorX * wghtmax);
    
            // console.log( settingX, settingY)
    
            $("#showcase").css({
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
    let capspell=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   let lowerspell="abcdefghijklmnopqrstuvwxyz0123456789"
   let lower=lowerspell.split("");
   let punctuations = ["!","?",".",",","-","–","—","(",")","{","}","[","]","“","”","‘","’","&","$"];

   genspell();
   
   function genspell(){
    let cap1=document.createElement("span");
    cap1.innerHTML= capspell[Math.floor(Math.random() * capspell.length)];
    showcase.appendChild(cap1);
    let w = getRandomIntInclusive(4, 12);
    for (let i = 4; i < w; i++) {
    let n = getRandomIntInclusive(0, 37);
    let magic = document.createElement("span");
    magic.innerHTML = lower[n];
    showcase.appendChild(magic);
   }
   let punctuation1 = document.createElement("span");
   punctuation1.innerHTML =
   punctuations[Math.floor(Math.random() * punctuations.length)] + " ";
 showcase.appendChild(punctuation1);

 let cap2=document.createElement("span");
    cap2.innerHTML= capspell[Math.floor(Math.random() * capspell.length)];
    showcase.appendChild(cap2);
    let w2 = getRandomIntInclusive(4, 12);
    for (let i = 4; i < w2; i++) {
    let n = getRandomIntInclusive(0, 37);
    let magic2 = document.createElement("span");
    magic2.innerHTML = lower[n];
    showcase.appendChild(magic2);
   }
   let punctuation2 = document.createElement("span");
   punctuation2.innerHTML =
   punctuations[Math.floor(Math.random() * punctuations.length)] + " ";
 showcase.appendChild(punctuation2);

 let cap3=document.createElement("span");
    cap3.innerHTML= capspell[Math.floor(Math.random() * capspell.length)];
    showcase.appendChild(cap3);
    let w3 = getRandomIntInclusive(4, 12);
    for (let i = 4; i < w3; i++) {
    let n = getRandomIntInclusive(0, 37);
    let magic3 = document.createElement("span");
    magic3.innerHTML = lower[n];
    showcase.appendChild(magic3);
   }
   let punctuation3 = document.createElement("span");
   punctuation3.innerHTML =
   punctuations[Math.floor(Math.random() * punctuations.length)] + " ";
 showcase.appendChild(punctuation3);
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
