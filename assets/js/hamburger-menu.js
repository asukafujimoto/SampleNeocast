$(function(){
	$("#h-menu").click(function(){
			$(".line-1").toggleClass("menu-click1");
			$(".line-2").toggleClass("menu-click2");
			$(".line-3").toggleClass("menu-click3");
	});
});

jQuery(function($){
	$('#h-menu').click(function(){
		if ($('#h-g-navi').css('display') == 'none') {
			$('#h-g-navi').slideDown('fast');
		} else {
			$('#h-g-navi').slideUp('fast');
		}
	});

	$('.h-g-navi-item').click(function(){
		if ($('#h-g-navi').css('display') == 'none') {
			$('#h-g-navi').slideDown('fast');
		} else {
			$('#h-g-navi').slideUp('fast');
		}
		$(".line-1").toggleClass("menu-click1");
		$(".line-2").toggleClass("menu-click2");
		$(".line-3").toggleClass("menu-click3");
	});
});
