
            for (var i = 1; i <= 600; i++){
              $("<div class='Number_item'>"+i+"s</div>").appendTo("#Editor_number")
              $("<div class='item' id='obj_m_c"+i+"' onClick='BoxCreateColor(this)'></div>").appendTo("#Editor_action_m_c")
              $("<div class='item' id='obj_m_a"+i+"' onClick='BoxCreateColor(this)'></div>").appendTo("#Editor_action_m_c2")
              $("<div class='item' id='obj_s_c"+i+"' onClick='BoxCreateColor(this)'></div>").appendTo("#Editor_action_m_c3")
              $("<div class='item' id='obj_s_a"+i+"' onClick='BoxCreateAnimation(this)'></div>").appendTo("#Editor_action_m_a")
            }
            //カラー
              var $rgb;

              var $Q = "rgb(0,0,153)";
              var $W = "rgb(0,0,255)";
              var $E = "RGB(0,153,255)";
              var $R = "RGB(0,204,255)";
              var $T = "RGB(0,255,255)";
              var $Y = "RGB(102,255,255)";
              var $U = "RGB(51,255,204)";
              var $I = "RGB(102,255,153)";
              var $O = "RGB(51,255,102)";
              var $P = "RGB(102,255,51)";
             
              var $A = "RGB(0,153,0)";
              var $S = "RGB(0,204,0)";
              var $D = "RGB(0,255,0)";
              var $F = "RGB(102,255,00)";
              var $G = "RGB(204,255,51)";
              var $H = "RGB(255,255,0)";
              var $J = "RGB(255,204,0)";
              var $K = "RGB(255,153,0)";
              var $L = "RGB(255,102,0)";
             
              var $Z = "RGB(255,0,0)";
              var $X = "RGB(255,0,102)";
              var $C = "RGB(255,0,153)";
              var $V = "RGB(255,0,204)";
              var $B = "RGB(255,0,255)";
              var $N = "RGB(153,0,255)";
              var $M = "rgb(153,255,0)";
            //アニメーション 
              var $a1 = "animation-name: 'anime1';animation-duration: 1s;animation-timing-function: ease; animation-delay:0;animation-iteration-count: 0; animation-direction:alternate;";
              var $a2 = "animation-name: 'anime2';  animation-duration: 1s; animation-timing-function: ease; animation-delay:0; animation-iteration-count: 0;  animation-direction:alternate;";
              var $a3 = "animation-name: 'anime3';animation-duration: 3s;animation-timing-function: ease; animation-delay:0;animation-iteration-count: 0;animation-direction:normal;";
              var $a4 = " animation-name: 'anime4'; animation-duration: 3s; animation-timing-function: ease; animation-delay:0;animation-iteration-count: 0; animation-direction:normal;";
              var $a5 = "animation-name: 'anime5'; animation-duration: 3s; animation-timing-function: ease; animation-delay:0;  animation-iteration-count: 0; animation-direction:normal;";
              var $a6 = " animation-name: 'anime6';animation-duration: 3s;animation-timing-function: ease; animation-delay:0;animation-iteration-count: 0;animation-direction:normal;";
              var $a7 = "animation-name: 'anime7'; animation-duration: 1s; animation-timing-function: ease;animation-delay:0;animation-iteration-count: 0;animation-direction:normal;";
              var $a8 = "animation-name: 'anime5'; animation-duration: 3s; animation-timing-function: ease; animation-delay:0;  animation-iteration-count: 0; animation-direction:normal;";
              var $a9 = " animation-name: 'anime6';animation-duration: 3s;animation-timing-function: ease; animation-delay:0;animation-iteration-count: 0;animation-direction:normal;";
              var $a0 = "animation-name: 'anime7'; animation-duration: 1s; animation-timing-function: ease;animation-delay:0;animation-iteration-count: 0;animation-direction:normal;";

              $("#KeyQ").css("background",$Q);
              $("#KeyW").css("background",$W);
              $("#KeyE").css("background",$E);
              $("#KeyR").css("background",$R);
              $("#KeyT").css("background",$T);
              $("#KeyY").css("background",$Y);
              $("#KeyU").css("background",$U);
              $("#KeyI").css("background",$I);
              $("#KeyO").css("background",$O);
              $("#KeyP").css("background",$P);

              $("#KeyA").css("background",$A);
              $("#KeyS").css("background",$S);
              $("#KeyD").css("background",$D);
              $("#KeyF").css("background",$F);
              $("#KeyG").css("background",$G);
              $("#KeyH").css("background",$H);
              $("#KeyJ").css("background",$J);
              $("#KeyK").css("background",$K);
              $("#KeyL").css("background",$L);
              
              $("#KeyZ").css("background",$Z);
              $("#KeyX").css("background",$X);
              $("#KeyC").css("background",$C);
              $("#KeyV").css("background",$V);
              $("#KeyB").css("background",$B);
              $("#KeyN").css("background",$N);
              $("#KeyM").css("background",$M);
            
        //ここからカラー送信コード
            function send_color () {
              console.log(msg_c);
              s.emit("C_2_S_url", {value:msg}); //サーバへ送信
            }
            function send_animation () {
              console.log(msg_a);
              s.emit("C_2_S_url", {value:msg}); //サーバへ送信
            }
        //ActionBox作成
          //color1
            function BoxCreateColor (obj) {
              $('body').append('<div id="modal-overlay"></div>');
              $('#modal-overlay').fadeIn('fast');
              $('#modal-content-color').fadeIn('slow');
              console.log("a");
              $(window).keyup(function(e) {
                console.log("b");
                var code = e.keyCode || e.which;
                var keyName = String.fromCharCode(code);
                $rgb = eval("$" +　keyName);
                  $('#modal-content-color,#modal-overlay').fadeOut('slow',function(){
                    //[#modal-overlay]を削除する
                    $('#modal-overlay').remove(); 
                  }); 
                ObjId = $(obj).attr("id");
                $("#"+ObjId).empty();
                console.log($("#"+ObjId));
                console.log($((
                  "<div class='ActionBoxColor' id='"+
                  keyName+
                  ObjId+
                  "'"+
                  "value='"+
                  $rgb+
                  "' style='background:"+
                  $rgb+
                  ";'>"+
                  $rgb+
                  "</div>"
                )));

                $("#"+ObjId).append(
                  "<div class='ActionBoxColor' id='"+
                  keyName+
                  ObjId+
                  "'"+
                  "value='"+
                  $rgb+
                  "' style='background:"+
                  $rgb+
                  ";'>"+
                  $rgb+
                  "</div>"
                );
                $(window).unbind("keyup");
                return false;
              });
              //[#modal-overlay]をクリックしたら…
              $('#modal-overlay').click(function(){
                //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
                $('#modal-content-color,#modal-overlay').fadeOut('slow',function(){
                  //[#modal-overlay]を削除する
                  $('#modal-overlay').remove(); 
                });
              });
            }

          //color2
            function BoxCreateColor2 (obj) {
              $('body').append('<div id="modal-overlay"></div>');
              $('#modal-overlay').fadeIn('fast');
              $('#modal-content-color').fadeIn('slow');
              $(window).keyup(function(e){
                var code = e.which;
                var keyName = String.fromCharCode(code);
                $rgb = eval("$" +　keyName);
                  $('#modal-content-color,#modal-overlay').fadeOut('slow',function(){
                    //[#modal-overlay]を削除する
                    $('#modal-overlay').remove(); 
                  }); 
                ObjId = $(obj).attr("id");
                $("#"+ObjId).empty();
                $("#"+ObjId).append(
                  "<div class='ActionBoxColor' id='"+
                  keyName+
                  "_item'"+
                  " value='"+
                  $rgb+
                  "' style='background:"+
                  $rgb+
                  ";'>"+
                  $rgb+
                  "</div>"
                );
                return false;
              });
              //[#modal-overlay]をクリックしたら…
              $('#modal-overlay').click(function(){
                //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
                $('#modal-content-color,#modal-overlay').fadeOut('slow',function(){
                  //[#modal-overlay]を削除する
                  $('#modal-overlay').remove(); 
                });
              });
            }


          //Animation
            function BoxCreateAnimation (obj) {
              $('body').append('<div id="modal-overlay"></div>');
              $('#modal-overlay').fadeIn('fast');
              $('#modal-content-animation').fadeIn('slow');
              $(window).keyup(function(e){
                var code = e.which;
                var keyName = String.fromCharCode(code);
                $rgb = eval("$a" +　keyName);
                  $('#modal-content-animation,#modal-overlay').fadeOut('slow',function(){
                    //[#modal-overlay]を削除する
                    $('#modal-overlay').remove(); 
                  }); 
                ObjId = $(obj).attr("id");
                $("#"+ObjId).empty();
                $("#"+ObjId).append(
                  "<div class='ActionBoxColor' id='"+
                  keyName+
                  "_Animation'"+
                  " value='"+
                  $rgb+
                  "' style='background:"+
                  $rgb+
                  ";'>"+
                  $rgb+
                  "</div>"
                );
              });
              //[#modal-overlay]をクリックしたら…
              $('#modal-overlay').click(function(){
                //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
                $('#modal-content-animation,#modal-overlay').fadeOut('slow',function(){
                  //[#modal-overlay]を削除する
                  $('#modal-overlay').remove(); 
                });
              });
            }
              
              function back () {
                  var $ScrollBox = document.getElementById( "ScrollBox" );
                  $ScrollBox.scrollLeft = $scrollX - 1;
                  if( $scrollX < $ScrollBox.scrollWidth - $ScrollBox.clientWidth ){
                      setTimeout( start, 1 );
                  }else{
                      $scrollX = 0;
                      $ScrollBox.scrollLeft = 0;
                      setTimeout( start, 1 );
                  }
              }
              
              function stop () {
                  var $ScrollBox = document.getElementById( "ScrollBox" );
                  $ScrollBox.scrollLeft = ++$scrollX;
                  if( $scrollX < $ScrollBox.scrollWidth - $ScrollBox.clientWidth ){
                      setTimeout( start, 1 );
                  }else{
                      $scrollX = 0;
                      $ScrollBox.scrollLeft = 0;
                      setTimeout( start, 1 );
                  }
              }

              var $scrollX = 0;
              function start() {
                console.log("aaaaaaa");
                  var div1 = $("#bar");
                  var div2 = $(".ActionBoxColor");
                  var div3 = $(".ActionBoxAnimation");
                  //color判定
                  div2.each(function(i, e) {
                    
                    if( ( div1.offset().left < $(e).offset().left + $(e).width() ) &&
                    ( div1.offset().left > $(e).offset().left ) )
                    {
                      console.log($(e).attr("value"));
                      // var msg_c = $(e).attr("value")
                      // send_color();
                    }

                  });

                  // //color2判定
                  // if( ( div1.offset().left < div3.offset().left + div3.width() ) &&
                  // ( div1.offset().left + div1.width() > div3.offset().left ) )
                  // {
                  //   var msg_c2 = div3.attr("value")
                  //   send_color2();
                  // }
                  // //Animation判定
                  // if( ( div1.offset().left < div4.offset().left + div4.width() ) &&
                  // ( div1.offset().left + div1.width() > div4.offset().left ) )
                  // {
                  //   var msg_a = div4.attr("value")
                  //   send_animation();
                  // }
                  // //Text判定
                  // if( ( div1.offset().left < div5.offset().left + div5.width() ) &&
                  // ( div1.offset().left + div1.width() > div5.offset().left ) )
                  // {
                  //   var msg_t = div5.attr("value")
                  //   send_text();
                  // }
                  //スクロール開始  
                  var $ScrollBox = document.getElementById( "ScrollBox" );
                  $ScrollBox.scrollLeft = ++$scrollX;
                  if( $scrollX < $ScrollBox.scrollWidth - $ScrollBox.clientWidth ){
                      setTimeout( start, 1 );
                  }else{
                      $scrollX = 0;
                      $ScrollBox.scrollLeft = 0;
                      setTimeout( start, 1 );
                  }
              }
