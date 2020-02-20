window.onscroll = function(){
  //回到顶部
  var sllTop = document.documentElement.scrollTop||document.body.scrollTop;
  if(sllTop>240){
    $('#get-top').css('display','block')
  }else{
    $('#get-top').css('display','none')
  }
}
$('#get-top').click(function(){ 
  $('body,html').animate({
    scrollTop: 0
  }, 800);//点击回到顶部按钮，缓懂回到顶部,数字越小越快
})
// 显示/隐藏二级菜单
$(".left-menu-btn").hover(function(){
  $('#tow-nav').fadeIn(200);
},function(){
  $("#tow-nav").hover(function(){
    $('#tow-nav').fadeIn(0);
  },function(){
    $('#tow-nav').fadeOut(0)
  });
  $('#tow-nav').fadeOut(0)
})

//增加网页链接
var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(str){var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&255;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&3)<<4);out+="==";break}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&3)<<4)|((c2&240)>>4));out+=base64EncodeChars.charAt((c2&15)<<2);out+="=";break}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&3)<<4)|((c2&240)>>4));out+=base64EncodeChars.charAt(((c2&15)<<2)|((c3&192)>>6));out+=base64EncodeChars.charAt(c3&63)}return out}function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&255]}while(i<len&&c1==-1);if(c1==-1){break}do{c2=base64DecodeChars[str.charCodeAt(i++)&255]}while(i<len&&c2==-1);if(c2==-1){break}out+=String.fromCharCode((c1<<2)|((c2&48)>>4));do{c3=str.charCodeAt(i++)&255;if(c3==61){return out}c3=base64DecodeChars[c3]}while(i<len&&c3==-1);if(c3==-1){break}out+=String.fromCharCode(((c2&15)<<4)|((c3&60)>>2));do{c4=str.charCodeAt(i++)&255;if(c4==61){return out}c4=base64DecodeChars[c4]}while(i<len&&c4==-1);if(c4==-1){break}out+=String.fromCharCode(((c3&3)<<6)|c4)}return out}function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=1)&&(c<=127)){out+=str.charAt(i)}else{if(c>2047){out+=String.fromCharCode(224|((c>>12)&15));out+=String.fromCharCode(128|((c>>6)&63));out+=String.fromCharCode(128|((c>>0)&63))}else{out+=String.fromCharCode(192|((c>>6)&31));out+=String.fromCharCode(128|((c>>0)&63))}}}return out}function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&31)<<6)|(char2&63));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&15)<<12)|((char2&63)<<6)|((char3&63)<<0));break}}return out}function doit(){var f=document.f;f.output.value=base64encode(utf16to8(f.source.value));f.decode.value=utf8to16(base64decode(f.output.value))};
var strHtml = "\r\n";
$.each(dh_data, function(i, item) {
  
  strHtml += '<div class="col-sm-6 col-md-4 mb-3 dh"><div class="row"><div class="col-xs-12"><strong class="dhname" style="color: rgb(41, 56, 70);" id="1">'+ item["name"] +'</strong></div>';
  item_data = item['item'];
  $.each(item_data, function(j, val) {
    strHtml += '<div class="col-xs-4 mb-2"><a class="dhurl" href="' + val['url'] + '" target="_blank" style="color: rgb(41, 56, 70);background-color: rgb(255, 255, 255);">'+ val['name'] +'</a></div>';
  });
  strHtml += '</div></div>';
});
$(".dhone").append(strHtml);

//判断用户使用的设备
var deviceVal  = browserRedirect();
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return 'phone';
  } else {
    return 'pc';
  }
}

/*
 * 2018-6-12更新
 * 解决在低分辨率下首页内容过高导致滚动条出现，影响主题背景图片不全屏的问题
 * 解决方式：对于屏幕分辨率高度低于845px显示器，改变首页的内容为6块区域。
 */

 (function(){
  //当浏览器窗口被调整大小时触发
  window.onresize = function(){
    ShowHideElement("i-link-box","linkList-item",845);
  }
  window.onload = function(){
    ShowHideElement("i-link-box","linkList-item",845); 
  }
  function ShowHideElement(Element1, Element2, Vaule){
    var Person = document.getElementsByClassName(Element1);
    var BoxHeight = document.getElementsByClassName(Element2);
    var WindowHeight = window.innerHeight||document.body.clientHeight;
    //遍历获取到的元素
    for(var i=6; i<Person.length; i++){
      if(WindowHeight <= Vaule && deviceVal === "pc"){
        Person[i].style.display = "none";
        BoxHeight[0].style.marginTop="5px";
      }else{
        Person[i].style.display = "block";
        BoxHeight[0].style.marginTop="0px";
      }
    }
  }
  window.ShowHideElement = ShowHideElement;
}());
    
