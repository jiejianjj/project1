$(document).ready(function(){
    $("#darkmode").click(function(){ $('body').toggleClass('darkmode');});
    $(document).ready(function(){

        console.log('script loaded');
    
        const wghtmax = 900;
    
        //standard sliders
        $('.axis-range').on('input', function(){
    
            let value = parseInt($(this).val()); //get slider input value
            // console.log(value);
    
            const slidertype = $(this).data('type'); //get slider axis
    
            // console.log("--"+slidertype, value );
    
            $('#bigletter').css("--"+slidertype, value);
    
        });
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
        //click buttons
	$('#pride').click(function(event) {
		$("#bigletter").css({
			"--wght": 100,
		});	
	});
    $('#greed').click(function(event) {
		$("#bigletter").css({
			"--wght": 200,
		});	
	});
    $('#lust').click(function(event) {
		$("#bigletter").css({
			"--wght": 300,
		});	
	});
    $('#envy').click(function(event) {
		$("#bigletter").css({
			"--wght": 400,
		});	
	});
    $('#gluttony').click(function(event) {
		$("#bigletter").css({
			"--wght": 500,
		});	
	});
    $('#wrath').click(function(event) {
		$("#bigletter").css({
			"--wght": 600,
		});	
	});
    $('#sloth').click(function(event) {
		$("#bigletter").css({
			"--wght": 700,
		});	
	});
    $('#sins').click(function(event) {
		$("#bigletter").css({
			"--wght": 800,
		});	
	});


    }
    );
    
    // Function to generate random number 
    function randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
    }
});
