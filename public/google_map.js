//play.css
//index_play.html
//google_map.js

/*
route
1:安平
2:赤崁
3:
*/

var anping_mission = [];
var chihkan_mission = [];
var chihkan_point = [];
var confucious_mission = [];
var confucious_point = [];
var anping_minor = [];
var chihkan_minor = [];
var confucious_minor = [];
var mission_done;
var mission_option;
var now_lat,now_lng;
var user_data;
var i;
$(document).ready(function() {  
  //var x = document.getElementById("demo"); 
  var map;
  var treehouse;
  var wanghouse;
  var shop;
  var temple;
  var castle;
  route = (road % 3);
  //route = 0;     //暫設定為孔廟線
  for(i=1;i<=6;i++){
    anping_mission[i] = 0;
    chihkan_mission[i] = 0;
    confucious_mission[i] = 0;
  }
  console.log("in google js road = " + road);
  getmission(route); 
  
  
  
  //console.log("user id =  " + user_data[0].id);
  //console.log("route in google js " + route);
  
})


function getmission(route){
  console.log('route = ' + route);
  $.ajax({
    url:'./choosepage',
    type:'POST',
    data:{
      route : route,
    },
    success: function(data) {
      user_data = data;
      //讓google.js也可以用user_data;
      //global.user_data = user_data;
      console.log(data);
      console.log('user id = ' + user_data.id);
      console.log('user name = ' + user_data.username);
      console.log('anping_mission1 = ' + user_data.anping_mission1);
      choose_route();
    },
    error: function(){
      alert("recieve user_data  fail");
    }
  })
}

function choose_route(){
  anping_mission[1] = user_data.anping_mission1;
  anping_mission[2] = user_data.anping_mission2;
  anping_mission[3] = user_data.anping_mission3;
  anping_mission[4] = user_data.anping_mission4;
  anping_mission[5] = user_data.anping_mission5;
  anping_mission[6] = user_data.anping_mission6;
  chihkan_mission[1] = user_data.chihkan_mission1;
  chihkan_mission[2] = user_data.chihkan_mission2;
  chihkan_mission[3] = user_data.chihkan_mission3;
  chihkan_mission[4] = user_data.chihkan_mission4;
  chihkan_mission[5] = user_data.chihkan_mission5;
  chihkan_mission[6] = user_data.chihkan_mission6;
  confucious_mission[1] = user_data.confucious_mission1;
  confucious_mission[2] = user_data.confucious_mission2;
  confucious_mission[3] = user_data.confucious_mission3;
  confucious_mission[4] = user_data.confucious_mission4;
  confucious_mission[5] = user_data.confucious_mission5;
  confucious_mission[6] = user_data.confucious_mission6;
  switch(route)
  {
    case 1:
      for(i=1;i<=6;i++){
        console.log("anping " + i + "= " + anping_mission[i]);
      }
      set_anping_googlemap();
      break;
    case 2:  
      for(i=1;i<=6;i++){
        console.log("chihkan " + i + "= " + chihkan_mission[i]);
      }
      set_chihkan_googlemap();  
      break;
    case 0:
      for(i=1;i<=6;i++){
        console.log("confucious " + i + "= " + confucious_mission[i]);
      }
      set_confucious_googlemap();
      break;
    default:
      alert("route wrong");
  }
}

