( function () {
	window.addEventListener( 'tizenhwkey', function( ev ) 
	{
		if( ev.keyName === "back" ) 
		{
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			
			console.log(pageid);
			
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
	
    var historyBtnEl = document.getElementById('history-btn');
	historyBtnEl.addEventListener('click', onHistoryBtnClick);
	
	
	function onHistoryBtnClick() {
		var historyElement = document.getElementById('history');
		historyElement.className = "ui-page ui-page-active";
		

		var mainElement = document.getElementById('main');
		mainElement.className = "ui-page";
    }
	
	function showMain(){
		document.getElementById('history').className = "ui-page";
		document.getElementById('main').className = "ui-page ui-page-active";
	}
	
	
} () );
