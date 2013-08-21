/**
 * Timeline
 * example module
*/

/*global define, window, document, YT*/
/*jslint nomen:true*/

define('Timeline', ['Events', 'Loader'], function (Events, Loader) {
    'use strict';
    
    return Events.extend({
        defaults: {
            scale: 100,
            url: 'js/items.json'
        },
        init: function (id, options) {
            var me = this;
            this.el = document.getElementById(id);
            this.options = options;
            this.loader = new Loader();
        },
        get: function (num) {
            return this.items[num];
        },
        load: function () {
            var me = this;
            this.loader.load(this.defaults.url, function(string) {
                me._complete(JSON.parse(string));
            });
        },
        _complete: function(items) {
            var i = 0,
                left = 0,
                width = 0,
                html = '';
            
            for (i = 0; i < items.length; i += 1) {
                items[i].index = i;
                left = items[i].start * this.defaults.scale;
                width = (items[i].end - items[i].start) * this.defaults.scale;
                html += '<a href="#/' + i + '/" class="item" style="margin-left:' + left + 'px; width:' + width + 'px;">' + items[i].name + '</a>';
            }
            this.items = items;
            this.el.innerHTML = html;
            this.dispatchEvent('load', items);
        }
    });
});