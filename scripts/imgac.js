document.addEventListener("deviceready", init, false);
var AnalyticsAccount = "UA-47180490-3";


function errorHandler(e) {
		alert(e.toString());
}


function init() {
		gaPlugin = window.plugins.gaPlugin;
		gaPlugin.init(gaInit, errorHandler, AnalyticsAccount, 10);	
		
		alert('1');
		$(".linkclick").click(function(e){
			e.preventDefault();
			var textdata = $(this).html();
			var intdata = parseInt($(".linkclick").index(this));
	
			gaPlugin.trackEvent(function() {
		alert('2');		
				
			}, errorHandler, "Button", "Click", textdata, intdata);	

        alert('3');
		});
	
}

function gaInit() {
		
}










