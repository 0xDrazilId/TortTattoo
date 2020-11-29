$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 250) {
            $("#navbar").css('background', 'rgba(0,0,0,.9)');
        } else {
            $("#navbar").css('background', 'linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,1))');
        }
        // console.log(scroll_pos);
    });
});