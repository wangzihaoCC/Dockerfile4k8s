String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, '');
};

$(login);
function login(){
	document.msCapsLockWarningOff = true;
	
	var hasPlaceholderSupport = function(){
		var attr = "placeholder";
		var input = document.createElement("input");
		return attr in input;
	}
	
	var placeB = hasPlaceholderSupport();
	
	if(placeB){
		$(".la_name,.la_pass").remove();
	}
	else{
		loTips();
		
	}
	
	
	function loTips(){
		var loDom = $(".r_text");
		loDom.each(function(index){
			
			if($(this).val()!=""){
				$(this).next().hide();
			}
			
			$(this).keyup(function(){
				if($(this).val()!=""){
					$(this).next().hide();
				}
				else{
					
					$(this).next().show();
				}
				
			});	
		});	
	}

	
	
	// 大写开启标识，初始为未设置
	var capsLockActived = null;
	
	// 监控按下的字母键的大小写状态
	$("#password").keypress(function(e){
		var e = e || window.event;
        var kc = e.keyCode || e.which;
        var isShift = e.shiftKey || (kc == 16) || false;
        if ((kc >= 65 && kc <= 90 && !isShift) || (kc >= 97 && kc <= 122 && isShift)) {// 大写字母
        	capsLockActived = true;
        	$('#lo_caps').show();
        } else {
        	if((kc >= 65 && kc <= 90) || (kc >= 97 && kc <= 122)) {// 小写字母
        		capsLockActived = false;
        		$('#lo_caps').hide();
        	}
        }

        // 点击回车键按钮登录
        if(kc == 13) {
    	    checkflag();
    	    $(this).blur();
    	    return false;
        }
	});
	
	// 监控“CapsLock”按钮
	$("#password").keydown(function(e){
		var e = e || window.event;
        var kc = e.keyCode || e.which;
        if (kc == 20 && null != capsLockActived){
            capsLockActived = !capsLockActived;
            $('#lo_caps').css('display', capsLockActived ? 'block' : 'none');
        }
	});	
	
	$("#password").focus(function(){
		if (null != capsLockActived) {
			$('#lo_caps').css('display', capsLockActived ? 'block' : 'none');
		}
	});
	
	$("#password").blur(function(){
		$('#lo_caps').hide();
		capsLockActived = null;
	});	
	
	
}