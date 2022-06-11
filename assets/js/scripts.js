	

$(document).ready(function() {
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 70) {
            $('.nav').addClass('affix');
        } else {
            $('.nav').removeClass('affix');
        }
    });
    // navbar sticky end

	$('.nav__toggler').click(function () {
		$(this).toggleClass('active');
		$('.nav-list').slideToggle();
	});
	// navbar end

    AOS.init({
		offset: 200, 
		duration: 1000
	});
    // animation on scroll

});


		