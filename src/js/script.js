$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");

        }
    });

    //toggle menu
    $('.menu_button').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu_button i').toggleClass("active");
    });


    let options = {
        startAngle: -1.55,
        size: 126,
        value: 0.85,
        fill: {gradient: ['#0ff5ef', '#ac0276', "#f634e4"]}
    }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',
        function(event, progress, stepValue){
            $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
        });
    $(".java .bar").circleProgress({
        value: 0.70
    });
    $(".html .bar").circleProgress({
        value: 0.65
    });
    $(".sql .bar").circleProgress({
        value: 0.50
    });
    $(".js .bar").circleProgress({
        value: 0.20
    });
    $(".hb .bar").circleProgress({
        value: 0.55
    });
    $(".spring .bar").circleProgress({
        value: 0.00
    });


});