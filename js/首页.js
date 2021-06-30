// 点击切换按钮
$('.option_btn>div').on('click', event =>{
        $('.option_btn>div').removeClass('selected');
        $(event.target).addClass('selected');
        time = $(event.target).index();
        change_bg(time);

})

// 定时器自动切换
    var time = 0; 
    setInterval(() => {
        $('.option_btn>div').removeClass('selected');
        $('.option_btn>div').eq(time).addClass('selected');
        change_bg(time);
        if(time==2){
            time=0;
        }else{
             time++;
        }
    }, 5000);


// 绑定背景
    function change_bg(time){
        $('body').get(0).className = "";
         $('body').eq(0).addClass(`bg${time+1}`)
    }


//简历按钮
    $('.janli_button>div').on('click',(e)=>{
        $('.janli_button>div').removeClass('selected');
        $(e.target).addClass('selected');
        console.log(e.target.dataset.imgnum);
        $('.jianli').css('background-image',`   url(./img/j${e.target.dataset.imgnum}.png)`)
    })

//fullpage跳转
    $('.jili_right').on('click',()=>{
        console.log(1);
        $.fn.fullpage.moveTo(1,2)
    })
    $('.anli').on('click',()=>{
        $.fn.fullpage.moveTo(2)
    })
    
    $('.lianxi').on('click',()=>{
        $.fn.fullpage.moveTo(1,1)
    })
        
      
