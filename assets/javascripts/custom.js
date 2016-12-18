$(document).ready(function(){
	$( document ).ready(function() {
	    var feed = new Instafeed({
	        get: 'user',
	        userId: '4112109893'
	    });
	    feed.run();
	});
});