var height = $('#menuTabs').height();

$(window).scroll(
	function{}
	{
	if($(this).scrolltop()>height){
	$('.fix-nav').addClass('fixed');
	}
	else{
	$('.fix-nav').removeclass('fixed');
	}
	}
);