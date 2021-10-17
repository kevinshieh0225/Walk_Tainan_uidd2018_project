var music=1;
var sound=1;
console.log('setting ready')
var audio = document.getElementById("midi");
var audio2 = document.getElementById("midi2");
audio.play();
console.log('5 setting ready')
var open1 = document.getElementById("open1");
var open2 = document.getElementById("open2");
var sex;
$(document).ready(function() { 
    console.log('friend_data[0] in setting ' + friend_data[0].username);
    document.getElementById("name").textContent = friend_data[0].username; 
    console.log('friend_data[0] sex in setting ' + friend_data[0].sex);
    if(sexflag == 0)
      sex = friend_data[0].sex;
    //if(friend_data[0].sex==1){
    if(sex == 1){
        document.getElementById('photo_frame').style.backgroundImage="url('pic/boy.png')";
    }
    else if(sex == 2){
        console.log("sex = 2"); 
        document.getElementById('photo_frame').style.backgroundImage="url('pic/girl.png')";
    } 
    $('#top_line_setting').animate({
        marginTop:'0'
    },500,function(){
        $('.setting').fadeIn(500)
    })
		//音效
		document.addEventListener("click", function(){
		    audio2.play();
		});
        //初始音樂位置
    
    if(music_open==1){
        open1.style.opacity=1;
	      open1.style.marginLeft=5.4+"vw";
		    audio.play();
    }
    else{
        open1.style.opacity=0.5;
	      open1.style.marginLeft=0+"vw";
		    audio.pause();
    }
		//
		if(sound_open==1){
		    open2.style.opacity=1;
	      open2.style.marginLeft=5.4+"vw";
		    audio2.src="sound.mp3";
    }
    else{
        open2.style.opacity=0.5;
	      open2.style.marginLeft=0+"vw";
		    audio2.src="#";
    }
	
    $("#previous").click(function(){
        $('body').load('./index_play.html');
    })
    var x=function(){
        if(music_open==0){
            //document.getElementById("open1").style.opacity='1';
            $( "#open1" ).animate({
                opacity: "1",
                marginLeft: "5.4vw"       
            }, 100)
            //document.getElementById("open1").style.marginLeft='5.4vw';
            console.log('open1'+music);
			      audio.play();
			      music_open=1;
            music++;
        }
        else{
            //document.getElementById("open1").style.opacity='0.5';
            //document.getElementById("open1").style.marginLeft='0vw';
            $( "#open1" ).animate({
                opacity: "0.5",
                marginLeft: "0vw"
            }, 100)
            console.log('open2'+music);
			      audio.pause();
			      audio.currentTime = 0;
			      music_open=0;
            music--;
        }
    }
    var y=function(){
        if(sound_open==0){
           //document.getElementById("open2").style.opacity='1';
            //document.getElementById("open2").style.marginLeft='5.4vw';
            $( "#open2" ).animate({
                opacity: "1",
                marginLeft: "5.4vw"
                
            }, 100)
            console.log('open3')
			      sound_open=1;
			      audio2.src="sound.mp3";
            sound++;
        }
        else{
           //document.getElementById("open2").style.opacity='0.5';
            //document.getElementById("open2").style.marginLeft='0vw';
            $( "#open2" ).animate({
                opacity: "0.5",
                marginLeft: "0vw"
                
            }, 100)
            console.log('open4')
			      sound_open=0;
			      audio2.src="#";
            sound--;
        }
    }
    $("#Adjustment_frame1").click(x)
    $("#Adjustment_frame2").click(y)

    //////
    //////
    $("#photo_change_buttom").click(function(){
        sexflag = 1;
        if(sex==1){
            document.getElementById('photo_frame').style.backgroundImage = "url('pic/girl.png')"
            sex = 2;
        }
        else if(sex==2){
            document.getElementById('photo_frame').style.backgroundImage="url('pic/boy.png')"
            sex = 1;
        }
        $.ajax({
            url:'./change_sex',
            type:'POST',
            data:{
              sex : sex,
            },
            success: function(data){
              console.log(data);
            },
            error: function(data){
              console.log("can't change sex");
            }
        })
    })
    //////
    //////
    //////
    $("#ok_buttom").click(function(){
        $('body').load('./index_play.html');
    })
    $("#signout_buttom").click(function(){
        location.href = 'https://luffy.ee.ncku.edu.tw:10095/logout'
    })   
})
