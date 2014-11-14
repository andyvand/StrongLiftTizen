define({
    name: 'views/page/main',
    requires: [
        'core/event',
        'core/application'
    ],
    def: function viewsPageMain(req) {
        'use strict';

        var e = req.core.event,
            app = req.core.application,
            page = null;

        function onPageShow() { alert('hello');}
	
	    $('body').dblclick(function(){
		    handleNavigationEvent();
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
	
	    function handleNavigationEvent(){
	 	    var pageid = $('.ui-page-active').first().attr('id');
		    if( pageid === "main" ) 
		    {
			    tizen.application.getCurrentApplication().exit();
		    } 
		    else 
		    {
			    showMain();
		    }		
	    }
	
	    function showMain(){
		    $(".ui-page").each(function(index, value){
			    $(this).removeClass("ui-page-active");
		    });
		    $("#main").addClass("ui-page-active");
	    }      
	    
        function bindEvents() {
        	$('[data-navigationid]').click(function(){
    		    showSubPage($(this).attr('data-navigationid'));
    	    });
        	
    	    window.addEventListener( 'tizenhwkey', function( ev ) 
	    	{
			    if( ev.keyName === "back" ) 
			    {
				    handleNavigationEvent();
			    }
		    });        	
        }

        function init() {
            page = $('#main');
            bindEvents();
        }

        return {
            init: init
        };
    }

});
