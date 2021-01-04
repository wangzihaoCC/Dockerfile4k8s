$(login);

function login(){
	
	function newsList(){
		var num = 0;
		var liTree = $(".tips_li").length;
		
		function slide(){
				num++;
				//console.log(num);
				var o = num%liTree;
				$(".tips_li").removeClass("li_show");
				$(".tips_li").eq(o).addClass("li_show");
			
		}
		
			
			timber = setInterval(slide,2000);
		
		$(".tips_li").mouseover(function(){
			clearInterval(timber);
		});
		$(".tips_li").mouseout(function(){
			timber = setInterval(slide,2000);
		});
		
	}
	newsList();
	
	
	
	
}