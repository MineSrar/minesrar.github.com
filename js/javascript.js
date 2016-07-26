'use strict'
 function cl(a){
        var oYs3_tul = document.getElementById('ys3_tzhiye');
        var oYs3_tzy = oYs3_tul.getElementsByTagName('li');
        var oYs3_bdiv = document.getElementById('ys3_bzhiye');
        var oYs3_bzy = oYs3_bdiv.getElementsByTagName('div');
        
        for(var i=0;i<oYs3_tzy.length;i++){
            oYs3_tzy[i].abc = i;
            oYs3_tzy[i].onmouseover = function(){
                for(var i=0;i<oYs3_tzy.length;i++){
                    oYs3_tzy[i] = '';
                }
                this.className = a;
            }
        }
    }
	function Tab(a,b,c,d,f){
		var oYs1_lul = document.getElementById(a);
		var oYs1_limg = oYs1_lul.getElementsByTagName(b);
		var oYs1_bul = document.getElementById(c);
		var oYs1_btn = oYs1_bul.getElementsByTagName(d);
		
		for(var i=0;i<oYs1_btn.length;i++){
			oYs1_btn[i].cba = i;
			oYs1_btn[i].onmouseover = function(){
				for(var i=0;i<oYs1_btn.length;i++){
					oYs1_btn[i].className = '';
					oYs1_limg[i].style.display = 'none';
				}
				this.className = f;
				oYs1_limg[this.cba].style.display = 'block';
			}
		}
	}
	window.onload = function(){
		Tab('ys1_limg','a','ys1_lbtn','li','ys1_l_btn1');
		Tab('ys1_rbnr','div','ys1_nav','li','ys1_head_li2');
		Tab('ys4_playnr','div','ys4_play','li','ys4_play_li');
		Tab('ys4_meiti','div','ys4_meitinr','li','ys4_play_li');
		Tab('ys4_videoul','div','ys4_video_h','li','ys4_play_li');

        var oNav_btn = document.getElementById('nav_btn');
        var oNav_li = oNav_btn.getElementsByTagName('li');
        var oNav_p = oNav_btn.getElementsByTagName('p');
        
        for(var i=0;i<oNav_li.length;i++){
            if(oNav_li[i].title == '详情'){
                oNav_li[i].onmouseover = function(){
                    this.id = 'top_hover'
                }
                oNav_li[i].onmouseout = function(){
                    this.id = ''
                }
            }
        }
        
        var  oBtnBox = document.getElementById('ys3_tzhiye');
        var aBtn_li= oBtnBox.getElementsByTagName('li');
        var oBox_div=document.getElementById('ys3_bzhiye');
        var aShowBox= oBox_div.getElementsByTagName('div');
        var arr = ['0','-109','-219','-329','-439','-549']
        for(var i=0; i<aBtn_li.length; i++){
            aBtn_li[i].index=i;
            aBtn_li[i].onmouseover = function(){
                for(var i=0; i<aBtn_li.length; i++){
                    aBtn_li[i].style.backgroundPosition = '';
                    aShowBox[i].className='';
                }
                this.style.backgroundPosition=arr[this.index]+'px -471px';
                aShowBox[this.index].className='ys3_zhiye_hover';
            }
        }	 
	}