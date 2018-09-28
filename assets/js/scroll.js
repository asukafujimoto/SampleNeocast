// スクロール関連の処理
$(function(){
	/*****************************************************************************/
	// トップボタン
	/*****************************************************************************/
	var btn_top=$('#page-top');
	btn_top.hide();

	$(window).scroll(function(){
		if($(this).scrollTop()>80){
			// 80px以上スクロールした場合、トップボタンを表示する
			btn_top.fadeIn();
		}else{
			// 80px満たない場合、トップボタンは表示しない
			btn_top.fadeOut();
		}
	});
	// btn_top をクリックした場合、トップまで戻る
	btn_top.click(function(){
		$('body,html').animate({scrollTop: 0},500);
		return false;
	});

	/*****************************************************************************/
	// #リンクのスムーススクロール
	/*****************************************************************************/
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
