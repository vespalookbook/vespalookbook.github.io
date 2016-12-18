$(document).ready(function(){
	$( document ).ready(function() {
	    var feed = new Instafeed({
	        get: 'user',
	        userId: '4112109893',
	        accessToken: '4112109893.1677ed0.d6c94dbe5efd40f2bdf5060e508d8860'
	    });
	    feed.run();
	});
});