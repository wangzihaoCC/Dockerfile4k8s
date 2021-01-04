//自动关闭提示框  
function TimeOutAlert(str,autoclose,closeMethod) {
	
	clickSureFlag = false;
    var msgw,msgh,bordercolor;  
    msgw=280;//提示窗口的宽度  
    msgh=140;//提示窗口的高度  
    titleheight=25; //提示窗口标题高度  
    bordercolor="#FFAA33";//提示窗口的边框颜色  
    titlecolor="#FFAA33";//提示窗口的标题颜色  
    var sWidth,sHeight;  
    //获取当前窗口尺寸  
    sWidth = document.body.offsetWidth;  
    sHeight = document.body.offsetHeight;  
//    //背景div  
    var bgObj=document.createElement("div");  
    bgObj.setAttribute('id','alertbgDiv');  
    bgObj.style.position="absolute";  
    bgObj.style.top="0";  
    bgObj.style.background="#E8E8E8";  
    bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";  
    bgObj.style.opacity="0.6";  
    bgObj.style.left="0";  
    bgObj.style.width = sWidth + "px";  
    bgObj.style.height = sHeight + "px";  
    bgObj.style.zIndex = "10000";  
    document.body.appendChild(bgObj);  
    //创建提示窗口的div  
    var msgObj = document.createElement("div");  
    msgObj.setAttribute("id","alertmsgDiv");  
    msgObj.setAttribute("align","center");  
    msgObj.style.background="white";  
    msgObj.style.border="1px solid " + bordercolor;  
    msgObj.style.position = "absolute";  
    msgObj.style.left = "50%";  
    msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";  
    //窗口距离左侧和顶端的距离   
    msgObj.style.marginLeft = "-125px";  
    //窗口被卷去的高+（屏幕可用工作区高/2）-150  
    msgObj.style.top = document.body.scrollTop+(window.screen.availHeight/2)-70 +"px";  
    msgObj.style.width = msgw + "px";  
    msgObj.style.height = msgh + "px";  
    msgObj.style.textAlign = "center";  
    msgObj.style.lineHeight ="25px";  
    msgObj.style.zIndex = "10001";  
    document.body.appendChild(msgObj);  
    //提示信息标题  
    var title=document.createElement("h4");  
    title.setAttribute("id","alertmsgTitle");  
    title.setAttribute("align","left");  
    title.style.margin="0";  
    title.style.padding="3px";  
    title.style.background = bordercolor;  
    title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";  
    title.style.opacity="0.75";  
    title.style.border="1px solid " + bordercolor;  
    title.style.height="18px";  
    title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";  
    title.style.color="white";  
    title.innerHTML="提示信息";  
    document.getElementById("alertmsgDiv").appendChild(title);  
    //提示信息  
    var txt = document.createElement("div");  
    txt.setAttribute("id","msgTxt");  
    txt.style.margin="5px 0";  
    var divHtml = "<p style='text-align:middle;'>"+str+"</p><br/>"
      +"<p style='text-align:middle;'><INPUT onclick=closewin('"+closeMethod+"') value=确定 type=button name=btn  id=btn01 class=but01></p><br/>";
    txt.innerHTML = divHtml;
    document.getElementById("alertmsgDiv").appendChild(txt);  
    //设置关闭时间  
    if(autoclose) {
    	//window.setTimeout("closewin()",2000);   
    }
}  

function closewin(closeMethod) { 
    document.body.removeChild(document.getElementById("alertbgDiv"));  
    document.getElementById("alertmsgDiv").removeChild(document.getElementById("alertmsgTitle"));  
    document.body.removeChild(document.getElementById("alertmsgDiv"));  
    eval(closeMethod);
}


