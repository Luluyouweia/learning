<!doctype html>
<html> 
 <head> 
  <meta charset="utf-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> 
  <title>鹿鹿教育</title> 
  <style>
     
     .top{/*顶栏*/
       position:fixed;
       top:0;
       left:0;
       background:#FFFFFF;
       border-bottom:0.5px solid #888888;
       width:100%;
       height:31px;  
     }
     
     .topMsg{
       /*顶栏内容*/
       text-align:center;
       color :#888888;
     }
     
     .btMore{
       float:left;
       /*不空行居左*/    
       background:#FFFFFF;
       border:none;
       }
     
       .nearBar{
               width:35%;
        height:100%;
        left:0;
        position:fixed;
        background:#FFFFFF;
        border-right:0.5px solid #000000;
        top:30px;
        border-top:1px solid #000000;
        display:none;
       }
       
       .titleMain{
         font-size:30px;
         color:#96FED1;
         text-align:right; 
       }
     body{
       background:#fefefe;
     }
     
       
    </style> 
 </head> 
 <body> 
  <div id="BlaBar"></div> 
  <br> 
  <div class="top"> <button class="btMore" onclick="MoreShow()">≡</button> 
   <div class="topMsg"> <b>鹿鹿教育中心</b> 
   </div> 
  </div> 
  <div class="nearBar" id="nearBar">
      <a class="tooBarObjectText" href="/indexcl1.html" target="_top">其他</a>
      <a class="tooBarObjectText" href="https://docs.qq.com/doc/DY2Z6VHJDT2Z3bHVk" target="_top"> 周末作业公示 </a> 
  </div> 
  <div class="titleMain"> <strong>鹿鹿教育中心</strong> 
  </div> 
  <div class="card"> 
   <h1>项目正在开发中，欢迎评价及分享</h1> 
   <p> some <br> some<br> some<br> text<br> text<br> text<br> text<br> text<br> text<br> text<br> text<br> text<br> text<br> </p> 
  </div> 
  <div class="endIF">
    新疆塔城地区沙湾市鹿鹿互联网技术公司 
   <br>开发中... 
  </div> 
  <style>
    .endIF{
      left:0;
      width:100%;
      text-align:right;
      background-color:#A0A0A0;
      
    }
    
    .card{
      border:1px solid #000000;
      border-radius:1.68%;
      background:#ffffff;
      padding:5px;
    }
    
    .tooBarObjectText{
      color:#a9f5a9;
    }
    
    </style> 
  <script>
  //侧滑栏[
  var NBarSetDsp = 0;
    function MoreShow(){
      var NBar =document.getElementById("nearBar");
      var BlaBar =document.getElementById("BlaBar");
      if (NBarSetDsp ==1)
      {
        
        NBar.style.display="none";

        NBarSetDsp-=1;
      }else{
        NBarSetDsp+=1
        NBar.style.display="block";
        BlaBar.style.width="100%";
        
      }
    }
  //侧滑栏]
  
  </script> 
 
</body></html>