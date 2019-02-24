$(document).ready(function() {

    console.log('Hello there! Interested? \n\nConnect with me on LinkedIn -> https://www.linkedin.com/in/andrew-hoang/');

    setTimeout(() => {
        $('#hero').css('background', 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../img/hero.jpg), center');
    }, 500)

    /********************
    		SCROLL 
     ********************/

    // Navbar on Scroll
    if (window.location.pathname == '/') {
        $('header').css("background-color", "transparent");
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('header').css("background-color", "#222").css("transition", "0.3s ease-in-out ");
            } else {
                $('header').css("background-color", "transparent").css("transition", "0.3s ease-in-out ");
            }
        });
    };

    if (window.location.pathname != '/') {
        $('header').css({
            "background-color": "#222",
            "position": "relative"
        });
    }

    /********************
    	    GALLERY 
     ********************/

    $.ajax({
        type: 'GET',
        url: "./js/pictures.json",
        dataType: 'json',
    }).then(data => {
        for (let key in data) {
            data[key].map(pictures => {
                $('#people').innerHTML = 'hello';
            })
        }
    });

    // Photo Hover Effect
    $('.photo-box').hover(function() {
        $(this).children('.cover-photo').css('opacity', '.8');
        $(this).children('.cover-text').show();
    }, function() {
        $(this).children('.cover-photo').css('opacity', '1');
        $(this).children('.cover-text').hide();
    });

    if (!window.location.pathname.includes('/photography')) {
        $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    }
    /********************
    	  MOBILE NAV
     ********************/

    // Open & Close Mobile Menu 
    $('.glyphicon-menu-hamburger').on('click', function() {
        $('nav ul').css('height', '100vh');
    });

    $('.closebtn').on('click', function() {
        $('nav ul').css('height', '0%');
    });

    $('nav ul a').not($('.dead-link')).on('click', function() {
        $('nav ul').css('height', '0%');
    });

    /********************
    		ABOUT
     ********************/

    if (window.location.pathname == '/') {

        var topOfSection = $("#about").offset().top - 1000;
        if ($(window).width() > 1024) {
            $(".left-col").hide();
            $(".right-col").hide();
            $(window).scroll(function() {
                if ($(this).scrollTop() > topOfSection) { //scrolled past the other div?
                    $(".left-col").show();
                    $(".right-col").show();
                    $(".left-col").addClass('animated bounceInLeft');
                    $(".right-col").addClass('animated bounceInRight');
                    setTimeout(animateBars(), 2500);
                }
            });
        } else {
            $(window).scroll(function() {
                if ($(this).scrollTop() > topOfSection + 1000) {
                    setTimeout(animateBars(), 2500);
                }
            })
        }

    }

    function animateBars() {
        $('.skillbar').each(function() {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2500)
        });
    }
    /********************
    	   CONTACT
     ********************/
    var button = $('.contact-button');
    var form = $('form');

    if (window.location.pathname == '/') {

        var topofContact = $("#contact").offset().top - 1000;
        if ($(window).width() > 1024) {
            $('#contact .container').css('opacity', 0);
            $(window).scroll(function() {
                if ($(this).scrollTop() > topofContact) { //scrolled past the other div?
                    setTimeout(function() {
                        $("#contact .container").css('opacity', 1);
                        $("#contact .container").addClass('animated bounceIn');
                    }, 200)
                }
            });
        }
    }

    /********************
    	   FOOTER 
     ********************/

    /* Footer Icon Fade */
    $('footer ul li').hover(function() {
            $('footer ul li').not(this).stop(true).fadeTo(200, 0.5)
        },
        function() {
            $('footer ul li').fadeTo(100, 1)
        });

})