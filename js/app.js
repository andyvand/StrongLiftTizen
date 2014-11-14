( function () {
	window.addEventListener( 'tizenhwkey', function( ev ) 
	{
		if( ev.keyName === "back" ) 
		{
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			
			if( pageid === "main" ) 
			{
				try 
				{
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) 
				{
				}
			} 
			else 
			{
				showMain();
			}
		}
	});
	
	$('body').dblclick(function(){
		showMain();
	});
	

	$('#video-btn').click(function(){
		showSubPage('video');
	});

	$('#graph-btn').click(function(){
		showSubPage('graph');
	});
	
	$('#workout-btn').click(function(){
		showSubPage('workout');
	});
	
	$('#history-btn').click(function(){
		showSubPage('history');
	});
	
	function showSubPage(pageName)
	{
		$("#" + pageName).addClass("ui-page-active");
		hideMainPage();
	}
	
	function hideMainPage()
	{
		$('#main').toggleClass("ui-page-active");
	}
	
	function showMain(){
		$(".ui-page").each(function(index, value){
			$(this).removeClass("ui-page-active");
		});
		$("#main").addClass("ui-page-active");
	}
	
	
} () );
