// 中部
var mid=new Vue({
    el:"#box",
    data:{
      
      //头部数据
      dh_arr:["css3动画","案例","项目","个人简历","CSDN博客"],
       
      anli:["css3动画","案例","项目","个人简历","CSDN博客"],
      
 
    
          bankuai:["首页.html",
                  "道具市场.html",
                  "拍卖行.html",
                  "资讯.html",
                  "https://blog.csdn.net/weixin_42232622",
                
          ]
        
        },

            

 
    
    methods:{
           
    },
  

}) 




  

$(function(){
  $('#dowebok').fullpage({
      sectionsColor: [ 'rgba(0,0,0,0)', '#4BBFC3', '#7BAABE', '#f90']
  });
});


