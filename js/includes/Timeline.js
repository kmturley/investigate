/**
 * Timeline
 * example module
*/

/*global define, window, document, YT*/
/*jslint nomen:true*/

define('Timeline', ['Events'], function (Events) {
    'use strict';
    
    return Events.extend({
        defaults: {
            scale: 100,
            items: [
                {
                    "name": "Image 1",
                    "type": "image",
                    "start": 0,
                    "end": 1,
                    "long": -33.890542,
                    "lat": 151.274856,
                    "url": "img/alley.jpg"
                },
                {
                    "name": "Video 1",
                    "type": "video",
                    "start": 5,
                    "end": 6,
                    "long": -33.890743,
                    "lat": 151.275353,
                    "url": "M7lc1UVf-VE"
                }
            ]
        },
        init: function (id, options) {
            var me = this;
            this.el = document.getElementById(id);
            this.options = options;
        },
        get: function (num) {
            return this.defaults.items[num];
        },
        load: function () {
            var items = this.defaults.items,
                i = 0,
                left = 0,
                width = 0,
                html = '';
            
            for (i = 0; i < items.length; i += 1) {
                items[i].index = i;
                left = items[i].start * this.defaults.scale;
                width = (items[i].end - items[i].start) * this.defaults.scale;
                html += '<a href="#/' + i + '/" class="item" style="margin-left:' + left + 'px; width:' + width + 'px;">' + items[i].name + '</a>';
            }
            this.el.innerHTML = html;
            this.dispatchEvent('load', this.defaults.items);
        }
    });
});