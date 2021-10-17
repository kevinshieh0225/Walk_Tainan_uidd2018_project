//先在這load google map api和位置
//choose route
var route = 1;
//目前經緯度
var now_lat,now_lng;
var mapOptions;
console.log('choose ready')
var road = 0;
//音樂
var music_open=0;
var sound_open=0;
var sexflag =0;

$(document).ready(function() {  
    console.log('road:',road)
    var space=document.getElementById("space");
    var manager = new Hammer(space);
    var flag=0;
  
    //check_friend();

    $('#top_line').animate({
        marginTop:'0'
    },500,function(){
        $('.choosepage').fadeIn(500)
    })

    $(function(){
        manager.on("swipeleft", function(ev) { 
            if(road<3){
                if(road==0){
                  $('.choosepage_anping').fadeIn(500)
                }
                else if(road==1){
                  $('.choosepage_anping').fadeOut(500)
                  $('.choosepage_chihkan').fadeIn(500)
                }
                else if(road==2){
                  $('.choosepage_chihkan').fadeOut(500)
                  $('.choosepage_confucious').fadeIn(500)
                }
                $("#space").animate({left: "-=78vw"}, 500)
                $("#dot").animate({left: "+=4.5vw"}, 500)   
                road++;
                console.log('road:',road) 
            }        
        }); 
        manager.on("swiperight", function(ev) {  
            if(road>0){
                if(road==1){
                    $('.choosepage_anping').fadeOut(500)
                }
                else if(road==2){
                    $('.choosepage_anping').fadeIn(500)
                    $('.choosepage_chihkan').fadeOut(500)
                }
                else if(road==3){
                    $('.choosepage_chihkan').fadeIn(500)
                    $('.choosepage_confucious').fadeOut(500)
                }
                $("#space").animate({left: "+=78vw"}, 500)  
                $("#dot").animate({left: "-=4.5vw"}, 500) 
                road--;
                console.log('road:',road)
            }   
        });  
    })  
    $("#setting").click(function(){
        $('.choosepage').fadeOut(500).promise().done(function(){
            $('#top_line').animate({
                marginTop:'-14vw'
            },500,function(){
                $('body').load('./index_setting.html');
            })
        })
    })
    $("#ok_buttom_setting").click(function(){
        if(road<=0) console.error('no');
        else{
            $('.choosepage_special').fadeOut(500);
            $('.choosepage').fadeOut(500).promise().done(function(){
                $('#top_line').animate({
                    marginTop:'-14vw'
                },500).promise().done(function(){
                    $('body').load('../index_play.html');
                })
            })
        }
    })
    check_friend();
})

var friend_data;
function check_friend()
{
    $.ajax({
        url:'./check_friend',
        type:'POST',
        data:{
            road: road,
        },
        success: function(data){
            console.log("---------------");
            friend_data = data;
            console.log(friend_data);
            console.log("---------------");
        },
        error: function(){
            alert("fail");
        }
    })
}

function initialize(){
    showPosition();
}
/*
function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
  else {
    console.log("Geolocation is not supported")
  }
} 
*/
function showPosition(position) {
  /*
  console.log("Lat: " + position.coords.latitude)
  console.log("Long: " + position.coords.longitude)
  now_lat = position.coords.latitude;
  now_lng = position.coords.longitude;  
  console.log("static lat= " + now_lat);
  console.log("static lng= " + now_lng);
  */
    mapOptions = {
        center: { lat: 23.001865, lng: 120.158404},
        zoom: 16,
        styles: [
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "poi.business",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "transit",
                "stylers": [{"visibility": "off"}]
            }
        ]
    };
}
