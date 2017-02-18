$( document ).ready(function() {

    var $sectionAboutOffset = $("#about").offset().top,
        $sectionPortfolioOffset = $("#portfolio").offset().top,
        $sectionContactOffset = $("#contact").offset().top,
        $navHeight = $('.navbar').height();

/*    /!*function setNavCollapseOffset() {
        var $winWidth = $(window).width();
            if ( $winWidth > 950) {
                $navCollapseOffset = "-2.5%";
            } else if ($winWidth < 951 && $winWidth > 380) {
                $navCollapseOffset = -1%;
            }else if($winWidth < 381){
                $navCollapseOffset = -5%;

            }
        }*!/

    setNavCollapseOffset();*/

        //show navbar labels on hover
        $('.navbar-nav').hover(
            function () {

                //$('nav').css("margin-top", "0");
                $('nav').css("height", $navHeight+"px");
                $(".navbar-nav").css('margin', "0");

                $('.navbar-name').css('top', '25%');
                $(".navbar-nav p").css('display', 'block');

            }, function () {
                if ($(window).scrollTop() > 0) {

                    $('nav').css("height", $navHeight/2+"px");
                    $(".navbar-nav").css('margin', '-'+($navHeight/2.7)+"px");
                    $(".navbar-nav p").css('display', 'none');
                }

            }
        );

        //window resize handler
        $(window).resize(function () {
            //recalculate navbar height for scrolling function
            $navHeight = $('.navbar').height();
            $(".navbar-nav").css('margin', "0");
            $(".navbar-nav p").css('display', 'block');


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
                $('nav').css("height", $navHeight+"px");
                $(".navbar-nav").css('margin', "0");

                $('.navbar-name').css('top', '25%');
                $(".navbar-nav p").css('display', 'block');

                $('.fa-arrow-up').css('visibility', 'hidden');
            }
            if ($scrollPos > 9) {
                $('.fa-arrow-up').css('visibility', 'visible');
                $('nav').css("height", $navHeight/2+"px");
                $(".navbar-nav").css('margin', '-'+($navHeight/2.7)+"px");
                $(".navbar-nav p").css('display', 'none');
            }
            if ($scrollPos > 10 && $scrollPos < $sectionContactOffset - $navHeight) {
                $("nav").css("background-color", "rgba(34, 34, 34, 1)");


            }
            if ($scrollPos > ($sectionContactOffset - $navHeight - 1)) {
                $("[href]").removeClass('nav-active');
                $("[href='#contact']").addClass('nav-active');
                $("nav").css("background-color", "#3AB76D");

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




