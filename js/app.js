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
	
	
	$('[data-navigationid]').click(function(){
		showSubPage($(this).attr('data-navigationid'));
	});
	
	$('body').dblclick(function(){
		showMain();
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
