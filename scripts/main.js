$( document ).ready(function() {

        var $sectionAboutOffset = $("#about").offset().top,
            $sectionPortfolioOffset = $("#portfolio").offset().top,
            $sectionContactOffset = $("#contact").offset().top,
            $navHeight = $('.navbar').height();
        $('.navbar-name').css('line-height', $navHeight + 'px');

        console.log(document.getElementById("about").offsetHeight, document.getElementById("about").offsetTop );
        $('nav').hover(
            function () {

                $(this).css("margin-top", "0");
            }, function () {
                if ($(window).scrollTop() > 0)
                    $(this).css("margin-top", "-2.5%");
            }
        );

        $(window).resize(function () {
            $navHeight = $('.navbar').height();
            $('.navbar-name').css('line-height', $navHeight + 'px');
        });


        $('a.page-scroll').bind('click', function (event) {
            $navHeight = $navHeight - $(window).height() * 0.025;

            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - $navHeight)
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });

        var $oldScrollPos = $(window).scrollTop();

        $(window).scroll(function () {

            var $scrollPos = $(window).scrollTop();
//if($scrollPos > $oldScrollPos){
            //$("nav").css('top', '-5%');
            //$oldScrollPos = $scrollPos;
            //}else if($scrollPos < $oldScrollPos){
            //   $("nav").css('top', '0');
            //  $oldScrollPos = $scrollPos;


            //}

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
                $("nav").css("margin-top", "-2.5%");


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




