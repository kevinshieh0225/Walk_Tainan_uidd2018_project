var mission_page=0;
var story_page=0;
$(document).ready(function() {  

    var story_back_buttom=document.getElementById("story_back_buttom");

//下面那一排
    $("#mission_buttom").click(function(){
        $("mission").css("display","block");
        $("story").css("display","none");

        setTimeout(function(){
        $("#story_background").animate({
            opacity: 1,
            bottom: "12vw"
        }, 600)},0);
        mission_page=1;
        story_page=0;
        document.getElementById("mission_buttom").src='pic/mission_buttom_enter.png';
        document.getElementById("story_buttom").src='pic/story_buttom.png';
        document.getElementById("friend_buttom").src='pic/friend_buttom.png';
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#story_buttom").click(function(){
        document.getElementById("story_background").style.display="block";
        $("story").css("display","block");
        $("mission").css("display","none");
        document.getElementById("story_buttom").src='pic/story_buttom_enter.png';
        document.getElementById("friend_buttom").src='pic/friend_buttom.png';
        document.getElementById("mission_buttom").src='pic/mission_buttom.png';
        story_page=1;
        mission_page=0;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }) 
    $("#friend_buttom").click(function(){
        document.getElementById("friend_buttom").src='pic/friend_buttom_enter.png';
        document.getElementById("story_buttom").src='pic/story_buttom.png';
        document.getElementById("mission_buttom").src='pic/friend_buttom.png';
    })
//下面那一排

$("#story_back_buttom").click(function(){
    if(mission_page!=0){
        if(mission_page==2){
            $(".mission_anping_page1").css("display","inline-block");
            $(".mission_anping_page2").css("display","none");
            story_back_buttom.style.backgroundImage='url(pic/delete_buttom.png)';
            mission_page=1;
            mission_select=0;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
            console.log(story_back_buttom.style.backgroundImage)
        }
        else if(mission_page==3){
            $(".mission_anping_page2").css("display","inline-block");
            $(".mission_anping_page3").css("display","none");
            mission_page=2;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
        else{
            document.getElementById("story_background").style.display="none";
            $("mission").css("display","none");
            document.getElementById("mission_buttom").src='pic/mission_buttom.png';
            mission_page=0;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
    }
    else if(story_page!=0){
        document.getElementById("story_background").style.display="none";
        $("story").css("display","none");
        document.getElementById("story_buttom").src='pic/story_buttom.png';
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        story_page=0;
    }
}) 


    $("#previous").click(function(){
        location.href='https://luffy.ee.ncku.edu.tw/~kevinshieh0225/tainan/index.html';
    })

//設定
    $("#setting").click(function(){
        location.href='https://luffy.ee.ncku.edu.tw/~kevinshieh0225/tainan/index_setting.html';
    })
})