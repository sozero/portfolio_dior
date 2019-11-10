$(function () {

    /* top버튼 스크립트 */
    //Get the button
    var mybutton = document.getElementById("top");

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    $('#top').on('click', function () {
        topFunction();
    });



    /* 네비게이션 색상변경 스크립트1 */
    //after
    var $header = $('.header');
    var a = $header.offset().top;
    $(document).scroll(function () {
        if ($(this).scrollTop() > a) {
            $header.css({
                "background": "black",
                "opacity": "0.9"
            });
        } else {
            $header.css({
                "background": "transparent",
                "opacity": "1"
            });
        }
    });


    /* 마우스 오버시 이미지 변경 스크립트 */
    /* cont2 버튼 좌,우 */
    $(function () {
        $(".btnl").hover(function () {
            $(this).attr("src", $(this).attr("src").replace("btn_left_g.png",
                "btn_left_b.png"));
        }, function () {
            $(this).attr("src", $(this).attr("src").replace("btn_left_b.png",
                "btn_left_g.png"));
        });

    });

    $(function () {
        $(".btnr").hover(function () {
            $(this).attr("src", $(this).attr("src").replace("btn_right_g.png",
                "btn_right_b.png"));
        }, function () {
            $(this).attr("src", $(this).attr("src").replace("btn_right_b.png",
                "btn_right_g.png"));
        });
    });

    /* footer sns버튼 */
    $(function () {
        /* 인스타 */

        $(".sns_insta").on('mouseover', function (e) {
            $(this).css("background",
                "transparent url(./img/sns_insta_colored.png) no-repeat center/40px 40px"
            );
        }).on('mouseout', function (e) {
            $(this).css("background",
                "transparent url(./img/sns_insta.png) no-repeat center/40px 40px");
        });
        /* 페북 */
        $(".sns_fb").on('mouseover', function (e) {
            $(this).css("background",
                "transparent url(./img/sns_fb_colored.png) no-repeat center/23px 40px"
            );
        }).on('mouseout', function (e) {
            $(this).css("background",
                "transparent url(./img/sns_fb.png) no-repeat center/23px 40px");
        });
        /* 트위터 */
        $(".sns_tw").on('mouseover', function (e) {
            $(this).css("background",
                "transparent url(./img/sns_tw_colored.png) no-repeat center/40px 40px"
            );
        }).on('mouseout', function (e) {
            $(this).css("background",
                "transparent url(./img/sns_tw.png) no-repeat center/40px 40px");
        });

        /* 텀블러 */
        $(".sns_tbr").on('mouseover', function (e) {
            $(this).css("background",
                "transparent url(./img/sns_tbr_colored.png) no-repeat center/25px 40px"
            );
        }).on('mouseout', function (e) {
            $(this).css("background",
                "transparent url(./img/sns_tbr.png) no-repeat center/25px 40px");
        });

    });


    /* 클릭시 메뉴오픈 */
    var menuopen = {
        'display': 'inline-block',
        'position': 'fixed'
    };
    var menuclose = {
        'display': 'none',
        'position': 'static'
    };

    $(function () {
        $(".icon_menu").click(function () {
            $('#nav').css(menuopen);
        });

        $(".menuclose").click(function () {
            $('#nav').css(menuclose);
        });

    });



    /* bx슬라이더 */
    var b = $('.bxslider').bxSlider({
        auto: true,
        speed: 300,
        pause: 2000,
        mode: 'fade',
        // autoControls: true,
        pager: true,
        controls: false
    });


    //이미지 리로드
    $(window).on('resize', function () {
        if (this.matchMedia("screen and (min-width: 768px)").matches) {
            b.reloadSlider();
        }
    });



});