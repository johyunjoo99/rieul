$(function(){

    //menu 슬라이딩
    $("#menuIcon").click(function(){
        $("#big_nav").stop().slideToggle();
        $("#menuIcon span:first").toggle("fast");
        $("#menuIcon span:last").toggle("fast");
    });

});