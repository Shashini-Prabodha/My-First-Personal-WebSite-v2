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


});