var now = -1;
var resLength = 0;
var thisSearch = 'https://www.baidu.com/s?wd=';
var thisSearchIcon = './logo.jpg';
var storage = window.localStorage;
if(!storage.stopHot){
    storage.stopHot = true
}
storage.stopHot == 'false' ? $('#hot-btn').addClass('off') : $('#hot-btn').removeClass('off');
var ssData = storage.searchEngine;
if(storage.searchEngine != undefined){
  ssData = ssData.split(','); 
  thisSearch = ssData[0];
  $('.search-icon').attr('src', ssData[1])
}

// 按键松开时执行
$('#txt').keyup(function(e){
  // 判断输入框是否有内容
  if($('#txt').val() != ''){
      $('.search-clear').css('display','block');
    $('.search-clear').click(function(){
      $('#txt').val('');
      $('#box ul').html('');
      $('.search-clear').css('display','none')
    })
  }else{
    $('.search-clear').css('display','none')
  }

  if(e.keyCode == 38 || e.keyCode == 40 || storage.stopHot != 'true'){
      return
  };
  var dat = {
      wd: $('#txt').val()
  };
  if($('#txt').val()!=''){
      $('#box ul').text('');
      $('#box').css('display','block');
        $.ajax({
          type: "GET",
          url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
          async: true,
          data: dat,
          dataType : 'jsonp',
          jsonp: 'cb',
          success: function(res){
              for(var i = 0; i < res.s.length; i++){
                  resLength = res.s.length;
                  oli_i = '<li>'+res.s[i]+'</li>';
                  $('#box ul').append(oli_i);
                  
                  $('#box ul li').eq(i).click(function(){
                      $('#txt').val(this.innerHTML);
                      window.open(thisSearch + this.innerHTML);
                      $('#box ul').html('');
                      $('#box').css('display','none')
                  })
              };
                    //$('#box ul').html() === '' ? $('#box').css('height','0px') : $('#box').css('height','auto');
          },
          error: function(res){
              console.log(res)  
          }
      });
  }else{
      $('#box ul').html('')
      //$('#box ul').html() === '' ? $('#box').css('height','0px') : $('#box').css('height','auto');
  };
});

$('#txt').keydown(function(ev){
    if(ev.keyCode==40){
      now++;
      if(now > resLength-1){   
        now = 0;
      }
      $('#box ul li').eq(now).addClass('current').siblings().removeClass('current')
      $('#txt').val($('#box ul li').eq(now).text())   
    };
    if(ev.keyCode==38){
        if(now == -1 || now == 0){
          now = resLength
        }
        now--
        $('#box ul li').eq(now).addClass('current').siblings().removeClass('current');
        $('#txt').val($('#box ul li').eq(now).text())
    };
    if(ev.keyCode==13){
		var textValue = $('#txt').val();
		if(textValue != ''){
			window.open(thisSearch + $('#txt').val())
			// $('#txt').val('');
			$('#box ul').html('')
		}else{
			new $.zui.Messager('请输入关键字', {
				icon: 'bell', // 定义消息图标
				type: 'danger',
				placement: 'top',
				close: false
			}).show();
		}
	}
})

$(function(){
  //$('#box ul').html() === '' ? $('#box').css('height','0px') : $('#box').css('height','auto');
  var search = {
    data: [{
        name: '谷歌',
        img: '/images/logo_2.jpg',
        url: 'https://www.google.com/search?q='
      },{
      name: '百度',
      img: '/images/logo.jpg',
      url: 'https://www.baidu.com/s?wd='
    }, {
      name: 'Github',
      img: '/images/logo_3.jpg',
      url: 'https://github.com/search?q='
    }, {
      name: 'SOF',
      img: '/images/logo_4.jpg',
      url: 'https://stackoverflow.com/search?q='
    }, {
      name: 'Docker',
      img: '/images/logo_4.jpg',
      url: 'https://hub.docker.com/search?type=image&?q='
    }]
  }
  for(var i = 0; i < search.data.length; i++){
    var addList = '<li><img src="' + search.data[i].img + '"/>' + search.data[i].name + '</li>'
    $('.search-engine-list').append(addList);
  }

  $('.search-icon, .search-engine').hover(function() {
    $('.search-engine').css('display', 'block')
  }, function() {
    $('.search-engine').css('display', 'none')
  });

  $('#hot-btn').on('click', function() {
    $(this).toggleClass('off');
    if(storage.stopHot == 'true'){
      storage.stopHot = false
    }else{
      storage.stopHot = true
    }
    console.log(storage.stopHot)
  });

  $('.search-engine-list li').click(function() {
    var _index = $(this).index();
    var thisImg = $(this).children().attr('src');
    $('.search-icon').attr('src', thisImg)
    thisSearch = search.data[_index].url;
    $('.search-engine').css('display', 'none')

    storage.searchEngine = [thisSearch, thisImg]
  })
})
$("#search-btn").click(function(){
  var textValue = $('#txt').val();
  if(textValue != ''){
            window.open(thisSearch + $('#txt').val())
        // $('#txt').val('');
        $('#box ul').html('')
  }else{
    new $.zui.Messager('请输入关键字', {
      icon: 'bell', // 定义消息图标
      type: 'danger',
      placement: 'top',
      close: false
    }).show();
  }
});

