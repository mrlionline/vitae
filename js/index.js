$(function(){
    function Initialization_width(){
        aa1 = 0,
        aa2 = 0,
        aa3 = 0,
        aa4 = 0,
        aa5 = 0,
        aa6 = 0,
        aa7 = 0,
        aa8 = 0,
        aa9 = 0,
        aa10 = 0,
        width1 = 90,
        width2 = 90,
        width3 = 90,
        width4 = 90,
        width5 = 80,
        width6 = 80,
        width7 = 60,
        width8 = 60,
        width9 = 60,
        width10 = 90;
    }
    Initialization_width()
    var onLeave_num ;
    var h =  window.innerHeight;
    var my_tel = "156-3302-6314   ";
    var my_tel_index = 17;

    $('#dowebok').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#1889C5', '#9C58B6', '#26B1B6', '#129DE7','#ED6461'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        'navigation': true,
        'scrollingSpeed':600,
        'loopBottom':true,
        'loopTop':true,
        'navigationPosition': 'right',
        'navigationTooltips': ['1', '2', '3', '4','5'],
        afterLoad: function(anchorLink, index){
            if (index === 1) {

            }
            if (index === 2) {
                onLeave_num = 0;
                Initialization_width();
                setTimeout(function(){
                    requestAnimationFrame(a1)
                    requestAnimationFrame(a2)
                    requestAnimationFrame(a3)
                    requestAnimationFrame(a4)
                    requestAnimationFrame(a5)
                    requestAnimationFrame(a6)
                    requestAnimationFrame(a7)
                    requestAnimationFrame(a8)
                    requestAnimationFrame(a9)
                    requestAnimationFrame(a10)
                },650)
            }
            if (index === 3) {
                requestAnimationFrame(mask_width_fn)
            }
            if (index === 4) {
                
            }
            if (index === 5) {
                requestAnimationFrame(show_tel)
            }
        },
        onLeave: function(index){
            if (index === 2) {
                onLeave_num = index;
                progress_back()
            }
            if (index === 3) {
                $("#mask").width("100%")
                mask_width = 100
            }
        }
    });
// section2  start
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    function step(ele,step,width,a,degree,ico){
        if (step <= 40) {
            ele.css("background","#D9534F")
            degree.text("不懂")
            ico.html('<img src="images/budong.png">')
        }
        if (step <=60 && step > 40){
            ele.css("background","#F0AD4E")
            degree.text("了解")
            ico.html('<img src="images/liaojie.png">')
        }
        if (step <= 80 && step > 60) {
            ele.css("background","#5CB85C")
            degree.text("熟悉")
            ico.html('<img src="images/shuxi.png">')
        }
        if (step > 80) {
            ele.css("background","#0964B3")
            degree.text("熟练")
            ico.html('<img src="images/shulian.png">')
        }
        ele.css("width",step+"%");
        if(step < width && onLeave_num != 2){
            requestAnimationFrame(a)
        }
    }
    
    function a1(){
        aa1 += 1
        step($('#progress_color1'),aa1,width1,a1,$('#degree1'),$('#expression1'))
    }
    function a2(){
        aa2 += 1
        step($('#progress_color2'),aa2,width2,a2,$('#degree2'),$('#expression2'))
    }
    function a3(){
        aa3 += 1
        step($('#progress_color3'),aa3,width3,a3,$('#degree3'),$('#expression3'))
    }
    function a4(){
        aa4 += 1
        step($('#progress_color4'),aa4,width4,a4,$('#degree4'),$('#expression4'))
    }
    function a5(){
        aa5 += 1
        step($('#progress_color5'),aa5,width5,a5,$('#degree5'),$('#expression5'))
    }
    function a6(){
        aa6 += 1
        step($('#progress_color6'),aa6,width6,a6,$('#degree6'),$('#expression6'))
    }
    function a7(){
        aa7 += 1
        step($('#progress_color7'),aa7,width7,a7,$('#degree7'),$('#expression7'))
    }
    function a8(){
        aa8 += 1
        step($('#progress_color8'),aa8,width8,a8,$('#degree8'),$('#expression8'))
    }
    function a9(){
        aa9 += 1
        step($('#progress_color9'),aa9,width9,a9,$('#degree9'),$('#expression9'))
    }
    function a10(){
        aa10 += 1
        step($('#progress_color10'),aa10,width10,a10,$('#degree10'),$('#expression10'))
    }

    //section2 进度条归零
        function progress_back(){
            for (var i = 1; i <= 10; i++) {
                $("#degree"+String(i)).text("")
                $("#expression"+String(i)).html("")
                $("#progress_color"+String(i)).css('width','0%')
            }
        }
// section2  end

// section3  start
    // 遮罩层width递减
    var mask_width = 100;
    function mask_width_fn(){
        $("#mask").width(mask_width+"%")
        mask_width -= 1;
        if (mask_width >= 0) {
            requestAnimationFrame(mask_width_fn)
        }
    }
// section3  end

// section5  start
    //不停显示电话
    var s5_tel_html = "";
    function show_tel(){
        if (my_tel_index === 17) {
            my_tel_index = 0;
            ranNum = Math.ceil(Math.random()*35)+15;
        }
        s5_tel_html += '<span style="font-size: '+ranNum+'px">'+my_tel.charAt(my_tel_index)+'</span>'
        $("#s5_tel").html(s5_tel_html)
        my_tel_index++
        var s5_tel_height = $("#s5_tel").height();
        console.log(s5_tel_height+":::::"+h)
        if (s5_tel_height < (h*0.7) || my_tel_index != 17) {
            requestAnimationFrame(show_tel)
        }
    }
// section5  end
        
});