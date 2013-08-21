/**
 * Picture
 * example module
*/

/*global define, window, document, YT*/
/*jslint nomen:true*/

define('Picture', ['Class'], function (Class) {
    'use strict';
    
    return Class.extend({
        defaults: {},
        init: function (id, options) {
            this.el = document.getElementById(id);
            this.options = options;
        },
        load: function (item) {
            this.el.style.backgroundImage = 'url("' + item.url + '")';
        },
        hide: function () {
            this.el.style.display = 'none';
        },
        show: function () {
            this.el.style.display = 'block';
        }
    });
});