function set_anping_googlemap()
{
  map = new google.maps.Map(
    document.getElementById('google_map'),mapOptions
  );
  console.log("set anping"); 
   //MARKER
  //德記洋行 安平樹屋
  treehouse = new google.maps.Marker({ 
    
    position:{lat:23.003360, lng:120.159794},
    map: map,
    title: '德記洋行',
    animation: google.maps.Animation.DROP
  });
  //點座標可以產生事件
  treehouse.addListener('click',function(){
    if(anping_mission[1]>0) $( "#google_map" ).effect( "shake" ,{ distance: 3});
        else if(road!=1) $( "#google_map" ).effect( "shake" ,{ distance: 3});
        else{
            mission_picture.src='pic/anping_picture/anping1_picture1.jpg';
            $('.mission_page2_title').text("德記洋行、安平樹屋");
            $('#mission_page2_word').html(`◆ 週一至週日08:00~18:00 <br>◆ 708 臺南市安平區古堡街108號<br>◆ 06-3913901<br>`);
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/anping_picture/anping1_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/anping_picture/anping1_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/anping_picture/anping1_picture1.jpg';
            $('#mission_page2_intro_word1').text("位在安平樹屋旁，有著純白色外觀的洋式建築就是英商德記洋行，是英商德記洋行在安平開港後於台南安平所設立的據點，為當時的五大洋行之一，早期港運尚能通行時，位在港邊的德記洋行主要業務是出口糖、樟腦與茶葉，並輸入鴉片，是繁盛一時的重要商業據點。");
            $('#mission_page2_intro_word2').text("樹屋位於德記洋行後面，原是德記洋行的倉庫，大約建於十九世紀末及日治初期，此處曾做為「大日本鹽業株式會社」出張所倉庫，現況規模即為日本人增建。");
            $('#mission_page2_intro_word3').text("經百餘年歲月滄桑後，倉庫牆面滿佈榕樹盤據的氣根，高聳的榕樹茂密的樹冠彷彿成為倉庫的屋頂，也讓安平樹屋擁有難得一見的外觀及神秘氣息，形成特有的屋樹共生奇景。");
            setTimeout(()=>{
                $("#story_background").animate({
                  bottom:'12vw'
                },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=1;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }
  });

  //王雞屎洋樓 
  wanghouse = new google.maps.Marker({ 
    position:{lat:23.000985, lng:120.159703},
    map: map,
    title: '王雞屎洋樓',
    animation: google.maps.Animation.DROP 
  });
  wanghouse.addListener('click',function(){
    if(anping_mission[2]>0) $( "#google_map" ).effect( "shake" ,{ distance: 3});
    else if(road!=1) $( "#google_map" ).effect( "shake" ,{ distance: 3});
    else{
        mission_picture.src='pic/anping_picture/anping2_picture1.jpg';
        $('.mission_page2_title').text("王雞屎洋樓");
        $('#mission_page2_word').html(`◆ 開放時間︰私宅僅開放外觀<br>◆ 地址︰708 臺南市安平區國勝路35巷2號<br>◆ 電話︰06-2281382（安平旅客服務中心）`);
        story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
        document.getElementById('mission_page2_intro_picture1').src='pic/anping_picture/anping2_picture2.jpg';
        document.getElementById('mission_page2_intro_picture2').src='pic/anping_picture/anping2_picture3.jpg';
        document.getElementById('mission_page2_intro_picture3').src='pic/anping_picture/anping2_picture1.jpg';
        $('#mission_page2_intro_word1').text("許多遊客來到安平總會被王雞屎洋樓這個名字給逗笑，思索著為何如此漂亮的老屋會有著這麼鄉土的名字，建於1937年的王雞屎洋樓是當時安平最為豪華的宅邸，在一片閩式平房建築中有如鶴立雞群般的獨特，會得此名稱就是因為屋主的名字就是王雞屎，王雞屎先生在日治時期承攬日本鹽業會社的搬運工作致富，遂建此洋樓居住。");
        $('#mission_page2_intro_word2').text("兩層樓的建築已是當時安平的最高建物，後來二戰爆發，為避免洋樓顯眼的外觀成為盟軍轟炸對象，日人將洋樓以柏油漆成黑色，至今還能稍微見到當初的漆痕。");
        $('#mission_page2_intro_word3').text("洋樓旁特別的石椅，是早期往來黑水溝的船隻的壓艙石，在安平常見這樣的壓艙石，有的拿來當石階、踏板，有的隨意擺在庭院，讓遊客逛累了，可以在上面稍作休息。");
        setTimeout(()=>{
          $("#story_background").animate({
            bottom:'12vw'
          },500)
        },200)
        setTimeout(()=>{
          console.log('done')
          $("#mission_page").fadeIn(500);
          $("#mission_page2_dot").fadeIn(500);
          $("#mission_page2_choice").fadeIn(500);
        },700)
        mission_page=2.5;
        mission_select=2;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }
  });
  
  //夕遊出張所
  shop = new google.maps.Marker({ 
    position:{lat:23.002405, lng:120.156332},
    map: map,
    title: '夕遊出張所',
    animation: google.maps.Animation.DROP 
  });
  shop.addListener('click',function(){
    if(anping_mission[3]>0) $( "#google_map" ).effect( "shake" ,{ distance: 3});
    else if(road!=1) $( "#google_map" ).effect( "shake" ,{ distance: 3});
    else{
        mission_picture.src='pic/anping_picture/anping3_picture1.jpg';
        $('.mission_page2_title').text("夕遊出張所");
        $('#mission_page2_word').html(`◆ 平日︰10:00~18:00、假日︰10:00~19:00<br>◆ 708臺南市安平區安平路古堡街196號<br>◆ 06-3911088`);
        story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
        document.getElementById('mission_page2_intro_picture1').src='pic/anping_picture/anping3_picture2.jpg';
        document.getElementById('mission_page2_intro_picture2').src='pic/anping_picture/anping3_picture3.jpg';
        document.getElementById('mission_page2_intro_picture3').src='pic/anping_picture/anping3_picture1.jpg';
        $('#mission_page2_intro_word1').text("夕遊出張所位於鹽神白沙灘公園後方，佔地約百坪。原為臺灣總督府專賣局台南支局所成立的安平支局，後因組織精簡之故改名為「臺灣總督府專賣局台南支局安平分室」，在鹽業興盛時期這李是相當重要的一處據點。");
        $('#mission_page2_intro_word2').text("東向為煎熬鹽試驗工廠；北面有儲藏室、真空鹽工場及高大的煙囪；西向則是鹽區倉庫，在光復初期事務室更改為宿舍，提供鹽務總局的家屬住宿。");
        $('#mission_page2_intro_word3').text("出張所內擺設的366種顏色的生日彩鹽是許多遊客慕名而來的最大因素，在繽紛的色彩之中尋找自己的專屬彩鹽是一大樂趣。");
        setTimeout(()=>{
          $("#story_background").animate({
            bottom:'12vw'
          },500)
        },200)
        setTimeout(()=>{
          console.log('done')
          $("#mission_page").fadeIn(500);
          $("#mission_page2_dot").fadeIn(500);
          $("#mission_page2_choice").fadeIn(500);
        },700)
        mission_page=2.5;
        mission_select=3;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }
    
  });

  //安平開台天后宮
  temple = new google.maps.Marker({ 
    position:{lat:23.000634, lng:120.160660},
    map: map,
    title: '安平開臺天后宮',
    animation: google.maps.Animation.DROP 
  });
  temple.addListener('click',function(){
    if(anping_mission[4]>0) alert("該故事已完成");
        else if(road!=1) alert("先全力完成安平線吧");
        else{
            mission_picture.src='pic/anping_picture/anping4_picture1.jpg';
            $('.mission_page2_title').text("開台天后宮");
            $('#mission_page2_word').html(`◆ 06:30~21:30，全年開放<br>◆ 708 臺南市安平區國勝路33號<br>◆ 06-2238695`);
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/anping_picture/anping4_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/anping_picture/anping4_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/anping_picture/anping4_picture1.jpg';
            $('#mission_page2_intro_word1').text("開台天后宮為安平區最大的廟宇，相傳天后宮媽祖是罕見的軟身神像(意旨神像關節可活動)，隨鄭成功船隊由湄洲來台並建廟祭祀，所以有開台之稱，是台灣媽祖信仰的主要中心之一，傳承著禮俗文化與信仰禮儀。");
            $('#mission_page2_intro_word2').text("每四年舉辦一次的安平迓媽祖活動是天后宮最大的活動，另外宮內的特殊信仰為側殿的石將軍文昌信仰，許多考生在考試前會到石將軍前抱抱佛腳，希望能有個好成績。");
            $('#mission_page2_intro_word3').text("安平天后宮牌樓，「牌樓」是一般民間的說法，在佛教則稱呼為「山門」。牌樓獨立於廟宇建築前，作為空間的區隔，進到牌樓以內也代表進入了寺廟的神聖空間。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=4;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
  });

  //安平古堡
  castle = new google.maps.Marker({ 
    position:{lat:23.001523, lng:120.160624},
    map: map,
    title: '安平古堡',
    animation: google.maps.Animation.DROP 
  });
  castle.addListener('click',function(){
    
    if(anping_mission[5]>0) alert("該故事已完成");
    else if(road!=1) alert("先全力完成安平線吧");
    else{
        mission_picture.src='pic/anping_picture/anping5_picture1.jpg';
        $('.mission_page2_title').text("安平古堡");
        $('#mission_page2_word').html(`◆ 週一至週日08:30~17:30<br>◆ 708 臺南市安平區國勝路82號<br>◆ 06-2267348（台南市政府文化局古蹟營運科）`);
        story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
        document.getElementById('mission_page2_intro_picture1').src='pic/anping_picture/anping5_picture2.jpg';
        document.getElementById('mission_page2_intro_picture2').src='pic/anping_picture/anping5_picture3.jpg';
        document.getElementById('mission_page2_intro_picture3').src='pic/anping_picture/anping5_picture1.jpg';
        $('#mission_page2_intro_word1').text("安平古堡，又稱為熱蘭遮城，最初建於1624年，是臺灣最早的要塞建築。自建城以來，曾是荷蘭人統治臺灣的中樞，也曾是鄭氏王朝統治者的住處。圖中為日治時代所建的瞭望臺，後由國民政府重建。1975年台南市政府在瞭望台上加了屋頂，牆面漆成白色，就是現在我們看見的安平古堡的模樣。");
        $('#mission_page2_intro_word2').text("熱蘭遮城因清兵破壞與英國軍艦炮轟炸毀。真正屬於荷蘭時期的遺跡，僅剩古堡前方外城南垣「紅毛土」的磚牆殘壁。牆與老榕樹共生，見證著盡400年來的台江的歷史。");
        $('#mission_page2_intro_word3').text("這口古井與「紅毛土」的磚牆殘壁一樣屬於荷蘭時期的遺跡，相傳赤崁樓古井能通向此古井。後證實根本沒有秘道，200多年來的傳說，只是成為茶餘飯後的趣聞。");
        setTimeout(()=>{
          $("#story_background").animate({
            bottom:'12vw'
          },500)
          setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
          },500)
        },200)
        mission_page=2.5;
        mission_select=5;
        console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
    }
  });
  //設定支線
  //盧經堂厝
  anping_minor[0] = new google.maps.Marker({
    position:{lat:23.000312, lng:120.160145},
    map: map,
    title: '盧經堂厝',
    icon: {
      url: './pic/minor_marker.png',
      scaledSize: new google.maps.Size(35,30)
    },
    animation: google.maps.Animation.DROP 
  });
  //點座標可以產生事件
  anping_minor[0].addListener('click',function(){
    mission_picture.src='pic/anping_picture/1.jpg';
    $('.mission_page2_title').text("盧經堂厝");
    $('#mission_page2_word').html(`安平盧經堂厝就是「王城西盧宅」，建於1902年，是台灣傳統建築史上為重要史料。盧經堂為清領末期臺灣開港通商後的買辦商人，富有稱盛於當世。安平地區有俚語「有躼旗富，無躼旗厝」來形容此宅之大，而「躼旗」一詞是因盧經堂身材高大而有的稱呼。<br><br>◆ 週二到週日 10:00~18:00/週日為園區清潔日12:00~18:00，週一休館<br>◆ 708 台南市安平區安平路802號<br>◆ 06-2231833<br><br>`);
    document.getElementById('upload_buttom').style.display='none'
    document.getElementById('finish_mission_buttom').style.display='none'
    story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
    setTimeout(()=>{
      $("#story_background").animate({
        bottom:'12vw'
      },500)
    },200)
    setTimeout(()=>{
      console.log('done')
      $("#mission_page").fadeIn(500);
    },700)
    mission_page=2.8;
    mission_select=15;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
  });
  //蜜餞物產館
  anping_minor[1] = new google.maps.Marker({
    position:{lat:23.001654, lng:120.159561},
    map: map,
    title: '蜜餞物產館',
    icon: {
      url: './pic/minor_marker.png',
      scaledSize: new google.maps.Size(35,30)
    },
    animation: google.maps.Animation.DROP 
  });
  //點座標可以產生事件
  anping_minor[1].addListener('click',function(){
    mission_picture.src='pic/anping_picture/2.jpg';
    $('.mission_page2_title').text("蜜餞物產館");
    $('#mission_page2_word').html(`沿著安平古堡的古城牆旁，就可以找到安平蜜餞物產館。這棟民國37年完成的三合院，現由安平番王伯蜜餞經營者經營，不僅將台南的水果結合蜜餞做介紹，更呈現台南安平特有的地理歷史和劍獅文化。<br><br>◆ 平日12:00-18:00；假日10:00-19:00提供導覽<br>◆ 708 台南市安平區國勝路65號<br>◆ 06-2229999<br><br>`);
    document.getElementById('upload_buttom').style.display='none'
    document.getElementById('finish_mission_buttom').style.display='none'
    story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
    setTimeout(()=>{
      $("#story_background").animate({
        bottom:'12vw'
      },500)
      setTimeout(()=>{
          console.log('done')
          $("#mission_page").fadeIn(500);
      },500)
    },200)
    mission_page=2.8;
    mission_select=15;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
  });
  //明清古墓
  anping_minor[2] = new google.maps.Marker({
     
    position:{lat:22.999820, lng:120.159608},
    map: map,
    title: '明清古墓',
    icon: {
      url: './pic/minor_marker.png',
      scaledSize: new google.maps.Size(35,30)
    },
    animation: google.maps.Animation.DROP 
  });
  //click
  anping_minor[2].addListener('click',function(){
    mission_picture.src='pic/anping_picture/1.jpg';
    $('.mission_page2_title').text("明清古墓");
    $('#mission_page2_word').html(`明清古墓又稱安平十二軍伕墓，位於台南市安平區的湯匙山公墓，是日本當局於1938、1939年所建來紀念12名安平軍伕的墳墓，由於他們是第一批為日本戰死的台灣人，故日本讓其享有與軍人相等的待遇，給予厚葬。<br><br>◆ 全年無休<br>◆ 708台南市安平區安平路806號<br>◆ 06-2144333 (南區殯儀館)<br><br>`);
    document.getElementById('upload_buttom').style.display='none'
    document.getElementById('finish_mission_buttom').style.display='none'
    story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
    setTimeout(()=>{
      $("#story_background").animate({
        bottom:'12vw'
      },500)
    },200)
    setTimeout(()=>{
      console.log('done')
      $("#mission_page").fadeIn(500);
    },700)
    mission_page=2.8;
    mission_select=15;
    console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
  });


  //判斷mission有沒有做完
  for(i=1;i<=5;i++){
    if(anping_mission[i] > 0){
      anping_toggle(i);
    }
    if(chihkan_mission[i] > 0){
      change_picture(i+5);
    }
    if(confucious_mission[i] > 0){
      change_picture(i+10);
    }
  }
  console.log("anping 6 = " + anping_mission[6]);
  console.log("chihkan 6 = " + chihkan_mission[6]);
  console.log("confucious 6 = " + confucious_mission[6]);
  if(anping_mission[6] > 0)
    change_picture(16);
  if(chihkan_mission[6] > 0)
    change_picture(17);
  if(confucious_mission[6] > 0)                                                                                                                                               
    change_picture(18);
}

function anping_toggle(num)
{
  console.log('num=   '+ num);
  if(num == 1){
    treehouse.setMap(null);
    treehouse = new google.maps.Marker({ 
      position:{lat:23.003360, lng:120.159794},
      map: map,
      title: '德記洋行',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_anping_picture1_buttom").src="./pic/tool/Anping_Tree_House_tool_font.png";
  }
  else if(num ==2){
    wanghouse.setMap(null);
    wanghouse = new google.maps.Marker({ 
      position:{lat:23.000985, lng:120.159703},
      map: map,
      title: '王雞屎洋樓',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_anping_picture2_buttom").src="./pic/tool/Wang_building_tool_font.png";
  }  
  else if(num ==3){
    shop.setMap(null);
    shop = new google.maps.Marker({ 
      position:{lat:23.002405, lng:120.156332},
      map: map,
      title: '夕遊出張所',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_anping_picture3_buttom").src="./pic/tool/Sio_tool_font.png";
  }  
  else if(num ==4){
    temple.setMap(null);
    temple = new google.maps.Marker({ 
      position:{lat:23.000634, lng:120.160660},
      map: map,
      title: '安平開臺天后宮',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_anping_picture4_buttom").src="./pic/tool/Kaitai_Matsu_Temple_tool_font.png";
  }  
  else if(num ==5){
    castle.setMap(null);
    castle = new google.maps.Marker({ 
      position:{lat:23.001523, lng:120.160624},
      map: map,
      title: '安平古堡',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_anping_picture5_buttom").src="./pic/tool/Anping_Castle_tool_font.png";
  }
}


//set chihkan map
function set_chihkan_googlemap()
{
  var chihkan_Options = {
    center: { lat: 22.996518, lng: 120.201594},
    zoom: 17,
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
  }
  map = new google.maps.Map(
    document.getElementById('google_map'),chihkan_Options
  );
  
   //MARKER
  //赤崁樓
  chihkan_point[1] = new google.maps.Marker({ 
    position:{lat:22.997485, lng:120.202544},
    map: map,
    title: '赤崁樓',
    animation: google.maps.Animation.DROP
  });
  chihkan_point[1].addListener('click',function(){
    if(chihkan_mission[1]>0) alert("該故事已完成");
        else if(road!=2) alert("先全力完成赤崁線吧");
        else{
            mission_picture.src='pic/chihkan_picture/chihkan1_picture1.jpg';
            $('.mission_page2_title').text("赤崁樓");
            $('#mission_page2_word').html(`◆ 週一至週日8:30~21:30<br>◆ 700 臺南市中西區民族路二段212號<br>◆ 06-2205647 (台南市政府文化局)`);
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/chihkan_picture/chihkan1_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/chihkan_picture/chihkan1_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/chihkan_picture/chihkan1_picture4.jpg';
            $('#mission_page2_intro_word1').text("1652年荷蘭人在此建立普羅民遮城，至此奠定了台南行政商業中心的位置，歷經300多年來幾經整修改建，始有現今的樣貌。");
            $('#mission_page2_intro_word2').text("移自大南門城邊的九塊御碑，由狀似石龜的贔屭所乘載，傳說贔屭為九龍生子之一，生性喜歡負重，也因為贔屭而讓赤嵌樓增添不少傳說故事。");
            $('#mission_page2_intro_word3').text("19世紀後半葉，大士殿、海神廟、蓬壺書院、文昌閣、五子祠等建築，先後蓋在赤崁樓的原址上，為赤崁城址增添壯偉氣勢。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=6;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
  });

  //祀典武廟 
  chihkan_point[2] = new google.maps.Marker({ 
    position:{lat:22.996409, lng:120.202156},
    map: map,
    title: '祀典武廟',
    animation: google.maps.Animation.DROP 
  });
  chihkan_point[2].addListener('click',function(){
    if(chihkan_mission[2]>0) alert("該故事已完成");
        else if(road!=2) alert("先全力完成赤崁線吧");
        else{
            mission_picture.src='pic/chihkan_picture/chihkan2_picture1.jpg';
            $('.mission_page2_title').text("祀典武廟");
            $('#mission_page2_word').html(`◆ 05:00~21:00 (初一、十五至22:00)，全年開放<br>◆ 700 臺南市中西區永福路二段229號<br>◆ 06-2202390`);
            
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/chihkan_picture/chihkan2_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/chihkan_picture/chihkan2_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/chihkan_picture/chihkan2_picture4.jpg';
            $('#mission_page2_intro_word1').text("「重簷歇山」式屋頂配上一整面的紅牆是許多人對祀典武廟的印象。祀典武廟約建於1665年，是台灣最早關帝廟，裡面祀奉關聖帝君，也被稱為大關帝廟。");
            $('#mission_page2_intro_word2').text("雍正三年（1725年），清廷奉旨舉辦春秋二祭，成為全臺規模最大，也是唯一擁有「祀典」尊崇的武廟，並與「全臺首學」之臺南孔子廟並列，享有「祀典武廟」之稱。");
            $('#mission_page2_intro_word3').text("來到祀典武廟一定要看的重點就是各種匾額，完美形容了關公在人民心中的形象。匾額上的年代與提頒匾額者都是值得留意的地方。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=7;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
  });
  
  //大井頭
  chihkan_point[3] = new google.maps.Marker({ 
    position:{lat:22.995377, lng:120.201737},
    map: map,
    title: '大井頭',
    animation: google.maps.Animation.DROP 
  });
  chihkan_point[3].addListener('click',function(){
    if(chihkan_mission[3]>0) alert("該故事已完成");
        else if(road!=2) alert("先全力完成赤崁線吧");
        else{
            mission_picture.src='pic/chihkan_picture/chihkan3_picture1.jpg';
            $('.mission_page2_title').text("大井頭");
            $('#mission_page2_word').html(`◆ 全年開放<br>◆ 700 臺南市中西區民權路二段225號<br>◆ 06-2267151 (中西區公所)`);
            
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/chihkan_picture/chihkan3_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/chihkan_picture/chihkan3_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/chihkan_picture/chihkan3_picture4.jpg';
            $('#mission_page2_intro_word1').text("大井頭一帶是昔日進入臺灣府城的重要碼頭所在地，雖然「大井頭」之名原意為大井旁的碼頭，是一個地名，但現在也用以指稱「大井」本身。");
            $('#mission_page2_intro_word2').text("大井頭應該可說是台南市區內最貼近大家的古蹟了，也是很多人常會忽略的重要古蹟，因為就位在車流量大的民權路馬路上，以鑄鐵蓋蓋著井口，令人難以注意。");
            $('#mission_page2_intro_word3').text("大井頭是當時離港口最近的一口淡水井，水源豐沛甘甜，當時就傳著：「吃大井頭水，沒肥也媠」，後來此地居民也開始使用這口井水，可見其重要性。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=8;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
  });

  //開基武廟
  chihkan_point[4] = new google.maps.Marker({ 
    position:{lat:22.996373, lng:120.200807},
    map: map,
    title: '開基武廟',
    animation: google.maps.Animation.DROP 
  });
  chihkan_point[4].addListener('click',function(){
    if(chihkan_mission[4]>0) alert("該故事已完成");
        else if(road!=2) alert("先全力完成赤崁線吧");
        else{
            mission_picture.src='pic/chihkan_picture/chihkan4_picture1.jpg';
            $('.mission_page2_title').text("開基武廟、新美街");
            $('#mission_page2_word').html(`◆ 週一~週日07:00~21:00 全年開放<br>◆ 700 臺南市中西區新美街116號<br>◆ 06-2214671\n`);
            
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/chihkan_picture/chihkan4_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/chihkan_picture/chihkan4_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/chihkan_picture/chihkan4_picture4.jpg';
            $('#mission_page2_intro_word1').text("開基武廟供奉主神關聖帝君，是1669年所建全台灣首座關帝廟，故原名為「開基武廟」。又因與祀典武廟都祭祀關公，且面積較小，因此稱此廟為小關帝廟。");
            $('#mission_page2_intro_word2').text("新美街舊稱米街，從清朝存在至今，因賣米店家林立聞名。隨著歷史變遷，米店一戶戶搬離，街道隨之沒落，惟當年風華遺韻猶存。");
            $('#mission_page2_intro_word3').text("新美街內金紙店的昭玄堂燈籠、隆興亞鉛店、天福玩具、新協益紙行皆是40至50年的老店。另外米街金香紙、玉泉金紙莊更具百年歷史。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=9;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
  });

  //大天后宮
  chihkan_point[5] = new google.maps.Marker({ 
    position:{lat:22.996619, lng:120.201544},
    map: map,
    title: '大天后宮',
    animation: google.maps.Animation.DROP 
  });
  chihkan_point[5].addListener('click',function(){
    if(chihkan_mission[5]>0) alert("該故事已完成");
        else if(road!=2) alert("先全力完成赤崁線吧");
        else{
            mission_picture.src='pic/chihkan_picture/chihkan5_picture1.jpg';
            $('.mission_page2_title').text("祀典大天后宮");
            $('#mission_page2_word').html(`◆ 全年開放<br>◆ 700臺南市中西區永福路二段227巷18號<br>◆ 06-2211178`);
            
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/chihkan_picture/chihkan5_picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/chihkan_picture/chihkan5_picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/chihkan_picture/chihkan5_picture4.jpg';
            $('#mission_page2_intro_word1').text("為台灣最早官建的媽祖廟，原為寧靖王朱術桂府邸。1683年，施琅率軍大敗鄭克塽，為收復民心，特奏請清廷將靖寧王府改建為天妃宮供奉媽祖，後加封為天后，「大天后宮」廟名由此而來。");
            $('#mission_page2_intro_word2').text("大天后宮經歷雖多次修整，但仍然保持明代王府的建築特色，擁有四進建築，包括三川殿、拜殿、正殿、後殿四部分。");
            $('#mission_page2_intro_word3').text("廟中的「平台紀略碑」是現在台灣所保存的最早清碑，書寫攻台之經過、安撫民心及善後處理的方法。廟內也有許多既珍貴又有意義的石碑，值得細心觀察。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=10;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
        
  });

  //設定支線
  //昭安理髮廳
  chihkan_minor[0] = new google.maps.Marker({
    position:{lat:22.994502, lng:120.200095},
    map: map,
    title: '昭安理髮廳',
    icon: {
      url: './pic/minor_marker.png',
      scaledSize: new google.maps.Size(35,30)
    },
    animation: google.maps.Animation.DROP 
  });
  //click
  chihkan_minor[0].addListener('click',function(){
  });
  //馬來峰巴生肉骨茶
  chihkan_minor[1] = new google.maps.Marker({
    position:{lat:22.997320, lng:120.201234},
    map: map,
    title: '馬來峰巴生肉骨茶',
    icon: {
      url: './pic/minor_marker.png',
      scaledSize: new google.maps.Size(35,30)
    },
    animation: google.maps.Animation.DROP 
  });
  //click
  chihkan_minor[1].addListener('click',function(){
  });
  //全美戲院
  chihkan_minor[2] = new google.maps.Marker({
    position:{lat:22.995224, lng:120.201510},
    map: map,
    title: '全美戲院',
    icon: {
      url: './pic/minor_marker.png',
      scaledSize: new google.maps.Size(35,30)
    },
    animation: google.maps.Animation.DROP 
  });
  //click
  chihkan_minor[2].addListener('click',function(){
  });

  //判斷mission有沒有做完
  for(i=1;i<=5;i++){
    if(chihkan_mission[i] > 0){
      chihkan_toggle(i+5);
    }
    if(anping_mission[i] > 0) {
      change_picture(i);
    }
    if(confucious_mission[i] > 0){
      change_picture(i+10);
    }
  }
  console.log("anping 6 = " + anping_mission[6]);
  console.log("chihkan 6 = " + chihkan_mission[6]);
  console.log("confucious 6 = " + confucious_mission[6]);
  if(anping_mission[6] > 0)
    change_picture(16);
  if(chihkan_mission[6] > 0)
    change_picture(17);
  if(confucious_mission[6] > 0)                                                                                                                                               
    change_picture(18);
}

function chihkan_toggle(num)
{
  num = num - 5;
  console.log('chihkan num=   ' + num);
  //舊標籤移除
  chihkan_point[num].setMap(null);
  //換新標籤
  if(num == 1){
    chihkan_point[1] = new google.maps.Marker({ 
      position:{lat:22.997485, lng:120.202544},
      map: map,
      title: '赤崁樓',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_chihkan_picture1_buttom").src="./pic/chihkan/Chihkan_Tower_tool.png";
  }
  else if(num ==2){
    chihkan_point[2] = new google.maps.Marker({ 
      position:{lat:22.996409, lng:120.202156},
      map: map,
      title: '祀典武廟',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_chihkan_picture2_buttom").src="./pic/chihkan/Wu_Temple_tool.png";
  }  
  else if(num ==3){
    chihkan_point[3] = new google.maps.Marker({ 
      position:{lat:22.995377, lng:120.201737},
      map: map,
      title: '大井頭',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_chihkan_picture3_buttom").src="./pic/chihkan/Daijingtou_tool.png";
  }  
  else if(num ==4){
    chihkan_point[4] = new google.maps.Marker({ 
      position:{lat:22.996373, lng:120.200807},
      map: map,
      title: '開基武廟',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_chihkan_picture4_buttom").src="./pic/chihkan/Xinmei_St_tool.png";
  }  
  else if(num ==5){
    chihkan_point[5] = new google.maps.Marker({ 
      position:{lat:22.996619, lng:120.201544},
      map: map,
      title: '大天后宮',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_chihkan_picture5_buttom").src="./pic/chihkan/Tianhou_Palace_tool.png";
  }
}

function set_confucious_googlemap()
{
  var confucious_Options = {
    center: { lat: 22.990620, lng: 120.202136},
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
  }
  map = new google.maps.Map(
    document.getElementById('google_map'),confucious_Options
  );
  
   //MARKER
  //文學館
  confucious_point[1] = new google.maps.Marker({
    position:{lat:22.991986, lng:120.204491},
    map: map,
    title: '文學館',
    animation: google.maps.Animation.DROP
  });
  confucious_point[1].addListener('click',function(){
    if(confucious_mission[1]>0) alert("該故事已完成");
        else if(road!=3) alert("先全力完成選擇的吧吧");
        else{
            mission_picture.src='pic/confucious_picture/confucious1picture1.jpg';
            $('.mission_page2_title').text("台灣文學館");
            $('#mission_page2_word').html(`◆ 09:00-18:00<br>◆ 700 台南市中西區中正路1號<br>◆ 06-2217201`);
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/confucious_picture/confucious1picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/confucious_picture/confucious1picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/confucious_picture/confucious1picture4.jpg';
            $('#mission_page2_intro_word1').text("1652年荷蘭人在此建立普羅民遮城，至此奠定了台南行政商業中心的位置，歷經300多年來幾經整修改建，始有現今的樣貌。");
            $('#mission_page2_intro_word2').text("移自大南門城邊的九塊御碑，由狀似石龜的贔屭所乘載，傳說贔屭為九龍生子之一，生性喜歡負重，也因為贔屭而讓赤嵌樓增添不少傳說故事。");
            $('#mission_page2_intro_word3').text("19世紀後半葉，大士殿、海神廟、蓬壺書院、文昌閣、五子祠等建築，先後蓋在赤崁樓的原址上，為赤崁城址增添壯偉氣勢。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=11;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
  });

  //孔廟 
  confucious_point[2] = new google.maps.Marker({ 
    position:{lat:22.990453, lng:120.204308},
    map: map,
    title: '孔廟',
    animation: google.maps.Animation.DROP 
  });
  confucious_point[2].addListener('click',function(){
    if(confucious_mission[2]>0) alert("該故事已完成");
        else if(road!=3) alert("先全力完成選擇的吧吧");
        else{
            mission_picture.src='pic/confucious_picture/confucious2picture1.jpg';
            $('.mission_page2_title').text("孔廟");
            $('#mission_page2_word').html(`◆ 週一至週日08:30~17:30 (除夕公休)<br>◆ 700 台南市中西區南門路2號<br>◆ 06-2214647 (財團法人孔廟文化基金會)`);
            
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/confucious_picture/confucious2picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/confucious_picture/confucious2picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/confucious_picture/confucious2picture4.jpg';
            $('#mission_page2_intro_word1').text("「重簷歇山」式屋頂配上一整面的紅牆是許多人對祀典武廟的印象。祀典武廟約建於1665年，是台灣最早關帝廟，裡面祀奉關聖帝君，也被稱為大關帝廟。");
            $('#mission_page2_intro_word2').text("雍正三年（1725年），清廷奉旨舉辦春秋二祭，成為全臺規模最大，也是唯一擁有「祀典」尊崇的武廟，並與「全臺首學」之臺南孔子廟並列，享有「祀典武廟」之稱。");
            $('#mission_page2_intro_word3').text("來到祀典武廟一定要看的重點就是各種匾額，完美形容了關公在人民心中的形象。匾額上的年代與提頒匾額者都是值得留意的地方。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=12;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
  });
  
  //林百貨
  confucious_point[3] = new google.maps.Marker({ 
    position:{lat:22.991754, lng:120.202478},
    map: map,
    title: '林百貨',
    animation: google.maps.Animation.DROP 
  });
  confucious_point[3].addListener('click',function(){
    if(confucious_mission[3]>0) alert("該故事已完成");
        else if(road!=3) alert("先全力完成選擇的吧吧");
        else{
            mission_picture.src='pic/confucious_picture/confucious3picture1.jpg';
            $('.mission_page2_title').text("林百貨、土地銀行");
            $('#mission_page2_word').html(`◆ 每日11:00-22:00<br>◆ 700 台南市中西區忠義路二段63號<br>◆ 06-2213000`);
            
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/confucious_picture/confucious3picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/confucious_picture/confucious3picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/confucious_picture/confucious3picture4.jpg';
            $('#mission_page2_intro_word1').text("土地銀行，在日治時代稱為勸業銀行，外觀建築風格獨特，採用希臘神殿式的圓柱，整齊排列在兩側，給人非常沉穩的感覺。");
            $('#mission_page2_intro_word2').text("林百貨在1932年開幕，台南人稱「五棧樓仔」，有著當時最先進的流籠（電梯），電梯樓層顯示是旋轉指針式的，對當時台南人來說「去林百貨坐流籠」是新奇時髦的休閒活動。");
            $('#mission_page2_intro_word3').text("林百貨頂樓的神社稱「末廣社」，為侍奉會社主護神的神社，完成於開幕之後半年，神社並非林百貨對外開放區域，為現今台灣僅存的店舖建築內的空中神社。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=13;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
  });

  //武德殿
  confucious_point[4] = new google.maps.Marker({ 
    position:{lat:22.990617, lng:120.203437},
    map: map,
    title: '武德殿',
    animation: google.maps.Animation.DROP 
  });
  confucious_point[4].addListener('click',function(){
    if(confucious_mission[4]>0) alert("該故事已完成");
        else if(road!=3) alert("先全力完成選擇的吧吧");
        else{
            mission_picture.src='pic/confucious_picture/confucious4picture1.jpg';
            $('.mission_page2_title').text("武德殿");
            $('#mission_page2_word').html(`◆ 平日上課時間內部不開放參觀，開放時間為六日<br>◆ 700 台南市中西區忠義路二段2號<br>◆ 06-2222768(忠義國小)`);
            
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/confucious_picture/confucious4picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/confucious_picture/confucious4picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/confucious_picture/confucious4picture4.jpg';
            $('#mission_page2_intro_word1').text("開基武廟供奉主神關聖帝君，是1669年所建全台灣首座關帝廟，故原名為「開基武廟」。又因與祀典武廟都祭祀關公，且面積較小，因此稱此廟為小關帝廟。");
            $('#mission_page2_intro_word2').text("新美街舊稱米街，從清朝存在至今，因賣米店家林立聞名。隨著歷史變遷，米店一戶戶搬離，街道隨之沒落，惟當年風華遺韻猶存。");
            $('#mission_page2_intro_word3').text("新美街內金紙店的昭玄堂燈籠、隆興亞鉛店、天福玩具、新協益紙行皆是40至50年的老店。另外米街金香紙、玉泉金紙莊更具百年歷史。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=14;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
  });

  //法院博物館
  confucious_point[5] = new google.maps.Marker({ 
    position:{lat:22.989440, lng:120.200925},
    map: map,
    title: '大天后宮',
    animation: google.maps.Animation.DROP 
  });
  confucious_point[5].addListener('click',function(){
    if(confucious_mission[5]>0) alert("該故事已完成");
        else if(road!=3) alert("先全力完成選擇的吧吧");
        else{
            mission_picture.src='pic/confucious_picture/confucious5picture1.jpg';
            $('.mission_page2_title').text("台南法院博物館");
            $('#mission_page2_word').html(`◆ 9:00-17:00，週一休館<br>◆ 700 台南市中西區府前路一段307號<br>◆ 06-2147173`);
            
            story_back_buttom.style.backgroundImage='url(./pic/delete_buttom.png)';
            document.getElementById('mission_page2_intro_picture1').src='pic/confucious_picture/confucious5picture2.jpg';
            document.getElementById('mission_page2_intro_picture2').src='pic/confucious_picture/confucious5picture3.jpg';
            document.getElementById('mission_page2_intro_picture3').src='pic/confucious_picture/confucious5picture4.jpg';
            $('#mission_page2_intro_word1').text("台南法院博物館，前身為台南地方法院，是日治時期所建的法院，被譽為日治時期台灣三大建築之一，是全臺台現存歷史最悠久的大型法院建築，見證了台灣的司法歷史。");
            $('#mission_page2_intro_word2').text("大天后宮經歷雖多次修整，但仍然保持明代王府的建築特色，擁有四進建築，包括三川殿、拜殿、正殿、後殿四部分。");
            $('#mission_page2_intro_word3').text("廟中的「平台紀略碑」是現在台灣所保存的最早清碑，書寫攻台之經過、安撫民心及善後處理的方法。廟內也有許多既珍貴又有意義的石碑，值得細心觀察。");
            setTimeout(()=>{
              $("#story_background").animate({
                bottom:'12vw'
              },500)
            },200)
            setTimeout(()=>{
              console.log('done')
              $("#mission_page").fadeIn(500);
              $("#mission_page2_dot").fadeIn(500);
              $("#mission_page2_choice").fadeIn(500);
            },700)
            mission_page=2.5;
            mission_select=15;
            console.log('mission_page:',mission_page,'mission_select:',mission_select,'story_page:',story_page);
        }
  });
  //設定支線
  //莉莉冰果店
  confucious_minor[0] = new google.maps.Marker({
    position:{lat:23.000312, lng:120.160145},
    map: map,
    title: '莉莉冰果店',
    icon: {
      url: './pic/minor_marker.png',
      scaledSize: new google.maps.Size(35,30)
    },
    animation: google.maps.Animation.DROP 
  });
  //click
  confucious_minor[0].addListener('click',function(){
  });
  //愛國婦人館
  confucious_minor[1] = new google.maps.Marker({
    position:{lat:22.988871, lng:120.204207},
    map: map,
    title: '愛國婦人館',
    icon: {
      url: './pic/minor_marker.png',
      scaledSize: new google.maps.Size(35,30)
    },
    animation: google.maps.Animation.DROP 
  });
  //click
  confucious_minor[1].addListener('click',function(){
  });
  //福記肉圓
  confucious_minor[2] = new google.maps.Marker({
    position:{lat:22.989614, lng:120.201481},
    map: map,
    title: '福記肉圓',
    icon: {
      url: './pic/minor_marker.png',
      scaledSize: new google.maps.Size(35,30)
    },
    animation: google.maps.Animation.DROP 
  });
  //click
  confucious_minor[2].addListener('click',function(){
  });

  //判斷mission有沒有做完
  
  for(i=1;i<=5;i++){
    if(confucious_mission[i] > 0){
      confucious_toggle(i+10);
    }
    if(anping_mission[i] > 0){
      change_picture(i);
    }
    if(chihkan_mission[i] > 0){
      change_picture(i+5);
    }
  }
  console.log("anping 6 = " + anping_mission[6]);
  console.log("chihkan 6 = " + chihkan_mission[6]);
  console.log("confucious 6 = " + confucious_mission[6]);
  if(anping_mission[6] > 0)
    change_picture(16);
  if(chihkan_mission[6] > 0)
    change_picture(17);
  if(confucious_mission[6] > 0)
    change_picture(18);
}

function confucious_toggle(num)
{
  num = num - 10;
  console.log('confucious num=   ' + num);
  //舊標籤移除
  confucious_point[num].setMap(null);
  //換新標籤
  //文學館
  if(num == 1){
    confucious_point[1] = new google.maps.Marker({
      position:{lat:22.991986, lng:120.204491},
      map: map,
      title: '文學館',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_confucious_picture1_buttom").src="./pic/confucious/National_Museum_of_Taiwan_Literature_tool_buttom.png";
  }
  else if(num == 2){
    //孔廟 
    confucious_point[2] = new google.maps.Marker({ 
      position:{lat:22.990453, lng:120.204308},
      map: map,
      title: '孔廟',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_confucious_picture2_buttom").src="./pic/confucious/Confucius_Temple_tool_buttom.png";
  }
  else if(num == 3){
    //林百貨
    confucious_point[3] = new google.maps.Marker({ 
      position:{lat:22.991754, lng:120.202478},
      map: map,
      title: '林百貨',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_confucious_picture3_buttom").src="./pic/confucious/HAYASHI_Shop_tool_buttom.png";
  }
  else if(num == 4){
    //武德殿
    confucious_point[4] = new google.maps.Marker({ 
      position:{lat:22.990617, lng:120.203437},
      map: map,
      title: '武德殿',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_confucious_picture4_buttom").src="./pic/confucious/BUTOKUDEN_tool_buttom.png";
  }
  else if(num == 5){
    //法院博物館
    confucious_point[5] = new google.maps.Marker({ 
      position:{lat:22.989440, lng:120.200925},
      map: map,
      title: '大天后宮',
      icon: {
        url: 'http://maps.google.com/mapfiles/kml/paddle/wht-circle.png',
        scaledSize: new google.maps.Size(45,40)
      }
    });
    //set story pic
    document.getElementById("story_confucious_picture5_buttom").src="./pic/confucious/The_Judicial_Museum_tool_buttom.png";
  }
}

function change_picture(num)
{
  if(num == 1){
    console.log("change picture " + num);
    document.getElementById("story_anping_picture1_buttom").src="./pic/tool/Anping_Tree_House_tool_font.png";
  }else if(num ==2){
    console.log("change picture " + num);
    document.getElementById("story_anping_picture2_buttom").src="./pic/tool/Wang_building_tool_font.png";
  }else if(num ==3){
    console.log("change picture " + num);
    document.getElementById("story_anping_picture3_buttom").src="./pic/tool/Sio_tool_font.png";
  }else if(num ==4){
    console.log("change picture " + num);
    document.getElementById("story_anping_picture4_buttom").src="./pic/tool/Kaitai_Matsu_Temple_tool_font.png";
  }else if(num ==5){
    console.log("change picture " + num);
    document.getElementById("story_anping_picture5_buttom").src="./pic/tool/Anping_Castle_tool_font.png";
  }else if(num ==6){
    console.log("change picture " + num);
    document.getElementById("story_chihkan_picture1_buttom").src="./pic/chihkan/Chihkan_Tower_tool.png";
  }else if(num ==7){
    console.log("change picture " + num);
    document.getElementById("story_chihkan_picture2_buttom").src="./pic/chihkan/Wu_Temple_tool.png";
  }else if(num ==8){
    console.log("change picture " + num);
    document.getElementById("story_chihkan_picture3_buttom").src="./pic/chihkan/Daijingtou_tool.png";
  }else if(num ==9){
    console.log("change picture " + num);
    document.getElementById("story_chihkan_picture4_buttom").src="./pic/chihkan/Xinmei_St_tool.png";
  }else if(num ==10){
    console.log("change picture " + num);
    document.getElementById("story_chihkan_picture5_buttom").src="./pic/chihkan/Tianhou_Palace_tool.png";
  }else if(num ==11){
    console.log("change picture " + num);
    document.getElementById("story_confucious_picture1_buttom").src="./pic/confucious/National_Museum_of_Taiwan_Literature_tool_buttom.png";
  }else if(num ==12){
    console.log("change picture " + num);
    document.getElementById("story_confucious_picture2_buttom").src="./pic/confucious/Confucius_Temple_tool_buttom.png";
  }else if(num ==13){
    console.log("change picture " + num);
    document.getElementById("story_confucious_picture3_buttom").src="./pic/confucious/HAYASHI_Shop_tool_buttom.png";
  }else if(num ==14){
    console.log("change picture " + num);
    document.getElementById("story_confucious_picture4_buttom").src="./pic/confucious/BUTOKUDEN_tool_buttom.png";
  }else if(num ==15){
    console.log("change picture " + num);
    document.getElementById("story_confucious_picture5_buttom").src="./pic/confucious/The_Judicial_Museum_tool_buttom.png";
  }
  else if(num ==16){
    if(anping_mission[6] == 1){
      document.getElementById("anping_lock_story").src='./pic/ending_tool/Anping_endingA_tool_font.png';
    }
    else{
       document.getElementById("anping_lock_story").src='./pic/ending_tool/Anping_endingB_tool_font.png';
    }
  }
  else if(num ==17){
    if(chihkan_mission[6] == 1){
      document.getElementById("chihkan_lock_story").src='./pic/ending_tool/Chihkan_endingA_tool_font.png';
    }
    else{
      document.getElementById("chihkan_lock_story").src='./pic/ending_tool/Chihkan_endingB_tool_font.png';
    }
  }
  else if(num ==18){
    if(confucious_mission[6] == 1){
      document.getElementById("confucious_lock_story").src='./pic/ending_tool/ConfuciusTemple_endingA_tool_font.png'
    }
    else{
      document.getElementById("confucious_lock_story").src='./pic/ending_tool/ConfuciusTemple_endingB_tool_font.png'
    }
  }
}

//在mission.js裡用
function changemysql(num)
{
  mission_done = num;
  if(mission_done > 10 && mission_done <=15){
    mission_option = confucious_mission[mission_done - 10];
  }
  else if(mission_done > 5 && mission_done <=10){
    mission_option = chihkan_mission[mission_done - 5];
  }
  else if(mission_done == 16){
    mission_option = anping_mission[6];
    console.log("anping 6 = " + anping_mission[6]);
  }
  else if(mission_done == 17){
    mission_option = chihkan_mission[6];
    console.log("chihkan 6 = " + chihkan_mission[6]);
  }
  else if(mission_done == 18){
    mission_option = confucious_mission[6];
    console.log("confucious 6 = " + confucious_mission[6]);
  }
  else {
    mission_option = anping_mission[mission_done];
  }
  console.log("user id in toggle= " + user_data.id);
  console.log("user mission_option= " + mission_option);  
  $.ajax({
    url:'./mission',
    type:'POST',
    data:{
      mission_done: mission_done,
      mission_option: mission_option,
      user_id : user_data.id,
    },
    success: function(){
      console.log("send mission done success");
    },
    error: function(err){
      console.log(err);
    } 
  })
}

//   temple = new google.maps.Marker({ 
//     position:{lat:23.003476, lng:120.159789},
//     map: map
//   });

//   castle = new google.maps.Marker({ 
//     position:{lat:23.003476, lng:120.159789},
//     map: map
//   });

//   shop = new google.maps.Marker({ 
//     position:{lat:23.003476, lng:120.159789},
//     map: map
//   });

//  console.log('lat=' + now_lat);
//  console.log('long=' + now_long);
//   var mapOptions = {
//     center: { lat: -34.397, lng: 150.644},
//     zoom: 8
//   };
//   var map = new google.maps.Map(
//     document.getElementById('map-canvas'),
//     mapOptions);
// 




//better story_background收回去

  /*
  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
                '&signed_in=true&callback=initialize';
    document.body.appendChild(script);
  }
  window.onload = loadScript;
   */
  
 //google.maps.event.addDomListener(
 //  window, 'load', initialize);    
