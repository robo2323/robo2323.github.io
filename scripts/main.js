$( document ).ready(function() {

    var $sectionAboutOffset = $("#about").offset().top,
        $sectionPortfolioOffset = $("#portfolio").offset().top,
        $sectionContactOffset = $("#contact").offset().top,
        $navHeight = $('.navbar').height();

    function setNavCollapseOffset() {
            if ($(window).width() > 950) {
                $navCollapseOffset = "-2.5%";
            } else if ($(window).width() < 951) {
                $navCollapseOffset = "-10%";
            }
        }

    setNavCollapseOffset();

        //show navbar labels on hover
        $('.navbar-nav').hover(
            function () {

                $('nav').css("margin-top", "0");
                $('.navbar-name').css('top', '25%');

            }, function () {
                if ($(window).scrollTop() > 0)
                    $('nav').css("margin-top", $navCollapseOffset);
                $('.navbar-name').css('top', '50%');

            }
        );

        //window resize handler
        $(window).resize(function () {
            //recalculate navbar height for scrolling function
            $navHeight = $('.navbar').height();
            setNavCollapseOffset();
            $('nav').css("margin-top", "0");

        });


        //page scroll on nav clicks
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            //set
            if($anchor.attr('href')!="page-top") {
                var $offset = $navHeight - $(window).height() * 0.04;
            }else{
                var $offset = 0;
            }

            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - $offset)
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });

        var $oldScrollPos = $(window).scrollTop();

        $(window).scroll(function () {

            var $scrollPos = $(window).scrollTop();

            if ($scrollPos < 10) {
                $("nav").css("background-color", "rgba(34, 34, 34, 0.1)");
                $("nav").css("margin-top", "0");

                $('.fa-arrow-up').css('visibility', 'hidden');
            }
            if ($scrollPos > 9) {
                $('.fa-arrow-up').css('visibility', 'visible');
            }
            if ($scrollPos > 10 && $scrollPos < $sectionContactOffset - $navHeight) {
                $("nav").css("background-color", "rgba(34, 34, 34, 1)");
                $("nav").css("margin-top", $navCollapseOffset);


            }
            if ($scrollPos > ($sectionContactOffset - $navHeight - 1)) {
                $("[href]").removeClass('nav-active');
                $("[href='#contact']").addClass('nav-active');
                $("nav").css("background-color", "#3AB76D");
                $("")

            }
            if ($scrollPos < $sectionAboutOffset - $navHeight) {
                $("[href]").removeClass('nav-active');

            }
            if ($scrollPos > $sectionAboutOffset - $navHeight - 1 && $scrollPos < $sectionPortfolioOffset - $navHeight) {
                $("[href]").removeClass('nav-active');
                $("[href='#about']").addClass('nav-active');
            }
            if ($scrollPos > $sectionPortfolioOffset - $navHeight - 1 && $scrollPos < $sectionContactOffset - $navHeight - 1) {
                $("[href]").removeClass('nav-active');
                $("[href='#portfolio']").addClass('nav-active');
            }
        });

});




