/**
 * Map
 * example module
 */

/*global define, window, document*/
/*jslint nomen:true*/

define('Map', ['Class'], function (Class) {
    'use strict';
    
    return Class.extend({
        init: function (id, options) {
            
        },
        _script: function () {
            var firstScriptTag = null,
                tag = document.createElement('script');
            
            tag.src = 'https://maps.googleapis.com/maps/api/js?key=' + me.defaults.api + '&sensor=false';
            firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    });
});