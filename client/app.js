$(document).ready(function() {
	$().UItoTop({ easingType: 'easeOutQuart' });

    $("#toggleEditor").live("click", function(){
        $('#editor').slideToggle('slow');
        return false;
    });
});