document.querySelector("#login").addEventListener("click", function(){
  location.href = 'https://luffy.ee.ncku.edu.tw:10095/signin';
});
document.querySelector("#signup").addEventListener("click", function(){
  location.href = 'https://luffy.ee.ncku.edu.tw:10095/signup';
});
$(document).ready(function() { 
  var space=document.getElementById("back");
  var manager = new Hammer(space);
  var flag=0;

  $(function(){
      manager.on("swipeleft", function(ev) { 
          if(flag<2){
            if(flag==0){
              $('#intro_text_1').fadeOut(500)
              $('#intro_text_2').fadeIn(500)
            }
            else if(flag==1){
              $('#intro_text_2').fadeOut(500)
              $('#intro_text_3').fadeIn(500)
            }
            $("#dot_1").animate({left: "+=4.5vw"}, 500)   
            flag++;
            console.log('flag:',flag) 
          }        
      }); 
      manager.on("swiperight", function(ev) {  
          if(flag>0){
            if(flag==1){
              $('#intro_text_1').fadeIn(500)
              $('#intro_text_2').fadeOut(500)
            }
            else if(flag==2){
              $('#intro_text_2').fadeIn(500)
              $('#intro_text_3').fadeOut(500)
            } 
            $("#dot_1").animate({left: "-=4.5vw"}, 500) 
            flag--;
            console.log('flag:',flag)
          }   
      });  
  })  
})
