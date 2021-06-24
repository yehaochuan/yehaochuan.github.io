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
    }, 3000);


// 绑定背景
    function change_bg(time){
        $('body').get(0).className = "";
         $('body').eq(0).addClass(`bg${time+1}`)
    }
