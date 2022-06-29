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
    });
});