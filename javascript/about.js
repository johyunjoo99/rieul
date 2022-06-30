$(function(){

    //menu 슬라이딩
    $("#menuIcon").click(function(){
        $("#big_nav").stop().slideToggle();
        $("#menuIcon span:first").toggle("fast");
        $("#menuIcon span:last").toggle("fast");
    });

    //sponsor click effect
    $(".logoImg").click(function(){
        $("#sponsor_photo img").attr("src", "img/about_img/sponsor_img" + ($(this).index()) + ".png");
        $(".noColor").removeClass("hide");
        $(this).children(".noColor").addClass("hide");
        $(".color").removeClass("show");
        $(this).children(".color").addClass("show");
        $("#explain p").text("#" + $(this).children().attr("alt"));     
    });


    $("#sponsor_photo img").mouseenter(function(){
        $("#explain").fadeIn(200);
    });

    $("#explain").mouseleave(function(){
        $(this).fadeOut(200);
    });




    // scroll effect
    function scorllResize(){
        if(window.matchMedia("(min-width: 0px) and (max-width: 599px)").matches){

            $(window).scroll(function(){

                var ws = $(this).scrollTop();

                var brand = $("#brand_intro").offset().top;
                if(ws > brand - 500){
                    $("#brand_intro").css("width", "80%");
                    $("#brand_intro img, #brand_intro h1, #brand_intro p").css("transition-delay", "0.3s");
                    $("#brand_intro img, #brand_intro h1, #brand_intro p").css("opacity", 1);
                };

                var logos = $("#logos").offset().top;
                if(ws > logos - 500){
                    $("#logos").css("width", "80%");
                    $("#logos h1, .logoImg, #logos p").css("transition-delay", "0.3s");
                    $("#logos h1, .logoImg, #logos p").css("opacity", 1);
                };

            });

        } else if(window.matchMedia("(min-width: 600px) and (max-width: 799px)").matches){

            $(window).scroll(function(){

                var ws = $(this).scrollTop();

                var brand = $("#brand_intro").offset().top;
                if(ws > brand - 500){
                    $("#brand_intro").css("width", "60%");
                    $("#brand_intro img, #brand_intro h1, #brand_intro p").css("transition-delay", "0.3s");
                    $("#brand_intro img, #brand_intro h1, #brand_intro p").css("opacity", 1);
                };

                var logos = $("#logos").offset().top;
                if(ws > logos - 500){
                    $("#logos").css("width", "65%");
                    $("#logos h1, .logoImg, #logos p").css("transition-delay", "0.3s");
                    $("#logos h1, .logoImg, #logos p").css("opacity", 1);
                };

            });

        } else if(window.matchMedia("(min-width: 800px) and (max-width: 1199px)").matches){

            $(window).scroll(function(){

                var ws = $(this).scrollTop();

                var brand = $("#brand_intro").offset().top;
                if(ws > brand - 500){
                    $("#brand_intro").css("width", "55%");
                    $("#brand_intro img, #brand_intro h1, #brand_intro p").css("transition-delay", "0.3s");
                    $("#brand_intro img, #brand_intro h1, #brand_intro p").css("opacity", 1);
                };

                var logos = $("#logos").offset().top;
                if(ws > logos - 500){
                    $("#logos").css("width", "60%");
                    $("#logos h1, .logoImg, #logos p").css("transition-delay", "0.3s");
                    $("#logos h1, .logoImg, #logos p").css("opacity", 1);
                };

            });

        } else{

            $(window).scroll(function(){

                var ws = $(this).scrollTop();

                var brand = $("#brand_intro").offset().top;
                if(ws > brand - 500){
                    $("#brand_intro").css("width", "45%");
                    $("#brand_intro img, #brand_intro h1, #brand_intro p").css("transition-delay", "0.3s");
                    $("#brand_intro img, #brand_intro h1, #brand_intro p").css("opacity", 1);
                };

                var logos = $("#logos").offset().top;
                if(ws > logos - 500){
                    $("#logos").css("width", "53%");
                    $("#logos h1, .logoImg, #logos p").css("transition-delay", "0.3s");
                    $("#logos h1, .logoImg, #logos p").css("opacity", 1);
                };

            });

        }

    }

    window.addEventListener("resize", scorllResize, false);

    scorllResize();

});