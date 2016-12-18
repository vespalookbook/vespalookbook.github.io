$(document).ready(function(){
	$( document ).ready(function() {
	    var feed = new Instafeed({
	        get: 'user',
	        userId: '4112109893',
	        accessToken: '905f647d09e2489da0991cdea08ea334'
	    });
	    feed.run();
	});
});