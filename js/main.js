$( document ).ready(function() {

    $('#menutoggle').on('click', function() {
        $(this).toggleClass('is-active');
        $('ul.menu').toggleClass('is-active');
    });

    $( ".tl-ball, .work__job" ).hover(function(e) {
        
        var jobid = this.id;

        if($(this).hasClass("tl-ball")){
            jobid = jobid.replace('ball__', '');
        }

        if($(this).hasClass("work__job")){
            jobid = jobid.replace('work__', '');
        }
        
        $("#ball__"+jobid).toggleClass('is-hover');
        $("#work__"+jobid).toggleClass('is-hover');
    });

    $('.project').on('click', function() {
        $('#wrapper').css({"overflow": "hidden", "max-height": "100vh"});
        $('.projectmorewrapper').addClass('is-active');
        projectid = $(this).attr("data-projecttrigger");
        $('#project__'+projectid).addClass('is-active');

        $('#project__'+projectid+' .projectmore__anotherimage:first').addClass('is-active');
        $('.project_image_large').removeClass('is-active');
        $('img[data-imageproject='+projectid+'][data-imagelarge=1]').addClass('is-active');
    });

    $('.projectmore__close').on('click', function() {
        $('#wrapper').css({"overflow": "", "max-height": ""});
        $('.projectmorewrapper').removeClass('is-active');
        $('.projectmore').removeClass('is-active');
        $('html, body').animate({
            scrollTop: $("section.projects").offset().top
        }, 10);
        $('.projectmore__anotherimage').removeClass('is-active');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 150){  
            $('header').addClass("scrolled");
        }
        else{
            $('header').removeClass("scrolled");
        }
    });

    $('.projectmore__anotherimage').on('click', function() {
        $('.projectmore__anotherimage').removeClass('is-active');
        $(this).addClass('is-active');
        anotherproject = $(this).attr("data-imageproject");
        anotherimage = $(this).attr("data-imagelarge");
        $('.project_image_large').removeClass('is-active');
        $('img[data-imageproject='+anotherproject+'][data-imagelarge='+anotherimage+']').addClass('is-active');
    });

});