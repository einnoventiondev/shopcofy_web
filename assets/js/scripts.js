	

$(document).ready(function() {
    // communities section box slide animation
    $('.box').click(function() {
        $('p').slideToggle();
    })
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
    
    // counter

    $('.counterup').counterUp({
        delay: 100,
        time: 1000
    });

    //OWL CAROUSEL==------------------------

    var owl = $('.blog-content');
    owl.owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        touchDrag: true,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        dots: true,
        // navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1024: {
                items: 1,
            },
            1300: {
                items: 1,
            }
        }
    });

    $('.box').hover(function() {
        var img = $(this).attr('img');
        $(this).find('p').toggleClass('d-none');
        $('.'+img).removeClass('d-none');
        $('.'+img).nextAll().addClass('d-none');
        $('.'+img).prevAll().addClass('d-none');
    })


    $(window).scroll(function(){
        $('.navbar').addClass('bg-white');
        $('.navbar').css({'padding-top' : '10px', 'padding-bottom' : '10px'});
        if($(this).scrollTop() === 0) {
            $('.navbar').removeClass('bg-white');
            $('.navbar').css('padding-top', '30px');
        }
      });

});


		