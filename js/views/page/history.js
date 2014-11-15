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
            page = null

       
        function onPageShow() {
        	console.log('history::show')
        }


        function bindEvents() {
            page.addEventListener('pageshow', onPageShow);
        }

        function init() {
            page = document.getElementById('history');
            bindEvents();
        }

        return {
            init: init
        };
    }

});
