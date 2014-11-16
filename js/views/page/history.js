/*global define, $, console, window, document, history, tau, event, setTimeout*/

/**
 * History page module
 */

define({
    name: 'views/page/history',
    requires: [
        'core/event',
        'core/template'
    ],
    def: function viewsPageHistory(req) {
        'use strict';

        var e = req.core.event,
            t = req.core.template,
            page = null,
            workoutlist = null,
            list = null

       
        function onPageShow() {
        	console.log('history::show')
        }


        function bindEvents() {
            page.addEventListener('pageshow', onPageShow);
        }

        function getWorkoutHistory(){
        	workoutlist =  [
        	   {"name":"Workout 1", "date":"11/01/2014"},
        	   {"name":"Workout 2", "date":"11/03/2014"},
        	   {"name":"Workout 3", "date":"11/05/2014"},
        	   {"name":"Workout 4", "date":"11/07/2014"},
        	   {"name":"Workout 5", "date":"11/09/2014"}
        	];
        	$.each(workoutlist, function(index, value){
        		$(list).append("<li>" + value.date + "</li>");
        	});
        }
        
        function init() {
            page = document.getElementById('history');
            list = document.getElementById('history-list');
            bindEvents();
            getWorkoutHistory();
        }

        return {
            init: init
        };
    }

});
