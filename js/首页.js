// 中部
var mid=new Vue({
    el:"#box",
    data:{
      
      //头部数据
      dh_arr:["css3动画","小游戏","canavs动画","项目",'查看更多',"CSDN博客"],
       
      anli:["","","","","","","","",""],
      arr_src1:['./img/css3-1.png','./img/css3-2.png','./img/css3-3.png','./img/css3-4.png','./img/css3-5.png','./img/css3-6.png'],
      nr:["css3-手风琴","css3-快乐星球",'css3-核反应堆','css3-Iron man','css3-血轮眼',"css3-地爆天星"],
      href_1:["./css3/手风琴/index.html","./css3/星球/index.html","./css3/Iron man/iron.html","./css3/Iron man/iron.html","./css3/血轮眼/demo.html","./css3/地爆天星/index.html"],
          bankuai:["",
                  "",
                  "",
                  "",
                  "",
                
          ],



          bool : true,
        
        },

            

 
    
    methods:{
           dianzan:function(event){
               var e = event.currentTarget;
                e.src="./img/点赞 (2).png"
                e.nextSibling.innerText++;
           },
           caidan:function(){
              if(this.bool){
                  caidan_box.style.display='block';
              }else{
                caidan_box.style.display='none';
              }
               this.bool = !this.bool;
               

           }


    },
  

}) 




  

$(function(){
  $('#dowebok').fullpage({
      sectionsColor: [ 'rgba(0,0,0,0)', '#4BBFC3', '#7BAABE', '#f90']
  });
});


