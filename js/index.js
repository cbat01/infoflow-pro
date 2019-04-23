$(document).ready(function(){
    
    //加载首页内容
    function getnew(){
        $("#new").addClass("active").siblings().removeClass("active")
        $(".main").empty()
        $.ajax({
            type:'get',
            url:'http://120.78.80.241/router/index.php/NewList/newList',
            dataType:'json',
            data:{
                type:'1'
            },
            success:function(res){
              console.log("success");
                var data = res.data;
                var str = '';
                $.each(data,function(i, obj){
                    
                    str += "<div class='box'><div class='title'>"+obj.title+"</div>"
                    str += "<div class='tags'><div class='tag'>#"+obj.tag+"</div><div class='tag'>#涨知识</div></div>"  
                    str += "<div class='boxcontent'>"+obj.content+"</div>"
                    str += "<div class='footer'>"
                    str += "<div class='infoid'><img src='img/avatar.jpg' alt=''><p>By "+obj.author+"</p></div>"
                    str += "<div class='up'>"
                    str += "<div class='upitem'><div id='oo'>oo</div><div class='num'>"+obj.oo+"</div></div>"
                    str += "<div class='upitem'><div class='xx'>xx</div><div class='num'>"+obj.xx+"</div></div></div></div></div>"
                })
                
                $(".main").append(str);
            }
        });
    }
    getnew();
    

    //检查是否微信打开，是的话隐藏头部logo
    function is_weixn(){  
        var ua = navigator.userAgent.toLowerCase();  
        if(ua.match(/MicroMessenger/i)=="micromessenger") { 
            $(".logo").hide()
            $(".main").css('margin-top','5.5rem')            
            return true;
        } else {

            return false;  
        }  
    }
    is_weixn();

    //点击切换到首页
    $("#new").click(function(){
        getnew();
    })

    // 点击切换到热门
    $("#hot").click(function(){
        $(".main").empty()
        $(this).addClass("active").siblings().removeClass("active")
        $.ajax({
        type:'get',
        url:'http://120.78.80.241/router/index.php/NewList/newList',
        dataType:'json',
        data:{
            type:'2'
        },
        success:function(res){
            var data = res.data;
            var str = '';
            $.each(data,function(i, obj){
                str += "<div class='box'><div class='title'>"+obj.title+"</div>"
                str += "<div class='tags'><div class='tag'>"+obj.tag+"</div><div class='tag'>#涨知识</div></div>"  
                str += "<div class='boxcontent'>"+obj.content+"</div>"
                str += "<div class='footer'>"
                str += "<div class='infoid'><img src='img/avatar.jpg' alt=''><p>By "+obj.author+"</p></div>"
                str += "<div class='up'>"
                str += "<div class='upitem'><div id='oo'>oo</div><div class='num'>"+obj.oo+"</div></div>"
                str += "<div class='upitem'><div class='xx'>xx</div><div class='num'>"+obj.xx+"</div></div></div></div></div>"
            })
            
            $(".main").append(str);
        }

    });
    })
    //提交
    $("#submit-btn").click(function(){
        /*var ptitle = ''
        ptitle = $("#title").val()
        content = $("#content").val()
        console.log(ptitle)
        $.ajax({
            type:'get',
            url:'http://120.78.80.241/class/uploaditem.php',
            dataType:'json',
            success:function(){
                alert("fd")
            },
            error:function(res){
                console.log(res)
            }
        })*/
      var upform = document.getElementById("upform"); 
      for(var i=0;i<upform.length;i++){               //循环form表单
                  if(upform.elements[i].value==""){          //判断每一个元素是否为空
                        alert(upform.elements[i].title+"不能为空！");
                        upform.elements[i].focus();             //元素获得焦点
                        return ;
                  }
            };
      $("#upform").submit();
      //console.log("fdf");
    })


})
