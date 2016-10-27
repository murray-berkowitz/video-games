$(document).ready(function(){
	$(".blur").click(function(){
		var clicked = '#'+this.id;
		var hover = 'hover'+clicked.charAt(5);
		console.log(clicked);
		if($(clicked).hasClass('span-no-mar2')){
			$(clicked).removeClass('span-no-mar2 blur');
			$(clicked).removeClass(hover);
			$(clicked).addClass('full');
		}
	});
});