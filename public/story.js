//安平完成系列

console.log('story ready')
//
$(document).ready(function() {

    $("#story_anping_picture1_buttom").click(function(){
        console.log('anping_mission[1]:',anping_mission[1]);
        if(anping_mission[1]>0){
            
            $('#story_display_title').text("德記洋行、安平樹屋");
            console.log('do');
            $('#story_display_article_1').text("在清代，樟腦是洋行賺錢的商品之一，不願看到洋人獨佔好處的清朝也要分一杯羹，於是改行專賣制度，這造成洋行龐大的利益損失。身為英商德記洋行秘書的你，在這種情況下要如何建議上司呢？");
            if(anping_mission[1]==1){
                document.getElementById("story_display").src='pic/collect/anping/1A.jpg';
                document.getElementById("story_choose").src='pic/choosebuttom/anping/Anping_Tree_House_choose1_buttom.png';
                $('#story_display_article_2').text("英國領事館接受商人的請求後，希望清朝撤回此項政策，但皆被拒。1868年10月與清廷的再次談判失敗，英方決定訴諸武力以求談判。駐香港英國司令接獲領事館的要求後派兵前往安平港，並向安平港開砲，打算攻佔安平。此時，清廷立即派兵支援但被擊敗。後來清廷被迫重啟談判，訂定《樟腦條約》，廢除樟腦官辦、傳教自由等附加條件。");
                console.log('done');
            }
            else{
                document.getElementById("story_display").src='pic/collect/anping/1B.jpg';
                document.getElementById("story_choose").src='pic/choosebuttom/anping/Anping_Tree_House_choose2_buttom.png';
                $('#story_display_article_2').text("出口台灣茶葉到澳門，轉口至世界各地，奠定了德記洋行出口茶葉的市場基礎，在後來的一百多年仍然獨佔鰲頭。");
                console.log('why');
            }
            $('#story_anping').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_anping_picture2_buttom").click(function(){
        console.log('anping_mission[2]:',anping_mission[2]);
        if(anping_mission[2]>0){
            
            $('#story_display_title').text("王雞屎洋樓");
            $('#story_display_article_1').text("「日本人這批鹽需要約一百個搬運鹽工，我一下子去哪裡找這麼多人阿？」安平運鹽大亨王雞屎苦惱地說。王雞屎因為運鹽而致富，卻遇到了人手短缺的難題，但這筆生意又不忍心被別人白白搶走⋯⋯。請問要怎麼做才能順利出貨呢？");
            if(anping_mission[2]==1){
                document.getElementById("story_display").src='pic/collect/anping/2A.jpg';
                document.getElementById("story_choose").src='pic/choosebuttom/anping/wang_building_choose1_buttom.png';
                $('#story_display_article_2').text("王雞屎每天都會舉辦流水席，不僅只對自己的搬運工，他對於所有苦力者都給予飽餐一頓，因此受到工人們的愛戴，願意為王雞屎工作的人絡繹不絕、盡得人心，事業蒸蒸日上。");
                console.log('1');
            }
            else{
                document.getElementById("story_display").src='pic/collect/anping/2B.jpg';
                document.getElementById("story_choose").src='pic/choosebuttom/anping/wang_building_choose2_buttom.png';
                $('#story_display_article_2').text("雖然成功解決這次的事件，但王雞屎付出更多成本，當王雞屎無力負擔豐厚薪酬時，這些工人不願繼續為王雞屎工作。");
                console.log('2');
            }
            $('#story_anping').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_anping_picture3_buttom").click(()=>{
        console.log('anping_mission[3]:',anping_mission[3]);
        if(anping_mission[3]>0){
            console.log('done');
            
            $('#story_display_title').text("夕遊出張所");
            $('#story_display_article_1').text("夕遊出張所原是日治時代安平製鹽工廠的辦公室，為應付日本二戰時的需求成立的實驗工廠。當時國際情勢混亂，鹽工廠的三根大煙囪易成為美軍轟炸的目標。身為日本製鹽會社最高負責人的你，要如何面對這場災難呢？");
            if(anping_mission[3]==1){
                document.getElementById("story_display").src='pic/collect/anping/3A.jpg';
                document.getElementById("story_choose").src='pic/choosebuttom/anping/Sio_choose1_buttom.png';
                $('#story_display_article_2').text("成功射下美軍轟炸機，保留了製鹽工廠實驗室的珍貴研究成果，對日後臺灣的製鹽技術有一大貢獻。");
            }
            else{
                document.getElementById("story_display").src='pic/collect/anping/3B.jpg';
                document.getElementById("story_choose").src='pic/choosebuttom/anping/Sio_choose2_buttom.png';
                $('#story_display_article_2').text("美軍果然對鹽工廠進行空襲，三個煙囪灰飛煙滅，造成重大損失，但所幸無太多人員傷亡。");
            }
            $('#story_anping').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_anping_picture4_buttom").click(function(){
        console.log('anping_mission[4]:',anping_mission[4]);
        if(anping_mission[4]>0){
            
            $('#story_display_title').text("開台天后宮");
            $('#story_display_article_1').text("光緒21年（1895年）馬關條約，清朝將台灣割讓給日本，日軍登台大肆破壞，並與安平的清兵交戰。安平的清兵打不過實力堅強的日軍，只好逃跑。一群清兵來到了天后宮附近，眼看日軍就要追來了⋯⋯，若你是清兵，究竟該怎麼辦才好呢？");
            if(anping_mission[4]==1){
                document.getElementById("story_display").src='pic/collect/anping/4A.jpg';
                document.getElementById("story_choose").src='pic/choosebuttom/anping/Kaitai_Matsu_Temple_choose1_buttom.png';
                $('#story_display_article_2').text("五十六名清兵與日本軍在天后宮廟埕大戰，直到最後一刻，但保護了天后宮這神聖的殿堂不被血洗。後人為紀念這些英勇的清兵而在天后宮內祭拜他們，成為安平天后宮特有的五十六官將。");
            }
            else{
                document.getElementById("story_display").src='pic/collect/anping/4B.jpg';
                document.getElementById("story_choose").src='pic/choosebuttom/anping/Kaitai_Matsu_Temple_choose2_buttom.png';
                $('#story_display_article_2').text("日軍發現躲在天后官的清兵，五十六名清兵慘遭屠殺，日軍把他們潦草埋葬於廟後空地，因神聖廟堂為血腥所濺，又有冤魂出沒的傳說，於是香火冷落，後來廟宇便荒廢了。後來在民國55年才被重建。");
            }
            $('#story_anping').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_anping_picture5_buttom").click(function(){
        console.log('anping_mission[5]:',anping_mission[5]);
        if(anping_mission[5]>0){
            
            $('#story_display_title').text("安平古堡");
            $('#story_display_article_1').text("鄭成功攻打台灣並成功佔領赤崁樓後，他把目標轉移到另一個要塞熱蘭遮城，荷蘭人得知此事後，把熱蘭遮城附近的物資與人力全數遷入城內。無奈熱蘭遮城易守難攻，此時鄭成功部將糧食短缺，如果你是鄭成功的部下，會如何建議他呢？");
            if(anping_mission[5]==1){
                document.getElementById("story_display").src='pic/collect/anping/5A.jpg';
                document.getElementById("story_choose").src='pic/choosebuttom/anping/Anping_Castle_choose1_buttom.png';
                $('#story_display_article_2').text("鄭成功駐守熱蘭遮城附近的大員市街，長期圍困熱蘭遮城，同時也派部隊到各地囤墾以解決糧食不足的問題。在日後，也有約20艘糧食補給船從泉州前來支援。在九個月後成功逼退荷蘭人。");
            }
            else{
                document.getElementById("story_display").src='pic/collect/anping/5B.jpg';
                document.getElementById("story_choose").src='pic/choosebuttom/anping/Anping_Castle_choose2_buttom.png';
                $('#story_display_article_2').text("鄭成功宣布退回赤崁樓後，不料因水土不服而體弱多病。這時鄭軍也在赤崁地區大量囤田，不料卻與平埔族有大量的衝突，又造成人員的傷亡。荷蘭人的援軍已從巴達維亞到達安平，鄭成功的處境日漸危險，於是下令撤兵、返回泉州。");
            }
            $('#story_anping').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#anping_lock_story").click(function(){
        console.log('anping_mission[6]:',anping_mission[6]);
        if(anping_mission[6]>0){
            document.getElementById("story_choose").style.display='none'
            document.getElementById("story_display_article_2").style.display='none'

            if(anping_mission[6]==1){
                document.getElementById("story_display").src='./pic/ending_tool/Anping_endingA_tool.png';
                $('#story_display_title').text("珍鮮");
                $('#story_display_article_1').html("經過了將近四百多年的滄海桑田，安平是荷據時期的重要港口、鄭氏王朝的首都，不過，由於河道淤積，使清朝將政治中心移到府城內。安平失去重要地位後日漸荒廢。不過，在日治時期仍然是鹽的重要產地。如今安平雖然卸下了經濟與政治中心的地位，但安平依然保留了各時期的文化與歷史記憶。<br><br>在現今安平古堡位置中，可以看到荷蘭人所建的堡壘遺跡、鄭成功時期王城的風貌、日治時期海關的宿舍，表現出安平國際性的文化，由於安平是一個港口，所以出產各種由海鮮延伸的小吃，全台灣最有名的小吃「蚵仔煎」是在鄭成功與荷蘭人的熱蘭遮城攻防戰中產生出來的。");
            }
            else{
                document.getElementById("story_display").src='./pic/ending_tool/Anping_endingB_tool.png';
                $('#story_display_title').text("鴉片");
                $('#story_display_article_1').text("在鄭成功放棄安平後，他回到泉州並繼續尋找下一個反清復明的據點。而安平的荷蘭人雖然短暫的統領全台，但好景不常發生了駐守台灣的長官貪汙，便與荷蘭東印度公司總部分裂。後來位於台灣中部的平埔族部落「大肚王國」崛起，並成功驅逐無總部援兵的荷蘭長官。此時的大肚王國首領開始到各地區征戰，但還是被清朝派兵攻打台灣。<br><br>在清朝統治期間，西方勢力崛起，紛紛到安平進行貿易，其中的英商德記洋行最成功，除了買賣樟腦和茶之外，他們也輸入大量的鴉片到台灣。從此之後，安平成為鴉片主要消費地，不論男女老幼皆吸食鴉片。<br><br>台灣這個地理位置絕佳的轉口貿易站也吸引了許多日本人進駐，日籍長官也常至安平吸食鴉片，成為日本的鴉片後花園。安平也高度發展鴉片煙斗，各式各樣的鴉片煙斗也成為安平當地工業特色。光復後，國民政府為了配合安平經濟發展，特許成為唯一可吸食鴉片的地方。後為「西有荷蘭大麻、東有安平鴉片之稱」。");
            }
            $('#story_anping').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })




//////////////////////






    $("#story_chihkan_picture1_buttom").click(function(){
        console.log('chihkan_mission[1]:',chihkan_mission[1]);
        if(chihkan_mission[1]>0){
            
            $('#story_display_title').text("赤崁樓");
            $('#story_display_article_1').text("荷蘭人打聽漢人消息，得知國姓爺鄭成功即將攻台，於是想出若是能打通普羅民遮城（赤崁樓）與熱蘭遮城（安平古堡）之間的密道，不僅能夠運送物資，也能夠作為避難的地下通道，實在是一個好主意！不過在技術層面上仍需要很大的突破，甚至可能會有人員的傷亡，身為當時荷蘭人參謀長的你，該如何決定呢？");
            if(chihkan_mission[1]==1){
                document.getElementById("story_display").src='pic/collect/chihkan/1A.jpg';
                document.getElementById("story_choose").src='pic/chihkan/Chihkan_Tower_choose1_buttom.png';
                $('#story_display_article_2').text("因為技術方面上不能開挖經過台江內海的海底地道，於是放棄這個主意。不過卻意外地開鑿了一口水井，提供了豐富的乾淨水源。");
                console.log('1');
            }
            else{
                document.getElementById("story_display").src='pic/collect/chihkan/1B.jpg';
                document.getElementById("story_choose").src='pic/chihkan/Chihkan_Tower_choose2_buttom.png';
                $('#story_display_article_2').text("荷蘭人不需費勁地設計通往熱蘭遮城的地道，省下許多人力資源。你將調動這批人到赤崁地區搜刮糧食及補給品，以對付鄭成功。這麼一來若鄭成功進行圍城，就有較多的資源可應付。");
                console.log('2');
            }
            $('#story_chihkan').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_chihkan_picture2_buttom").click(function(){
        console.log('chihkan_mission[2]:',chihkan_mission[2]);
        if(chihkan_mission[2]>0){
            
            $('#story_display_title').text("祀典武廟");
            $('#story_display_article_1').text("祀典武廟建於明鄭時期，在當地人民心目中地位崇高，並且在當時是官拜的祀典廟宇。日治時期，祀典武廟不再列入官方廟宇，又遇到日本人對台南的市街改正，為了要拓寬永福路，因此引起拆遷的爭議。做為當時賣肉圓的你，會支持或反對拓寬呢？");
            if(chihkan_mission[2]==1){
                document.getElementById("story_display").src='pic/collect/chihkan/2A.jpg';
                document.getElementById("story_choose").src='pic/chihkan/Wu_Temple_choose1_buttom.png';
                $('#story_display_article_2').text("日本人成功拆遷武廟，使永福路拓寬，交通改善，不過卻無因此讓人潮增加（當時赤崁樓為學生宿舍、醫院，並非觀光區），又因為流失來武廟拜拜的客人，肉圓攤生意大受影響，無奈只好忍痛歇業。");
                console.log('1');
            }
            else{
                document.getElementById("story_display").src='pic/collect/chihkan/2B.jpg';
                document.getElementById("story_choose").src='pic/chihkan/Wu_Temple_choose2_buttom.png';
                $('#story_display_article_2').text("憤慨的你集結附近的神像店、幾個小吃攤商，一起向日本政府抗議，拒絕武廟的拆遷。經過雙方的協商之後，最後以道路轉折，只拆除廟左外牆及當廳而解決，成功保存了大部分的祀典武廟。");
                console.log('2');
            }
            $('#story_chihkan').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_chihkan_picture3_buttom").click(function(){
        console.log('chihkan_mission[3]:',chihkan_mission[3]);
        if(chihkan_mission[3]>0){
            document.getElementById("story_display").src='pic/collect/chihkan/3AB.jpg';
            $('#story_display_title').text("大井頭");
            $('#story_display_article_1').text("康熙二十三年（1684年），清朝正式開海，准許百姓對外貿易，當時候的你不畏黑水溝的惡名，堅持要到台灣闖闖事業。終於，船開到了台江內海，靠岸時水淺，所以改搭乘牛車登岸，來到了大井頭。大井頭是著名的渡口，俗語說「飲大井水，沒肥也美」，令附近市集住宅林立，初到台灣的你，會選擇哪裡作為你新生活的起點呢？");
            if(chihkan_mission[3]==1){
                document.getElementById("story_choose").src='pic/chihkan/Dajingtou_choose1_buttom.png';
                $('#story_display_article_2').text("大井頭擁有豐富的淡水資源，也是臨近台江內海的渡口，附近住宅非常密集，因此在康熙五十三年時，大井頭發生的火災輕易漫延數百房屋。這場惡火將你辛苦打拼的基業燒毀，讓你無家可歸，還差點命喪火場。");
                console.log('1');
            }
            else{
                document.getElementById("story_choose").src='pic/chihkan/Dajingtou_choose2_buttom.png';
                $('#story_display_article_2').text("你買了一隻牛和一台牛車，披荊斬棘，尋找適合耕種的土地，不料卻誤入西拉雅族的領土範圍，不幸地被茅射死。在康熙61年（1722年）起，因為太多像你一樣的漢人被殺害，開始採漢番隔離政策，以立碑、立界方式來規範漢人生活區域，嚴禁漢人超越其區域。");
                console.log('2');
            }
            $('#story_chihkan').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_chihkan_picture4_buttom").click(function(){
        console.log('chihkan_mission[4]:',chihkan_mission[4]);
        if(chihkan_mission[4]>0){
            
            $('#story_display_title').text("開基武廟、新美街");
            $('#story_display_article_1').text("開基武廟的關帝公相傳是鄭成功的部下從福州恭請過來的，因為靈驗，再加上位處在關帝港，商業活動發達，求籤問卜的人也絡繹不絕，因此在廟旁有不少相士開館擺攤，你也跟上了這股潮流，找了一個安靜的小攤子幫人解解籤詩、占占卜。不過，隨著關帝港河道淤積，風光不再，雖然還是有許多人會到抽籤巷解籤，但生意仍然大受影響。在這種情況下的你，該如何面對呢？");
            if(chihkan_mission[4]==1){
                document.getElementById("story_display").src='pic/collect/chihkan/4A.jpg';
                document.getElementById("story_choose").src='pic/chihkan/Xinmei_St_choose1_buttom.png';
                $('#story_display_article_2').text("你的生意蒸蒸日上，因為是關帝港附近首家買賣香、祭品和金紙的店家，壟斷開基武廟的香客生意。不過，原本隔壁攤的算命先生也開始賣起了金紙，因為金紙生意被搶，你與算命先生結仇。");
                console.log('1');
            }
            else{
                document.getElementById("story_display").src='pic/collect/chihkan/4B.jpg';
                document.getElementById("story_choose").src='pic/chihkan/Xinmei_St_choose2_buttom.png';
                $('#story_display_article_2').text("雖然生意並不穩定，卻尚能稱得上是一份養家活口的工作。有一次替人解籤占卜，進而幫助了一位落魄商人東山再起，獲得不筆不小的財富，你將攤子重新裝潢，以便吸引更多生意。");
                console.log('2');
            }
            $('#story_chihkan').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_chihkan_picture5_buttom").click(function(){
        console.log('chihkan_mission[5]:',chihkan_mission[5]);
        if(chihkan_mission[5]>0){
            
            $('#story_display_title').text("祀典大天后宮");
            $('#story_display_article_1').text("寧靖王朱術桂是朱元璋的九世孫，他受到鄭經的邀請，到台灣延續反清復明的志業，鄭經為表示禮遇，便修建一座王府給他居住。後來鄭克塽繼位，在施琅攻台時決定不戰而降，如果你是寧靖王，得知這個悲慘的消息後，復明無望，你會怎麼做？");
            if(chihkan_mission[5]==1){
                document.getElementById("story_display").src='pic/collect/chihkan/5A.jpg';
                document.getElementById("story_choose").src='pic/chihkan/Tianhou_Palace_choose1_buttom.png';
                $('#story_display_article_2').text("為了保住明朝的最後的血脈，寧靖王決定一把火燒掉自己的宅邸，製造自己死亡的假象，他帶著五位妃子逃亡，過著隱姓埋名的生活。");
                console.log('1');
            }
            else{
                document.getElementById("story_display").src='pic/collect/chihkan/5B.jpg';
                document.getElementById("story_choose").src='pic/chihkan/Tianhou_Palace_choose2_buttom.png';
                $('#story_display_article_2').text("「艱辛避海外，總為數莖髮；於今事畢矣，祖宗應容納。」傷心的寧靖王決定跟隨明朝一同走向滅亡，以表示自己的愛國之心，他就與五位妃子和家僕們一起在家中上吊自殺，將宅邸贈送給與自己友好的僧人，便成為了日後天后宮的原型。");
                console.log('2');
            }
            $('#story_chihkan').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#chihkan_lock_story").click(function(){
        console.log('chihkan_mission[6]:',chihkan_mission[6]);
        if(chihkan_mission[6]>0){
            document.getElementById("story_choose").style.display='none'
            document.getElementById("story_display_article_2").style.display='none'

            if(chihkan_mission[6]==1){
                document.getElementById("story_display").src='./pic/ending_tool/Chihkan_endingA_tool_font.png';
                $('#story_display_title').text("臥");
                $('#story_display_article_1').html("寧靖王朱術桂逃亡後，過著隱姓埋名的日子，但是他並沒有忘記自己背負著反清復明的使命，無奈年事已高，他把希望寄託在他五位妃子所生的兒子們身上，教導他們不要忘記國仇家恨。他們在郊區開始召集一些志同道合的民眾，靜待良機，終於在康熙60年（1721年）因為清朝對台灣農民不當徵收，而爆發大規模的衝突，寧靖王的兒子們成功煽動府城的農民起義，一舉拿下府城。<br><br>佔領府城之後，並與南部的平埔族人打好關係，依靠著原住民強悍的戰力以及漢人對於反清復明的決心，在清廷尚未派援兵來台前，寧靖王殘存勢力已到達北部，成功控制全台灣並建立後明王朝。後來，日本在對中國進行侵略時，同時對後明政權進攻，在1895年後明王朱鵜不敵日本投降，結束長達一百七十年的統治。");
            }
            else{
                document.getElementById("story_display").src='./pic/ending_tool/Chihkan_endingB_tool_font.png';
                $('#story_display_title').text("井");
                $('#story_display_article_1').text("寧靖王死後，他的宅邸改建成「東寧天妃宮」，因施琅的奏請，康熙帝晉封天妃為天后，天妃宮因而變為天后宮。而赤崁樓在鄭成功佔領熱蘭遮城後，赤崁樓就作為軍火庫使用，後因反清活動與地震而逐漸荒廢，但這並沒有影響到附近街道，在不遠處的大井頭，它的井水依然是當地居民重要的淡水來源，大井頭市商聚集，甚至發展出井亭夜市。另一方面，因開基武廟前的運河而逐漸形成商圈，因賣米店家林立而名為米街。<br><br>時至今日，赤崁地區經過歷史遷移，不再像以前那麼繁榮，但隨著觀光業的興起，這些老店也推動歷史街區的再興。加上新店進駐後，新舊店家相輔相成，再透過文史導覽，讓大家都能夠知道這些歷史街區的老故事。傳統與現代融合後產生新的火花，逐漸重現昔日的風光。");
            }
            $('#story_anping').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
                console.log('done')
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })


    //////////////////////






    $("#story_confucious_picture1_buttom").click(function(){
        console.log('confucious_mission[1]:',confucious_mission[1]);
        if(confucious_mission[1]>0){
            
            $('#story_display_title').text("台灣文學館");
            $('#story_display_article_1').text("在日治時期台灣文學館曾經是台南州廳，是當時台南州的最高行政中心。在二戰期間受到美軍的轟炸，導致嚴重受損，屋頂及木構造部分接近全毀，僅餘外牆矗立。國民政府隨意修復後，將此地作為空軍後勤供應部使用，而當時的台南市政府則位於今天的建興國中(原南門尋常小學)裡辦公。在國小裡辦公似乎不是一個長久之計，於是就有搬遷的聲音出現。如果你是當時台南市政府的官員，經過討論過後認為台南州廳最為適合，但目前有空軍作為使用，你該怎麼做選擇呢？");
            if(confucious_mission[1]==1){
                document.getElementById("story_display").src='pic/collect/confucious/1A.jpg';
                document.getElementById("story_choose").src='pic/confucious/National_Museum_of_Taiwan_Literature_choose1_bottom-01.png';
                $('#story_display_article_2').text("後來在民國57年(1968年)，臺南市政府函請空軍供應司令部遷讓臺南州廳建築，並補償新臺幣900萬元，再耗資200萬修復。你滿心歡喜的整理辦公的雜物，準備搬進較雄偉氣派的台南州廳。");
                console.log('1');
            }
            else{
                document.getElementById("story_display").src='pic/collect/confucious/1B.jpg';
                document.getElementById("story_choose").src='pic/confucious/National_Museum_of_Taiwan_Literature_choose2_bottom-01.png';
                $('#story_display_article_2').text("台南市議會決議後，決定不要花錢修復日本人蓋的房子，自己另造一棟新的現代化大樓，於是將地點選在當時的臺灣省立成功大學附近建地，耗資新台幣1100萬，將台南市政治中心遷往東邊。");
                console.log('2');
            }
            $('#story_confucious').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_confucious_picture2_buttom").click(function(){
        console.log('confucious_mission[2]:',confucious_mission[2]);
        if(confucious_mission[2]>0){
            
            $('#story_display_title').text("孔廟");
            $('#story_display_article_1').text("在清朝道光年間，有位名叫陳守娘的姑娘，在丈夫死後守節堅持不嫁，不料卻被婆婆與小姑強迫賣身，守娘寧死不從，卻被她們折磨至死。鄉民們得知這個消息後欲告官，不過官方卻欲擺平此事，鄉民們忿忿不平，府城也雞犬不寧，夜半叫喊聲不斷⋯⋯，有冤魂作祟一說。此時鄉民們都認為是守娘顯靈，紛紛祭拜她，若你是當時的縣太爺，你將會如何看待這件事？");
            if(confucious_mission[2]==1){
                document.getElementById("story_display").src='pic/collect/confucious/2A.jpg';
                document.getElementById("story_choose").src='pic/confucious/Confucius_Temple_choose1_buttom.png';
                $('#story_display_article_2').text("守娘不願屈服，她變成厲鬼，將小販的銀紙變成紙錢，傳說還讓官府的物品飛動⋯⋯。她不願自己的不幸就此被世人遺忘，陳守娘在半夜在你的床邊現身⋯⋯。");
                console.log('1');
            }
            else{
                document.getElementById("story_display").src='pic/collect/confucious/2B.jpg';
                document.getElementById("story_choose").src='pic/confucious/Confucius_Temple_choose2_buttom.png';
                $('#story_display_article_2').text("你與其他官員討論後，決定賜封守娘，讓世人繼續記得她的貞節與故事。你在府城孔廟的節孝祠安排了一個位子給陳守娘，牌上寫著「欽褒節烈邑民人林壽妻陳守娘神位」，以供後人祭拜。守娘因此不再作怪。");
                console.log('2');
            }
            $('#story_confucious').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_confucious_picture3_buttom").click(function(){
        console.log('confucious_mission[3]:',confucious_mission[3]);
        if(confucious_mission[3]>0){
            
            $('#story_display_title').text("林百貨、土地銀行");
            $('#story_display_article_1').text("夜幕低垂，燈光照亮末廣町二丁目，閃亮熱鬧，台南銀座不浪得虛名，林百貨是台南人稱的「五棧樓仔」，是當時最高的建築物。當你畢業時，便進到這間最摩登的百貨公司工作，因為表現良好，而破格被升為二樓主管。然而，在1941年因太平洋戰爭而令台灣物資受到統制，日本進口的商品有一定的配額，令林百貨的營業額受到嚴重影響，這時候的你該如何因應呢？");
            if(confucious_mission[3]==1){
                document.getElementById("story_display").src='pic/collect/confucious/3A.jpg';
                document.getElementById("story_choose").src='pic/confucious/HAYASHI_Shop_choose1_buttom.png';
                $('#story_display_article_2').text("雖然有很多反對的聲音出現，但你仍然堅持這個決定，認為在日ㄊ本人開的百貨賣台灣商品也不是壞事。引入一些台灣精美商品後，受到許多上層社會人士的喜愛，讓營業額稍微回升，但還是在1945年太平洋戰爭後，日本戰敗，林百貨仍然結束營業。");
                console.log('1');
            }
            else{
                document.getElementById("story_display").src='pic/collect/confucious/3B.jpg';
                document.getElementById("story_choose").src='pic/confucious/HAYASHI_Shop_choose2_buttom.png';
                $('#story_display_article_2').text("要做裁員這個決定你也很不捨，做了這項決定後減少了員工的向心力，對林百貨的認同感降低。營業時間的減少更影響了營業額。1945太平洋戰爭後，日本戰敗，林百貨終究結束營業。");
                console.log('2');
            }
            $('#story_confucious').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_confucious_picture4_buttom").click(function(){
        console.log('confucious_mission[4]:',confucious_mission[4]);
        if(confucious_mission[4]>0){
            
            $('#story_display_title').text("武德殿");
            $('#story_display_article_1').text("武德殿是日本人宣揚武道精神的場所，在日治後期更是作戰準備的地方，也時常舉辦警察官武道大會。身為台籍警察的你，劍道技如神，不過卻受不到平等的待遇，升官也遭阻饒、同工不同酬等等⋯⋯。明天就是武道大會，你獲得這次參加的機會，在武德殿裡的武道場上，你將會如何表現？");
            if(confucious_mission[4]==1){
                document.getElementById("story_display").src='pic/collect/confucious/4A.jpg';
                document.getElementById("story_choose").src='pic/confucious/BUTOKUDEN_choose1_buttom.png';
                $('#story_display_article_2').text("在日本同事田中先生顯露出弱點時，你刻意不擊破，反而是讓他搶先一步對你使出反擊。田中先生很清楚你都在讓著他，於是對你產生更濃厚的敵意，認為你看不起他。在日後的工作中中，他處處刁難著你⋯⋯。");
                console.log('1');
            }
            else{
                document.getElementById("story_display").src='pic/collect/confucious/4B.jpg';
                document.getElementById("story_choose").src='pic/confucious/BUTOKUDEN_choose2_buttom.png';
                $('#story_display_article_2').text("這是一個難得的好機會，因為比武的結果會定期刊登在台灣警察組織出版的相關刊物中，你過關斬將地拿下良好的成績，受到警物局長的青睞，破格升官。");
                console.log('2');
            }
            $('#story_confucious').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#story_confucious_picture5_buttom").click(function(){
        console.log('confucious_mission[5]:',confucious_mission[5]);
        if(confucious_mission[5]>0){
            
            $('#story_display_title').text("台南法院博物館");
            $('#story_display_article_1').text("台南法院博物館是日治時期所建的法院，在光復後依然是作為地方法院使用。在二二八事件發生後，你剛獲得一份法院的秘書工作，在整理法院判決書的過程當中，你發現一疊耐人尋味的文件檔案，當中還夾著人權律師湯德章等人的軍事審判判決書，上頭沒有審判法官的名字、案號以及日期，與正式的判決書不同⋯⋯。涉世未深的你該如何做呢？");
            if(confucious_mission[5]==1){
                document.getElementById("story_display").src='pic/collect/confucious/5A.jpg';
                document.getElementById("story_choose").src='pic/confucious/The_Judicial_Museum_choose1_buttom.png';
                $('#story_display_article_2').text("你公開了這幾份文件，為湯德章等人被迫害增添了一項有利證據，讓原本憤怒的民眾更加憎恨國民政府。政府清算相關人員之後，發現就是你將判決書洩漏給報社，於是你就被冠上一個「顛覆國家政權罪」而判處死刑。");
                console.log('1');
            }
            else{
                document.getElementById("story_display").src='pic/collect/confucious/5B.jpg';
                document.getElementById("story_choose").src='pic/confucious/The_Judicial_Museum_choose2_buttom.png';
                $('#story_display_article_2').text("你將這疊判決書抄寫過一份後，將原稿收進保險庫的最深處，這份文件不見天日，而你對於政府的腐敗黑暗感到無力，於是便辭去這份法院秘書的工作，隱居到南投日月潭，過著遠離世俗的生活。");
                console.log('2');
            }
            $('#story_confucious').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })
    $("#confucious_lock_story").click(function(){
        console.log('confucious_mission[6]:',confucious_mission[6]);
        if(confucious_mission[6]>0){
            document.getElementById("story_choose").style.display='none'
            document.getElementById("story_display_article_2").style.display='none'

            if(confucious_mission[6]==1){
                document.getElementById("story_display").src='./pic/ending_tool/ConfuciusTemple_endingA_tool.png';
                $('#story_display_title').text("真相");
                $('#story_display_article_1').html("二戰結束後，國民政府接替日本開始統治台灣，然而許多來自中國大陸的軍人毫無軍紀可言，令台灣人民愈來愈敵視國民黨，加上掏空民生物資運往中國大陸支援國共內戰，導致民不聊生，不滿的情緒不斷累積，而專賣局查緝員在查緝私菸，因不當使用公權力造成民眾一死一傷，成為了二二八事情爆發點。在民眾示威請願，卻遭到衛兵開槍掃射，使原先的請願運動轉變成為反抗政府行動並蔓延全台灣。<br><br>國民黨請求中國大陸派兵增援，大陸部隊到台後，即以叛亂罪名逮捕湯德章，並在民生綠園公開槍殺湯德章，在湯德章死後，報社發表一份湯德章的死刑判決書，揭露湯德章是被迫害致死，引起台南民眾的憤怒，決定拿槍保衛自己的土地，他們聯合二七部隊一起抵抗國民黨，並成功佔領台南，成立了台灣民眾互助會，之後拖住國民黨的軍隊，而國民黨面對國共內戰與台灣民眾的暴動顯得無力，最後與台灣民眾互助會達成協議，國民黨不再一黨獨大，也不能對台灣以獨裁的手段統治。");
            }
            else{
                document.getElementById("story_display").src='./pic/ending_tool/ConfuciusTemple_endingB_tool.png';
                $('#story_display_title').text("黨國");
                $('#story_display_article_1').text("二戰結束後，國民政府接替日本開始統治台灣，在二二八事件後，台灣開始進入戒嚴時期，這個戒嚴令開始成為中華民國政府在臺灣穩固統治的重要法律，並等同宣布臺灣處於如戰爭般的緊急狀態。這使人民無言論自由、被箝制思想、不得集會結社等，在高壓統治下生活。在這期間，國民政府也積極進行去日本化政策，拆除神社（或改成忠烈祠）及許多古蹟建築，例如全台武德殿數量從70座減少至17座，位於府城的宮古座也在1979年被拆除。去日化的思維持續到民國六、七十年代（1974年《清除臺灣日據時代表現日本帝國主義優越感之殖民統治紀念遺跡要點》）<br><br>。幸運的是，現在的林百貨、武德殿、台灣文學館等古蹟在當時被國民政府作為使用，因此被保留下來。在民國76年（1987年）解嚴，開放黨禁、報禁，為社會帶來空前轉變，民主與社會運動風起雲湧，解嚴30年，台灣從威權體制邁向民主自由，也對文化資產保存制定更多更縝密的法規，雖然尚未健全，破壞珍貴古蹟的事件頻傳，但也正朝著這個文資保存的方向努力當中。");
            }
            $('#story_confucious').fadeOut(500,function(){
                $('#story_page2').fadeIn(500);
                console.log('done')
            });
            story_back_buttom.style.backgroundImage='url(pic/back_buttom.png)';
            story_page=2;
        }
    })


})
