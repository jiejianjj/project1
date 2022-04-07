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
});

// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}


