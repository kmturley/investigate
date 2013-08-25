/**
 * Picture
 * example module
*/

/*global define, window, document, YT*/
/*jslint nomen:true*/

define('Picture', ['Events'], function (Events) {
    'use strict';
    
    return Events.extend({
        defaults: {},
        init: function (id, options) {
            var me = this;
            this.el = document.getElementById(id);
            this.options = options;
            this.defaults.defaultClass = this.el.className;
            
            this.on(this.el, 'click', function () {
                me.toggleZoom();
            });
        },
        load: function (item) {
            this.el.style.backgroundImage = 'url("' + item.url + '")';
            this.el.innerHTML = '<img src="' + item.url + '" alt="" />';
        },
        toggleZoom: function () {
            if (this.defaults.zoom === true) {
                this.el.className = this.defaults.defaultClass;
                this.defaults.zoom = false;
            } else {
                this.el.className = this.defaults.defaultClass + ' zoom';
                this.defaults.zoom = true;
            }
        },
        hide: function () {
            this.el.style.display = 'none';
        },
        show: function () {
            this.el.style.display = 'block';
        }
    });
});