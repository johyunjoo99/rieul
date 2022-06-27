$(function(){

    //menu 슬라이딩
    $("#menuIcon").click(function(){
        $("#big_nav").slideToggle();
        $("#menuIcon span:first").toggle("fast");
        $("#menuIcon span:last").toggle("fast");
    });


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

    function slideResize(){
        if(window.matchMedia(" (min-width: 0px) and (max-width: 599px)").matches){

            var fullWidth = $("#slide").width();
            var slideWidth = fullWidth / 6
        
            function sponsor(){
                $("#slide").stop().animate({marginLeft: -slideWidth}, function(){
                    $(".slideImg:first").appendTo("#slide");
                    $("#slide").css({marginLeft: 0});
                });
            }
        
            setInterval(sponsor, 5000);

        } else if(window.matchMedia("(min-width: 600px) and (max-width: 799px)").matches){

            var fullWidth = $("#slide").width();
            var slideWidth = fullWidth / 6
        
            function sponsor(){
                $("#slide").stop().animate({marginLeft: -slideWidth}, function(){
                    $(".slideImg:first").appendTo("#slide");
                    $("#slide").css({marginLeft: 0});
                });
            }
        
            setInterval(sponsor, 5000);

        } else if(window.matchMedia("(min-width: 800px) and (max-width: 1199px)").matches){

            var fullWidth = $("#slide").width();
            var slideWidth = fullWidth / 6
        
            function sponsor(){
                $("#slide").stop().animate({marginLeft: -slideWidth}, function(){
                    $(".slideImg:first").appendTo("#slide");
                    $("#slide").css({marginLeft: 0});
                });
            }
        
            setInterval(sponsor, 5000);

        } else{

            var fullWidth = $("#slide").width();
            var slideWidth = fullWidth / 6
        
            function sponsor(){
                $("#slide").stop().animate({marginLeft: -slideWidth}, function(){
                    $(".slideImg:first").appendTo("#slide");
                    $("#slide").css({marginLeft: 0});
                });
            }
        
            setInterval(sponsor, 5000);

        }
    }

    window.addEventListener("resize", slideResize, false);

    slideResize();



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

    function scorllResize(){
        if(window.matchMedia("(min-width: 0px) and (max-width: 599px)").matches){

            $(window).scroll(function(){

                var ws = $(this).scrollTop();
        
                var contact = $("#contact_info").offset().top;
                if(ws > contact - 500){
                    $("#contact_info").css("width", "90%")
                    $("#contact_info h2, #contact_info p, #contact .button").css("transition-delay", "0.3s");
                    $("#contact_info h2, #contact_info p, #contact .button").css("opacity", 1);
                }
        
                var campaign = $("#campaign_info").offset().top;
                if(ws > campaign - 500){
                    $("#campaign_info").css("width", "90%");
                    $("#campaign_info h2, #campaign_info p, #campaign .button").css("transition-delay", "0.3s");
                    $("#campaign_info h2, #campaign_info p, #campaign .button").css("opacity", 1);
                }
            });

        } else if(window.matchMedia("(min-width: 600px) and (max-width: 799px)").matches){

            $(window).scroll(function(){

                var ws = $(this).scrollTop();
        
                var contact = $("#contact_info").offset().top;
                if(ws > contact - 500){
                    $("#contact_info").css("width", "85%")
                    $("#contact_info h2, #contact_info p, #contact .button").css("transition-delay", "0.3s");
                    $("#contact_info h2, #contact_info p, #contact .button").css("opacity", 1);
                }
        
                var campaign = $("#campaign_info").offset().top;
                if(ws > campaign - 500){
                    $("#campaign_info").css("width", "85%");
                    $("#campaign_info h2, #campaign_info p, #campaign .button").css("transition-delay", "0.3s");
                    $("#campaign_info h2, #campaign_info p, #campaign .button").css("opacity", 1);
                }
            });

        } else if(window.matchMedia("(min-width: 800px) and (max-width: 1199px)").matches){

            $(window).scroll(function(){

                var ws = $(this).scrollTop();
        
                var contact = $("#contact_info").offset().top;
                if(ws > contact - 500){
                    $("#contact_info").css("width", "50%")
                    $("#contact_info h2, #contact_info p, #contact .button").css("transition-delay", "0.3s");
                    $("#contact_info h2, #contact_info p, #contact .button").css("opacity", 1);
                }
        
                var campaign = $("#campaign_info").offset().top;
                if(ws > campaign - 500){
                    $("#campaign_info").css("width", "55%");
                    $("#campaign_info h2, #campaign_info p, #campaign .button").css("transition-delay", "0.3s");
                    $("#campaign_info h2, #campaign_info p, #campaign .button").css("opacity", 1);
                }
            });

        } else{

            $(window).scroll(function(){

                var ws = $(this).scrollTop();
        
                var contact = $("#contact_info").offset().top;
                if(ws > contact - 500){
                    $("#contact_info").css("width", "50%")
                    $("#contact_info h2, #contact_info p, #contact .button").css("transition-delay", "0.3s");
                    $("#contact_info h2, #contact_info p, #contact .button").css("opacity", 1);
                }
        
                var campaign = $("#campaign_info").offset().top;
                if(ws > campaign - 500){
                    $("#campaign_info").css("width", "55%");
                    $("#campaign_info h2, #campaign_info p, #campaign .button").css("transition-delay", "0.3s");
                    $("#campaign_info h2, #campaign_info p, #campaign .button").css("opacity", 1);
                }
            });
        }

    }

    window.addEventListener("resize", scorllResize, false);

    scorllResize();


});