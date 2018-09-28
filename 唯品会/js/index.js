window.onload=function(){
	// 头部
	let div=document.querySelectorAll(".nav-right>ul>li>div");
	let li=document.querySelectorAll(".nav-right>ul>li");
	console.log(div,li);
	for(let i=0;i<li.length;i++){
		li[i].onmouseover=function(){
			for(let j=0;j<li.length;j++){
                div[j].style.display="none";
			}
			div[i].style.display="block";

		}
		li[i].onmouseout=function(){
			div[i].style.display="none";
		}

	}
	// 选项卡
	let a=document.querySelectorAll(".new-nav-right a");
	let list=document.querySelectorAll(".new-row-right");
	console.log(a,list);
	a[0].classList.add("hufu");
	list[0].style.display="block";
	for(let i=0;i<a.length;i++){
        a[i].onmouseover=function(){
        	for(let j=0;j<a.length;j++){
        		list[j].style.display="none";
        		a[j].classList.remove("hufu")

        	}
        	list[i].style.display="block";
        	a[i].classList.add("hufu");
        	a[i].style.cursor="pointer";

	    }
  
	}
	//nav
	
	// let aa=nav.offsetHeight;
	// console.log(top);
	let nav=document.querySelector(".nav");
	let top=nav.offsetTop;
	

	// 滚动条相关事件
	let category=document.querySelectorAll(".contain .category");
	console.log(category);
	let arr=[];
	category.forEach((val,index)=>{
		arr.push(val.offsetTop);
	})
	let jump=document.querySelectorAll(".contain-left-inner a")
	// console.log(jump);
	// console.log(arr);
	let lefts=document.querySelector(".contain-left");
	let lefttop=lefts.offsetTop;
	// console.log(lefttop);
	let contain=document.querySelector(".contain");
	let h=contain.offsetTop;
	console.log("我要的是"+h);
	window.onscroll=function(){

		let bodytop=document.scrollTop||document.documentElement.scrollTop;
		console.log(bodytop);
		
	// console.log(lefttop)
		
		let ccb=document.querySelector(".contain-center-bottom");
		let www=ccb.offsetLeft-108;
		console.log("ccb是"+www);
		if(bodytop>=top){
			nav.style="position:fixed;top:0;left:0;";
			// animate(nav,{position:"fixed",left:0,top:0})
		}
		if(bodytop<top) {
			// animate(nav,{position:"static"})
			nav.style="position:static";
		}
		// if(bodytop<top){
		// 	animate(nav,{position:"static"})
		// }
		if(bodytop>=h){
			lefts.style="position:fixed;top:110px;left:"+www+"px";
		}
	    else{
	    	lefts.style="position:absolute;top:50px;left:-120px";
	    }
	    jump.forEach((vals,index)=>{
	    	vals.onclick=function(){
	    		for(let j=0;j<jump.length;j++){
	    			jump[j].style.color="#666";
	    			jump[j].style.background="";

	    		}
	    		jump[index].style.background="#f10180";
	    		jump[index].style.color="#fff";
	    		animate(document.body,{scrollTop:arr[index]-60});
	    		animate(document.documentElement,{scrollTop:arr[index]-60});
	    		
	    	}
	    })
	    arr.forEach((val,index)=>{
	    	if(bodytop+innerHeight/2>=val-60){
	    		for(let i=0;i<jump.length;i++){
	    			jump[i].style.background="";
	    			jump[i].style.color="";
	    		}
	    		jump[index].style.background="#f10180";
	    		jump[index].style.color="#fff";
	    		// let imgs=category[index].querySelectorAll("img");
	    		// imgs.forEach((vals)=>{
	    		// 	let url=vals.getAttribute("imgsrc");
	    		// 	vals.setAttribute("src",url);
	    		// })

	    	}
	    })

	}
	// 轮播
	let banner=document.querySelector(".banner");
	let img=document.querySelectorAll(".banner img");
	let leftbtn=document.querySelector(".banner .leftbtn");
	let rightbtn=document.querySelector(".banner .rightbtn");
	let dot=document.querySelectorAll(".banner .dot li");
	// let now=0;
	// let next=0;
	let num=0;
	let t;
	// console.log(img,leftbtn,rightbtn,dot);
	dot[0].classList.add("active");
	img[0].style.opacity=1;
	// img[0].style.left="10px";
	for(let i=0;i<dot.length;i++){
		dot[i].onmouseover=function(){
			for(let j=0;j<dot.length;j++){
				dot[j].classList.remove("active");
				img[j].style.opacity=0;
			}
			dot[i].classList.add("active");
			img[i].style.opacity=1;
			num=i;
			
		}
		banner.onmouseover=function(){
			leftbtn.style.left="10px";
			rightbtn.style.right="10px";
			clearInterval(t);

		}
		banner.onmouseout=function(){
			leftbtn.style.left="-33px";
			rightbtn.style.right="-33px";
			t=setInterval(move,1500);

		}
	}
	// 透明度轮播
	t=setInterval(move,1500);
		
	function move(){
		num++;
		if(num==img.length){
			num=0;
		}
		for(let j=0;j<img.length;j++){
			img[j].style.opacity="0";
			dot[j].classList.remove("active");
		}
		img[num].style.opacity="1";
		dot[num].classList.add("active");

	}
    leftbtn.onclick=function(){
    	move();
    }
    rightbtn.onclick=function(){
    	movel();
    }
    function movel() {
    	num--;
		if(num==-1){
			num=img.length-1;
		}
		for(let j=0;j<img.length;j++){
			img[j].style.opacity="0";
			dot[j].classList.remove("active");
		}
		img[num].style.opacity="1";
		dot[num].classList.add("active");

    }
	// 左右轮播
	// t=setInterval(move,3000);
	// 	function move(){
 //            next++;
 //            if(next==img.length){
 //            	next=0;
 //            }
 //            img[now].style.left="10px";
 //            img[next].style.left="1166px";
 //            animate(img[now],{left:-1166},function(){
 //            	for(let j=0;j<dot.length;j++){
 //            		dot[j].classList.remove("active");
 //            	}
 //            	// dot[now].classList.remove("active");
 //            })
 //            animate(img[next],{left:10},function(){
 //            	dot[next].classList.add("active");
 //            })
 //            now=next;
	// 	}
	// 右侧菜单
	let rightdisplay=document.querySelectorAll(".contain-right ul li>div");
	console.log(rightdisplay);
	let rightlist=document.querySelectorAll(".contain-right>ul>li");
	console.log(rightlist);
	// for(let i=0;i<rightlist.length;i++){
	// 	rightlist[i].onmouseover=function(){
	// 		for(let j=0;j<rightlist.length;j++){
	// 			rightdisplay[j].style.left="-102px";
	// 		}
	// 		rightdisplay[i].style.left="36px";
	// 	}
		
	// }
	for(let i=0;i<rightlist.length;i++){
		rightlist[i].onmouseover=function(){
			for(let j=0;j<rightlist.length;j++){
                rightdisplay[j].style.display="none";
			}
			rightdisplay[i].style.display="block";

		}
		rightlist[i].onmouseout=function(){
			rightdisplay[i].style.display="none";
		}

	}
	let back=document.querySelector(".contain-right>ul>li:last-child");
	console.log(back);
	back.onclick=function(){
		let res=document.body.scrollTop||document.documentElement.scrollTop;
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});


	}

}