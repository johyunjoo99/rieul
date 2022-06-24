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
            $("#slide").stop().css({marginLeft: 0});
        });
    }

    setInterval(sponsor, 5000);


    // 스폰서 hover effect
    $(".nocolor").mouseover(function(){
        $(this).hide();
        $(this).prev(".color").show();
    });

    $(".color").mouseout(function(){
        $(this).hide();
        $(this).next(".nocolor").show();
    });



    // scroll effect

    $(window).scroll(function(){

        var ws = $(this).scrollTop();

        var contact = $("#contact_info").offset().top;
        if(ws > contact - 500){
            $("#contact_info").css("width", "50%")
        }

        var campaign = $("#campaign_info").offset().top;
        if(ws > campaign - 500){
            $("#campaign_info").css("width", "55%");
            $("#campaign_info h2, #campaign_info p");
        }
    });
});