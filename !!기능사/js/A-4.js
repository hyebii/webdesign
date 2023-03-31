$(function () {
    //2차메뉴
    $('.depth01').mouseenter(function(){
        $('.depth02, .bg').stop().slideDown();
    });

    $('.depth01').mouseleave(function(){
        $('.depth02, .bg').stop().slideUp();
    });

    //메인비주얼 슬라이드------------------------------------
    $('.slide:gt(0)').hide()
    setInterval(function () {
        $('.slide:first').fadeOut(1500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slide_wrap')
    }, 3000);

    //탭메뉴
    $('.tab_menu li').click(function(){
        $('.tab_menu li').removeClass('active');
        $(this).addClass('active');

        $('.tab_box > div').removeClass('active');
        $('.tab_box > div').eq($(this).index()).addClass('active');
    });
  

    //팝업창
    $('.tab_box .news li.click').click(function(){
        $('.popup').css({
            'display' : 'block'
        })
    });

    $('.popup .btn').click(function(){
        $('.popup').css({
            'display' : 'none'
        })
    });
});