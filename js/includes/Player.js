/**
 * Player
 * example module
*/

/*global define, window, document, YT*/
/*jslint nomen:true*/

define('Player', ['Class'], function (Class) {
    'use strict';
    
    return Class.extend({
        defaults: {
            height: '100%',
            width: '100%',
            videoId: 'M7lc1UVf-VE',
            events: {
                'onReady': function () {},
                'onStateChange': function () {}
            }
        },
        init: function (id, options) {
            var me = this;
            this.el = document.getElementById(id);
            //this.defaults.videoId = options.videoId;
            this._script();
        },
        _script: function () {
            var me = this,
                firstScriptTag = null,
                tag = document.createElement('script');
            
            tag.src = "https://www.youtube.com/iframe_api";
            firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            this.defaults.events.onReady = function (e) {
                me._ready(e);
            };
            this.defaults.events.onStateChange = function (e) {
                me._change(e);
            };
            window.onYouTubeIframeAPIReady = function () {
                me.player = new YT.Player('player', me.defaults);
            };
        },
        _ready: function (e) {
            console.log('ready', e);
        },
        _change: function (e) {
            console.log('change', e);
            if (e.data === YT.PlayerState.PLAYING) {
                console.log('playing');
            }
        }
    });
});