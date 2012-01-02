var J = jQuery.noConflict();
var text
var url
J(function(){
  chrome.extension.sendRequest({cmd: "getData"}, function(response) {
		text = response.text
		url = response.url
	});
  
	window.addEventListener("message", function(event){
	  if(event.data == 'close') {
  	  J('#close').click()
	  } else {
      location.href = "javascript:frames['causatum-frame'].postMessage({url: '"+url+"', text: '"+text+"'}, '*')"
	  }
	}, false);
	
	var frame_url =  "http://causatum.org/event/new" //chrome.extension.getURL("frame.html");

	var tray = J('<div class="causatum-tray"><div class="causatum-shade"></div><div class="causatum-icons"><div class="causatum-shade" style="left: 40px"></div><p id="causatum-close" class="causatum-icon">close</p></div><div class="causatum-content"><iframe id="causatum-frame" class ="causatum-frame" src="'+ frame_url +'"></iframe></div></div>')
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
