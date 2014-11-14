/*global define, $, console, window, history, document, tau*/

/**
 * Init page module
 */

define({
    name: 'views/page/init',
    requires: [   
        'core/event',
        'core/template',
        'core/systeminfo',
        'core/application',
        'core/storage/idb',
        'views/page/main'
    ],
    def: function viewsPageInit(req) {
        'use strict';

        var e = req.core.event,
            idb = req.core.storage.idb,
            app = req.core.application,
            sysInfo = req.core.systeminfo;

        /**
         * Exits the application, waiting first for pending storage requests
         * to complete.
         */
        function exit() {
        }

        /**
         * Handles tizenhwkey event.
         * @param {event} ev
         */
        function onHardwareKeysTap(ev) {
        }

        /**
         * Handles resize event.
         */
        function onWindowResize() {
        }

        /**
         * Handler onLowBattery state
         */
        function onLowBattery() {
        }

        /**
         * Registers event listeners.
         */
        function bindEvents() {
        }

        /**
         * Initializes module.
         */
        function init() {
            // bind events to page elements
            bindEvents();
        }

        e.on({
            'core.systeminfo.battery.low': onLowBattery
        });

        return {
            init: init
        };
    }

});
