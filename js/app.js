define({
    name: 'app',
    requires: [
        'core/event',
        'views/page/init',
        'core/tizen'
    ],
    def: function appInit(req) {
        'use strict';

        console.log('app::def');

        var e = req.core.event;

        function init() {
            console.log('app::init');
        }

        return {
            init: init
        };
    }
});