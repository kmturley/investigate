/**
 * Timeline
 * example module
*/

/*global define, window, document, YT*/
/*jslint nomen:true*/

define('Timeline', ['Events', 'Loader'], function (Events, Loader) {
    'use strict';
    
    return Events.extend({
        defaults: {},
        init: function (id, options) {
            var me = this;
            this.el = document.getElementById(id);
            this.options = options;
            this.loader = new Loader();
        },
        getTime: function (string) {
            return this.times[string] || this.items;
        },
        getItem: function (num) {
            return this.items[num] || this.items;
        },
        load: function (url) {
            var me = this;
            this.loader.load(url, function (string) {
                me._times(JSON.parse(string));
            });
        },
        _times: function (items) {
            var i = 0,
                item = '',
                html = '<a href="#/time/all/" class="time c3 bg1">View All</a>',
                itemhtml = '<div class="slot"><a class="item c1 bg3"></a></div>',
                date = new Date(),
                h = 0,
                m = 0,
                s = 0,
                times = {};
            
            for (i = 0; i < items.length; i += 1) {
                items[i].index = i;
                if (!times[items[i].start]) {
                    times[items[i].start] = [];
                }
                times[items[i].start].push(items[i]);
            }
            
            for (item in times) {
                if (times.hasOwnProperty(item)) {
                    date = new Date(item);
                    h = date.getHours();
                    m = date.getMinutes();
                    s = date.getSeconds();
                    
                    h = h < 10 ? '0' + h : h;
                    m = m < 10 ? '0' + m : m;
                    s = s < 10 ? '0' + s : s;
                    
                    html += '<a href="#/time/' + item + '/" class="time c3 bg1">' + h + ':' + m + ':' + s + '</a>';
                    itemhtml += '<div class="slot">';
                    for (i = 0; i < times[item].length; i += 1) {
                        itemhtml += '<a href="#/item/' + times[item][i].index + '/" class="item c1 bg3">' + times[item][i].name + '</a>';
                    }
                    itemhtml += '</div>';
                }
            }
            this.times = times;
            this.items = items;
            this.el.innerHTML = '<div class="times">' + html + '</div><div class="items">' + itemhtml + '</div>';
            this.dispatchEvent('load', items);
        }
    });
});