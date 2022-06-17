$(function(){


    // 팝업 block
    $(".zoom").click(function(){
        $("#popup").fadeIn();
    });

    $(".close").click(function(){
        $("#popup").fadeOut();
    });

    


    // 팝업 슬라이드 hover effect
    $(".noClick").mouseenter(function(){
        $(this).hide();
    });

    $(".rows > img").mouseleave(function(){
        $(this).prev(".noClick").show();
    });


    
});