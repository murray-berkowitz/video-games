$(document).ready(function(){
	console.log("hey");
	$(".blur").click(function(){
		console.log(this);
		var ele = '#'+$(this).attr('id');
		if($(ele).css('zIndex') == 999){	
			$(ele).css({
				position:'',
				width:'',
				zIndex:1
			});
		}else {
			$(ele).css({
				position:'fixed',
				zIndex:999,
			});
			$(ele).animate({
				width:'100%'
			},2000);
		}
	});
});