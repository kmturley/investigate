/**
 * Main
 * example module
*/

/*global define, window, document, YT*/
/*jslint nomen:true*/

define('Main', ['Events', 'Player', 'Map', 'Timeline', 'Picture'], function (Events, Player, Map, Timeline, Picture) {
    'use strict';
    
    return Events.extend({
        init: function (id, options) {
            var me = this;
            this.timeline = new Timeline('timeline');
            this.picture = new Picture('picture');
            this.player = new Player('player');
            this.map = new Map('map');
            
            this.on(window, 'hashchange', function (e) {
                me._change(e.newURL);
            });
 
            this.timeline.addEvent('load', function (e) {
                me.map.load(e.data);
                me._click(e.data[0]);
            });
            
            this.timeline.load();
        },
        _change: function (url) {
            var value = url.split('/'),
                index = Number(value[value.length - 2]);
            
            console.log('change', index);
            
            this._click(this.timeline.get(index));
        },
        _click: function (item) {
            console.log(item);
            this.map.select(item.index);
            if (item.type === 'video') {
                this.picture.hide();
                this.player.show();
                this.player.load(item);
            } else {
                this.player.hide();
                this.picture.show();
                this.picture.load(item);
            }
        }
    });
});