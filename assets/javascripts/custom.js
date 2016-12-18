$(document).ready(function() {
    var feed = new Instafeed({
        get: 'user',
        userId: '4112109893',
        accessToken: '73b25502a1c24cd4aa8aac6547951ab8'
    });
    feed.run();
});