$(function(){


    // 팝업 block
    $(".container").click(function(){
        $("#popup").fadeIn();

        $("#slide_img img").attr("src","img/index_img/popup" + ($(this).index()+1) + ".jpg");
        $(".rows").children(".noClick").removeClass("active");
        $(".rows").eq($(this).index()).children(".noClick").addClass("active");
    });

    $(".close").click(function(){
        $("#popup").fadeOut();
    });

    


    // 팝업 슬라이드 hover effect
    $(".rows").click(function(){

    }); 

    $(".rows").click(function(){
        $("#slide_img img").attr("src", "img/index_img/popup" + ($(this).index()+1) + ".jpg")
        $(".noClick").removeClass("active");
        $(this).children(".noClick").addClass("active");
    });


    // 스폰서 슬라이드
    var fullWidth = $("#slide").width();
    var slideWidth = fullWidth / 6

    function sponsor(){
        $("#slide").stop().animate({marginLeft: -slideWidth}, function(){
            $(".slideImg:first").appendTo("#slide");
            $("#slide").css({marginLeft: 0});
        });
    }

    setInterval(sponsor, 5000);
});