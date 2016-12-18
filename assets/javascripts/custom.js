// $(document).ready(function() {
    // var feed = new Instafeed({
        // get: 'user',
        // userId: '4112109893',
        // accessToken: '56c79e7c896b43dda4ff9f7536174232'
    // });
    // feed.run();
// });

jQuery.fn.spectragram.accessData = {
    accessToken: '56c79e7c896b43dda4ff9f7536174232',
    clientID: '905f647d09e2489da0991cdea08ea334'
};

$('div').spectragram({
    query: 'vespalookbool',
    max: 14,
    size: 'big',
    wrapEachWith: '<p></p>'
});