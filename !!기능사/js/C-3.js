$(function () {

    //헤더 메뉴 hover 나타나기(오른쪽)
    $('.gnb1 .depth01 > a').mouseenter(function(){
        $('.gnb1 .depth02').css({
            'display':'none'
        })

        $(this).next('.gnb1 .depth02').css({
            'display':'block'
        })
    });

    $('.gnb1').mouseleave(function(){
        $('.gnb1 .depth02').css({
            'display':'none'
        })
    });

    
    //1차메뉴 밑으로 2차메뉴 나타나기
    $('.gnb2 .depth01 > a').mouseenter(function(){ 
        $('.gnb2 .depth02').stop().slideUp();
        $(this).next('.gnb2 .depth02').stop().slideDown();
    });
    $('.gnb2').mouseleave(function(){
        $('.gnb2 .depth02').slideUp();
    });



    //메인비주얼 슬라이드 (좌우)------------------------------------
    //setInterval 시간설정하여 반복적으로 움직이도록 함. 3초마다 돌아감/3000 = 3초
    setInterval(function(){
        $('.main_slider .slide_wrap').animate({'margin-left':'-100%'},function(){
            $('.main_slider .slide:first').appendTo('.main_slider .slide_wrap')
            //첫번째 .slide뒤에 .slide_wrap 추가
            $('.main_slider .slide_wrap').css({'margin-left':'0'})
            //추가된 .slide_wrap의 위치 0
        })
    },3000)


    //메인비주얼 슬라이드 (위아래)------------------------------------
    setInterval(function(){
        $('.main_slider2 .slide_wrap').animate({'margin-top':'-350px'},function(){
            $('.main_slider2 .slide:first').appendTo('.main_slider2 .slide_wrap')
            $('.main_slider2 .slide_wrap').css({'margin-top':'0%'})
        })
    },3000)

});

