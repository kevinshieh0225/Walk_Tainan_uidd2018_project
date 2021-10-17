//使用者 user_data
//被搜尋者 search_data
var user_id;   //temp
var search_id;
var search_data;
var user_one_id;
var user_two_id;
var action_user_id;
var count;
var text;
console.log('friend ready')
$(document).ready(function() { 
    count=0;
    $(function(){
        for(count=1;count<friend_data.length;count++){
            console.log('count')
                console.log(count)
                $('#friend_state_page').append('<img src="pic/boy.png" class="friend_browse_picture">',
                '<div class="friend_intro_frame"></div>',
                '<br>'
                )
                if(friend_data[count].sex==1) $('.friend_browse_picture:last').attr('src','pic/boy.png')
                else $('.friend_browse_picture:last').attr('src','pic/girl.png')
                if(friend_data[count].route==1){
                    text='正在探索安平線'
                }
                else if(friend_data[count].route==2){
                    text='正在探索赤崁線'
                }
                else if(friend_data[count].route==3){
                    text='正在探索孔廟線'
                }
                $('.friend_intro_frame:last').html(`<h5 class='friend_intro_frame_username'>${friend_data[count].username}</h5><span class='friend_intro_frame_route'>${text}</span>`)
        }    
    })
    

    $('#friend_state_buttom').click(()=>{
        document.getElementById('friend_state_buttom').style.display='none'
        document.getElementById('friend_state_buttom_enter').style.display='block'
        document.getElementById('friend_search_buttom').style.display='block'
        document.getElementById('friend_search_buttom_enter').style.display='none'
        $('#friend_search_page').fadeOut(500)
        setTimeout(()=>{
            $('#friend_state_page').fadeIn(500)
        },500)
    })
    $('#friend_search_buttom').click(()=>{
        document.getElementById('friend_state_buttom').style.display='block'
        document.getElementById('friend_state_buttom_enter').style.display='none'
        document.getElementById('friend_search_buttom').style.display='none'
        document.getElementById('friend_search_buttom_enter').style.display='block'
        $('#friend_state_page').fadeOut(500)
        setTimeout(()=>{
            $('#friend_search_page').fadeIn(500)
        },500)
    })
    $('#friend_search_icon').click(function() {
        var search_email = $("#search_input").val();
        $("#ajax_content").text("搜尋中...");
        $("#ajax_content").fadeIn(500);
        
        setTimeout(function() {
          console.log("email in search user = " + search_email); 
          console.log("email in friend = " + friend_data[0].email);
          if(search_email == friend_data[0].email){
            $("#ajax_content").text('請勿搜尋自己');
          }
          else{
            $.ajax({
                url: './ajax_data',
                type: 'POST',
                data:{
                //search_email : $("#ajax_form input[name='Student_ID1']").val(),
                  search_email : search_email,
                },
                success: function(data){
                    console.log(data);
                    if(data[0]){
                        //紀錄搜尋者的data
                        search_data = data;
                        console.log("search user id = " + data[0].id);
                        console.log("search user sex =" + data[0].sex);
                        //var sex=1;
                        $("#ajax_content").text('');
                        console.log('2');
                        if(data[0].sex==1){
                            document.getElementById('search_browse').src='pic/boy.png'
                        }
                        else if(data[0].sex==2){
                            document.getElementById('search_browse').src='pic/girl.png'
                        }
                        $("#friend_search_name").text(data[0].username)
                        $("#friend_search_info").text(data[0].email)
                        console.log('1');
                        $("#search_browse").fadeIn(500)
                        $("#search_frame").fadeIn(500)
                    }
                    else{
                      $("#ajax_content").text("並未找到該用戶");  
                    }
                },  
                error:function(data){
                  $("#ajax_content").text("並未找到該用戶");
                }
            })
          }    
        }, 4000);
        /*$.ajax({
            url: './ajax_data',
            type: 'POST',
            data:{
            //search_email : $("#ajax_form input[name='Student_ID1']").val(),
              search_email : search_email,
            },
            success: function(data){
            //$("#sudent_form1").empty();
                console.log(data);
                if(data[0].id){
                    //紀錄搜尋者的data
                    search_data = data;
                    console.log(data[0].id);
                    $("#ajax_content").text("id =  " + data[0].id + " name   " + data[0].username);
                }
                else{
                    console.log("no this man");
                }
            }  
        }) */   
    })
    $('#plus').click(function() {
        if($("#plus").attr('src')=='pic/friend/add_buttom.png'){
            user_id = user_data.id;         //set user id
            search_id = search_data[0].id;     //set search id
            console.log("plusplusplusplusplusplusplusplus");
            console.log("user id = " + user_id);
            console.log("search id = " + search_id);
          
            if(user_id < search_id) {
                user_one_id = user_id;
                user_two_id = search_id;
            }
            else {
                user_one_id = search_id;
                user_two_id = user_id;
            }
    
            $.ajax({
                url: './plus_friend',
                type: 'POST',
                data:{
                    user_one_id: user_one_id,
                    user_two_id: user_two_id,
                    status: 1,
                    action_user_id: user_id,
                },
                success: function(data){
                $('#friend_state_page').append('<img src="pic/boy.png" class="friend_browse_picture">',
                '<div class="friend_intro_frame"></div>',
                '<br>'
                )
                if(search_data[0].sex==1) $('.friend_browse_picture:last').attr('src','pic/boy.png')
                else $('.friend_browse_picture:last').attr('src','pic/girl.png')
                if(search_data[0].route==1){
                    text='正在探索安平線'
                }
                else if(search_data[0].route==2){
                    text='正在探索赤崁線'
                }
                else if(search_data[0].route==3){
                    text='正在探索孔廟線'
                }
                $('.friend_intro_frame:last').html(`<h5 class='friend_intro_frame_username'>${search_data[0].username}</h5><span class='friend_intro_frame_route'>${text}</span>`)
                count++;
                $("#plus").attr('src','pic/friend/add_finish_icon.png');
                }
            })
        }
        
    
    })
})
