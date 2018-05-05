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
 	$(".sp").click(function() {
 		$('body,html').animate({scrollTop:$('#khoisp').offset().top})
 		// return false;
 	});
 	$(".lh").click(function() {
 		$('body,html').animate({scrollTop:$('#khoilh').offset().top})
 		// return false;
 	});

})  
 