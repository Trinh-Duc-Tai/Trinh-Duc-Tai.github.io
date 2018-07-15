 $(function(){
 	vitricuaedu = $('#khoiedu').offset().top;
 		console.log(vitricuaedu);
 	$(".xuong").click(function() {
 		$('body,html').animate({scrollTop:vitricuaedu});
 		  // return false;
 	});
 	$(".kn").click(function() {
 		$('body,html').animate({scrollTop:$('#khoikn').offset().top})
 		// return false;
 	});
 	$(".spdh").click(function() {
 		$('body,html').animate({scrollTop:$('#khoispdh').offset().top})
 		// return false;
 	});
 	$(".spcode").click(function() {
 		$('body,html').animate({scrollTop:$('#khoispcode').offset().top})
 		// return false;
 	});
 	$(".lh").click(function() {
 		$('body,html').animate({scrollTop:$('#khoilh').offset().top})
 		// return false;
 	});
 	$(".cmt").click(function() {
 		$('body,html').animate({scrollTop:$('#khoicmt').offset().top})
 		// return false;
 	});
 	$(".edu").click(function() {
 		$('body,html').animate({scrollTop:$('#khoiedu').offset().top})
 		// return false;
 	});

})  
 