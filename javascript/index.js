$(function(){

    //menu 슬라이딩
    $("#menuIcon").click(function(){
        $("#big_nav").stop().slideToggle();
        $("#menuIcon span:first").toggle("fast");
        $("#menuIcon span:last").toggle("fast");
    });

    $(window).scroll(function(){
        $("#big_nav").hide();
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

    


    // 팝업 슬라이드 click effect 
    $(".rows").click(function(){
        $("#slide_img img").attr("src", "img/index_img/popup" + ($(this).index()+1) + ".jpg")
        $(".noClick").removeClass("active");
        $(this).children(".noClick").addClass("active");
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