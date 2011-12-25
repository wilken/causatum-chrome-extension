var J = jQuery.noConflict();

J(function(){
	window.addEventListener("message", function(){J('#close').click()}, false);
	
	var tray = J('<div class="causatum-tray"><div class="causatum-shade"></div><div class="causatum-icons"><div class="causatum-shade" style="left: 40px"></div><p id="causatum-close" class="causatum-icon">close</p></div><div class="causatum-content"><iframe class ="causatum-frame" src="http://www.antiaction.com"></iframe></div></div>')
	J('body').prepend(tray)
	J('#causatum-close').click(function(){
		J('.causatum-icons').animate({"left" : "360"},400, function(){
			J('.causatum-tray').animate({"left" : "-400"},200, function(){
			  J(".causatum-tray").remove()
			})
		})
	})


	J('.causatum-tray').animate({"left" : "0"},400, function(){
		J('.causatum-icons').animate({"left" : "400"},200)
	})
})
