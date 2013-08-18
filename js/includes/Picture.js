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
            this.el.innerHTML = '<img src="' + item.url + '" alt="' + item.name + '" class="item" />';
        },
        hide: function () {
            this.el.style.display = 'none';
        },
        show: function () {
            this.el.style.display = 'block';
        }
    });
});