		var picture=document.getElementById("picture");
		var nextPicture=document.getElementById("nextPicture");
			var _nextPicture=nextPicture.style;
		var loadValue=document.getElementById("loading");
		var audio=document.getElementById("audio");
		var newSrc=audio.src;
		var msgbox=document.getElementById("msgbox");
		var num;var page=2; //两者分别为音乐，图片 图片默认值:2
		console.log("ready");
		setTimeout(function(){
			loadValue.style.width="12%";
		},1500)
		setTimeout(function(){
			loadValue.style.width="32%";
				console.log("$loading.value=1\n||进度条加载");
				picture.style.backgroundImage="url(pictures/main.jpg)";
		},4600)
		
		setTimeout(function(){
			loadValue.style.width="85%";
				picture.style.zIndex="5";
				msgbox.style.display="block";
				nextPicture.style.zIndex="3";
		},5600)
		setTimeout(function(){
			loadValue.style.width="99%";
			audio.src = newSrc;
			console.log(audio.src);
			document.getElementById("blackBar").style.display="block";
		},8000)
		
		//优化加载，异步处理，获得良好体验
	//------异步编程-------js执行8秒后加载新的背景图片，
		//以便用户之后能快速获得新一轮图片↓
	
		//还是不太好，得继续优化	
		/*var information = '{"main":['+
			'{"title":"星空","text":"繁星闪烁，宁静祥和。"} ]}';
		inf = JSON.parse(information);
		var n;
		var pages = document.cookie = "page=1;sexpires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
		document.getElementById("text").innerHTML = "<h3>" + inf.main[0].title + "</h3>" +inf.main[0].text;
	注： ---------描述文字*/
		var toolBar = document.getElementById("toolBar").style;
		
		var getToolBar=0;
		nextPicture.onclick=function(){
			console.log("|||User Clicked.");
			toolBar.display="block";
			getToolBar=1;
			setTimeout(function(){
				toolBar.display="none";
			},6000)
		}
		picture.onclick=function(){
			console.log("|||User Clicked.");
			toolBar.display="block";
			getToolBar=1;
			setTimeout(function(){
				toolBar.display="none";
			},6000)
		}//点击图片的操作
		
		//音乐播放
		//控制音乐的函数 num表示曲目序号
		function music(num){
			audio.src=amusic[num];
		}
		
		var noneUrl="https://player.bilibili.com/player.html?aid=80433022&bvid=BV1GJ411x7h7&cid=137649199&page=1";
		//你被骗了
			
		var ap1=new Array(); 
		var ap2=new Array();
		//设置2个数组存放数据
		//设置图片路径组
		
			ap1[1]="pictures/main.jpg";//本地
			ap1[2]="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1651450661048-be61eba55f1a?ixlib=rb-1.2.1&q=80&fmt=jpg&crop=entropy&cs=tinysrgb&dl=joshua-lawrence-_GPn7zmkjD4-unsplash.jpg";//链接 链接至  Unplash 图库
			ap2[1]="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1621290102989-e9865bef2dcf?ixlib=rb-1.2.1&q=80&fmt=jpg&crop=entropy&cs=tinysrgb&dl=vlad-d-nqSeto6vWfU-unsplash.jpg";
		//下一张图片
		
		var change=0;
		var ap1_num=1;var ap2_num=0;
		function pages(){
			if(change==0){
				//显示ap2图片
				//优化加载速度
				setTimeout(function(){
				picture.style.zIndex="3";
				//来个调试Debug
				console.log("异步程序加载成功");
				},3000)//3秒后再加载图片
				nextPicture.style.zIndex="5";
				ap1_num+=1;
				//ap1_num +1!哈哈，算不过来了
				change+=1;
				// 注：change  ::  判段改变类型 1：ap1??-->true else flase;;
				picture.style.backgroundImage="url("+ap1[ap1_num]+")";
					//将背景图片加载前置判断后置  有效提升加载速度
				//判断是否为最后一张图片
				if(ap2_num==ap2.length-1){
					//如果此时ap1序号是数组ap1的长度，则抓了个空图片路径
					if(ap1_num==ap1.lenght){
						console.log("还有ap1一张图片");	
						//不做响应
					}else{
						console.log("切换图片");
						ap1_num=1;
						picture.style.backgroundImage="url("+ap1[ap1_num]+")";
					}
				}
					//此时有两种情况:1.ap1[ap1_num]是最后一张图片？？？想不出来了
					//2.ap2[ap2_num]是最后一张图片,使ap1图片路径重置		
			}else if(change==1){
				setTimeout(function(){
				nextPicture.style.zIndex="3";
				},3000)
				picture.style.zIndex="5";
				ap2_num+=1;
				change-=1;
				nextPicture.style.backgroundImage="url("+ap2[ap2_num]+")";
				
				if(ap1_num==ap1.length-1){
					//如果此时ap1序号是数组ap1的长度，则抓了个空图片路径
					if(ap2_num==ap2.lenght){
						console.log("还有ap1一张图片");	
						//不做响应
					}else{
						console.log("[AP2]最后一张图片");
						ap2_num=1;
						picture.style.backgroundImage="url("+ap2[ap2_num]+")";
					}
				}
			}
			
		}
		function before(){
			ap1_num-=1;ap2_num-=1;
			(change==1)?0:1;
			pages();
			
		}
		var getNoneValue=0;
		function none(){
			document.getElementById("none").src=noneUrl;
			document.getElementById("none").style.display="block";
			if(getNoneValue==1){
				document.getElementById("none").src="";
				document.getElementById("none").style.display="none";
				document.getElementById("returnNonePage").style.display="none";
				getNoneValue=0;
			}
			else{
				getNoneValue=1;
				document.getElementById("returnNonePage").style.display="block";
				document.getElementById("music-choose").style.top="-100%";
				music(0);
			}
		}
		/*
		function setCookie(cname,cvalue,exdays) { 
			var d = new Date(); d.setTime(d.getTime()+(exdays*24*60*60*1000)); 
			var expires = "expires="+d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires; 
			console.log("设置cookie");
		}
		
		function getCookie(cname) { 
			var name = cname + "="; 
			var ca = document.cookie.split(';'); 
			console.log("获取cookie");
			for(var i=0; i<ca.length; i++) { 
				var c = ca[i].trim(); 
				if (c.indexOf(name)==0) return c.substring(name.length,c.length);
			} 
			
			return ""; 
		}
		function checkCookie() { 
			console.log("检查cookie");
			var username=getCookie("username");
			if (username!="") { 
				alert("Welcome again " + username); 
			} else {
				username = prompt("Please enter your name:",""); 
				if (username!="" && username!=null) { 
					setCookie("username",username,365); 
					} 
				}
			}
		*/
