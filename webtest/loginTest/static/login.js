var secflag = 0;
var username;
var pwd;

var $subBtn = $('#btn');

function enableBTN() {
	$subBtn.prop('disabled', false);
}
function disableBTN() {
	$subBtn.prop('disabled', true);
}

function checkflag()
{
    secflag = 0;
    username = document.getElementById("Username");
    pwd = document.getElementById("password");
    if(username.value==null || username.value=="")
    {
            alert("请输入用户名！");
            return;
    }
    if(pwd.value==null || pwd.value=="")
    {
            alert("请输入密码！");
            return;
    }

	disableBTN();

	jQuery.ajax({
		type: "POST",
		url: "/CRCLogin/AjaxServlet",
		//url:"http://oamtest.crpower.com.cn/oam/server/auth_cred_submit",
		data: "username="+escape (encodeURIComponent(username.value))+"&password="+escape (encodeURIComponent(pwd.value)),
		dataType: "text", 
		async: false,
		error: function() {
			enableBTN();
		},
		success: function(msg){
			
			if(msg==null || msg=='')
			{
			 alert("查询有误，请联系管理员！");
			}
			else
			{
				if(msg.indexOf("#")>0 )
				{
					var arrs=msg.split('#');
					var flag=arrs[0];
					var info=arrs[1];
					if(flag=='error')
					{
						var backurl=urlTrue;
		               TimeOutAlert("<span id='pwd1' class='pwd'>用户名或密码无效</br>如果忘记了密码,您还可以:<a href='http://oam.crpower.com.cn/OIMUCS/retrievePwdController/prepareInputName.do?backUrl="+backurl+"'>找回密码</a><span>",true);
					}
					else
					{
						
		                document.getElementById('loginData').submit();
		               
					}
				}
			}
			window.setTimeout("enableBTN()", "1000");				
		}			 
	}); 

}