//自动关闭提示框  
function showClause() {  
	var msgw,msgh,bordercolor;  
    msgw=600;//提示窗口的宽度  
    msgh=400;//提示窗口的高度  
    titleheight=25; //提示窗口标题高度  
    bordercolor="#FFAA33";//提示窗口的边框颜色  
    titlecolor="#FFAA33";//提示窗口的标题颜色  
    var sWidth,sHeight;  
    //获取当前窗口尺寸  
    sWidth = document.body.offsetWidth;  
    sHeight = document.body.offsetHeight;  
//    //背景div  
    var bgObj=document.createElement("div");  
    bgObj.setAttribute('id','alertbgDiv');  
    bgObj.style.position="absolute";  
    bgObj.style.top="0";  
    bgObj.style.background="#E8E8E8";  
    bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";  
    bgObj.style.opacity="0.6";  
    bgObj.style.left="0";  
    bgObj.style.width = sWidth + "px";  
    bgObj.style.height = sHeight + "px";  
    bgObj.style.zIndex = "10000";  
    document.body.appendChild(bgObj);  
    //创建提示窗口的div  
    var msgObj = document.createElement("div");  
    msgObj.setAttribute("id","alertmsgDiv");  
    msgObj.setAttribute("align","center");  
    msgObj.style.background="white";  
    msgObj.style.border="1px solid " + bordercolor;  
    msgObj.style.position = "absolute";  
    msgObj.style.left = "50%";  
    msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";  
    //窗口距离左侧和顶端的距离   
    msgObj.style.marginLeft = "-300px";  
    //窗口被卷去的高+（屏幕可用工作区高/2）-150  
    msgObj.style.top = document.body.scrollTop+(window.screen.availHeight/2)-200 +"px";  
    msgObj.style.width = msgw + "px";  
    msgObj.style.height = msgh + "px";  
    msgObj.style.textAlign = "center";  
    msgObj.style.lineHeight ="25px";  
    msgObj.style.zIndex = "10001";  
    document.body.appendChild(msgObj);  
    //提示信息标题  
    var title=document.createElement("h4");  
    title.setAttribute("id","alertmsgTitle");  
    title.setAttribute("align","left");  
    title.style.margin="0";  
    title.style.padding="3px";  
    title.style.background = bordercolor;  
    title.style.filter="progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);";  
    title.style.opacity="0.75";  
    title.style.border="1px solid " + bordercolor;  
    title.style.height="18px";  
    title.style.font="12px Verdana, Geneva, Arial, Helvetica, sans-serif";  
    title.style.color="white";  
    title.innerHTML="安全身份管理平台保密条款";  
    document.getElementById("alertmsgDiv").appendChild(title);  
  
    //提示信息  
    var txt = document.createElement("div");  
    txt.setAttribute("id","msgTxt");  
    txt.style.margin="16px 15px";
    var divHtml = "<p style='text-align:middle;'><span style='font-size:15px;font-weight:bold;color:#333333;'>安全身份管理平台保密条款</span></p><br/>"
    	         +"<p style='text-align:left;'><span style='font-size:13px;align:left;color:#333333;'>1、华润集团安全身份管理平台（以下简称为\"身份管理平台\"）收集您的手机号码等个人信息，目的在于为您提供更优质的服务（如通过手机验证找回密码）。  </span></p></br>"
    	         +"<p style='text-align:left;'><span style='font-size:13px;align:left;color:#333333;'>2、身份管理平台不会因商业利益将您的手机号码等信息交予第三方使用。  </span></p><br/>"
                 +"<p style='text-align:left;'><span style='font-size:13px;align:left;color:#333333;'>3、在法律规定的情况下，如司法机关、监管机构及其他相关机构需要，有可能提供您的手机号码等信息。  </span></p><br/>"
                 +"<p style='text-align:left;'><span style='font-size:13px;align:left;color:#333333;'>4、为了给您提供更优质的服务，如个人信息发生变更，请及时更新您的信息。 </span></p><br/>"
                 +"<p style='text-align:middle;'><INPUT onclick=closewin() value=确定 type=button name=btn class=but01></p><br/>";
  
    txt.innerHTML = divHtml;  
    document.getElementById("alertmsgDiv").appendChild(txt);  
     
}

function checkSessionTimeOut(XMLHttpRequest){
	if(XMLHttpRequest.status == '0') {
      	window.location.reload();
    }
}

function checkSessionTimeOutForLogin(XMLHttpRequest){
	if(XMLHttpRequest.status == '0') {
		window.location="${backUrl}";
    }
}

function disabledBtn(btnId){
	$('#'+btnId).attr('disabled',true);
    $('#'+btnId).addClass('but03').removeClass('but01');					
}

function enabledBtn(btnId){
	$('#'+btnId).attr('disabled',false);
    $('#'+btnId).addClass('but01').removeClass('but03');	
}

function checkPwdSpecialChar(pwd){
	var filterCh =['.','#','/','%','=','|','+',',','<','>','"','\\'];
	for(var i=0; i<filterCh.length; i++){
		if(pwd.indexOf(filterCh[i])!=-1){
			TimeOutAlert('密码不能包含特殊字符:'+filterCh[i],true);
			return false;
		}
	}
	return true;
}

function returnIndex(){
    window.close();
}

