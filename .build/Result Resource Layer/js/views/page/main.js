define({
    name: 'views/page/main',
    requires: [
        'core/event',
        'core/application',
        'views/page/history'
    ],
    def: function viewsPageMain(req) {
        'use strict';

        var e = req.core.event,
            app = req.core.application,
            page = null;
	    
        function bindEvents() {   
        	$('[data-navigationid]').click(function(){
    		    showSubPage($(this).attr('data-navigationid'));
    	    });        	
        }
        
	    function showSubPage(pageName)
	    {
		    $("#" + pageName).addClass("ui-page-active");
		    hideMainPage();
	    }
	
	    function hideMainPage()
	    {
		    $('#main').toggleClass("ui-page-active");
	    }

        function init() {
        	console.log('main::init');
            page = $('#main');
            bindEvents();
        }

        return {
            init: init
        };
    }

});