/*
* @Author: Marte
* @Date:   2018-05-20 09:03:53
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-11 16:18:47
*/

'use strict';


// 在这里修改id，和速度
$(function(){
    if(deviceVal == 'phone'){
      $('#menu').css({'overflow':'hidden','overflow-y':'scroll'})
      return
    }
    var api1 = new myApi();
    api1.mouseScroll.inte($('#menu'),30);
})


//下面别动
function myApi(){

    this.mouseScroll = {

        inte : function(obj,value){
            this.OBJ = obj;
            this.addscroll(obj);



            var outH = obj.outerHeight(),
                oScrollcontent = obj.children(':first'),
                contentH = oScrollcontent.outerHeight(),
                oYscrollinnerH = outH/contentH*outH,
                oYscrollouter = obj.find('#Yscrollouter'),
                oYscrollinner = obj.find('#Yscrollinner');

            obj.css({'position': 'relative','overflow':'hidden'});
            oScrollcontent.css('position', 'absolute');

            if(contentH > outH){
                this.mousehover(obj, oYscrollouter, oYscrollinner);
                this.mousewheel(obj, value, oScrollcontent, oYscrollinner, outH, contentH, oYscrollinnerH );
                this.mousemoved(obj, oScrollcontent, oYscrollouter, oYscrollinner, outH, contentH, oYscrollinnerH );
            };
        },

        addscroll : function(obj,value){
            obj.append('<div id="Yscrollouter"><div id="Yscrollinner"></div></div>');
            $('#Yscrollinner').css('cursor','pointer');
        },

        mousehover : function(obj, outer, inner){

            obj.hover(function() {
                outer.fadeIn(400);
            }, function() {
                outer.fadeOut(400);
            });

            inner.hover(function() {
                $('body').css({
                    '-moz-user-select': 'none',
                    '-webkit-user-select': 'none',
                    '-ms-user-select': 'none',
                    '-khtml-user-select': 'none',
                    'user-select': 'none',});
            }, function() {
                $('body').css({
                    '-moz-user-select': 'auto',
                    '-webkit-user-select': 'auto',
                    '-ms-user-select': 'auto',
                    '-khtml-user-select': 'auto',
                    'user-select': 'auto',});
            });

        },

        mousewheel : function(obj, value, O, inner, H1, H2, H3){

            var oScrollcontentVal = value/(H1 - H3)*(H2 - H1);

                inner.height(H3);  //滚动条高度

            obj.on('mousewheel',function(event,delta ){  //绑定滚轮事件

                event.preventDefault();  //阻止浏览器默认为行

                var delta = event.originalEvent.wheelDelta;
                var oYscrollinnerTop = inner.position().top;

                var oScrollcontentTop = O.position().top;

                if(delta > 0){
                    if(oYscrollinnerTop - value < 0){
                        inner.css('top', 0);
                        O.css('top', 0);
                    }else{
                        inner.css('top', oYscrollinnerTop - value);
                        O.css('top', oScrollcontentTop + oScrollcontentVal);
                    }
                }else{
                    if(oYscrollinnerTop + value > H1 - H3){
                        inner.css('top', H1 - H3);
                        O.css('top', H1 - H2);
                    }else{
                        inner.css('top', oYscrollinnerTop + value);
                        O.css('top', oScrollcontentTop - oScrollcontentVal);
                    }
                };
            });

        },

        mousemoved : function(obj, O, outer, inner, H1, H2, H3){
            inner.on('mousedown',function(event){   //绑定鼠标事件

                var clientY = event.clientY,
                    oYscrollinnerTop = inner.position().top,
                    oScrollcontentTop = O.position().top,

                    moveY = 0;

                    $(document).on('mousemove',function(event){
                        moveY = event.clientY - clientY;
                        var oScrollcontentMove = moveY/(H1 - H3)*(H2 - H1);

                        if(oYscrollinnerTop + moveY < 0){
                            inner.css('top', 0);
                            O.css('top', 0);
                        }else if(oYscrollinnerTop + moveY > H1 - H3){
                            inner.css('top', H1 - H3);
                            O.css('top', H1 - H2);
                        }else{
                            inner.css('top', oYscrollinnerTop + moveY);
                            O.css('top', oScrollcontentTop - oScrollcontentMove);
                        }
                    });

                    $(document).on('mouseup',function(event){
                        $(document).off('mousemove');
                    })

            })
        }

    }
}

