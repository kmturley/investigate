/**
 * Map
 * example module
 */

/*global define, window, document, google*/
/*jslint nomen:true*/

define('Map', ['Class'], function (Class) {
    'use strict';
    
    return Class.extend({
        defaults: {
            api: 'AIzaSyB9p-WEghqAAJUFFsoY2il6QRckvVKGdmM'
        },
        init: function (id, options) {
            this.el = document.getElementById(id);
            this.options = options;
            this._script();
        },
        _script: function () {
            var me = this,
                firstScriptTag = null,
                tag = document.createElement('script');
            /*
            tag.src = 'https://maps.googleapis.com/maps/api/js?key=' + me.defaults.api + '&sensor=false';
            firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            */
            google.maps.event.addDomListener(window, 'load', function (e) {
                me._complete(e);
            });
        },
        _complete: function (e) {
            
        },
        load: function (items) {
            var i = 0,
                marker = null,
                mapOptions = {
                    center: new google.maps.LatLng(items[0].long, items[0].lat),
                    zoom: 17,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            this.markers = [];
            this.map = new google.maps.Map(this.el, mapOptions);
            this.bounds = new google.maps.LatLngBounds();

            for (i = 0; i < items.length; i += 1) {
                this.markers.push(new google.maps.Marker({
                    position: new google.maps.LatLng(items[i].long, items[i].lat),
                    map: this.map,
                    title: items[i].name,
                    id: i
                }));
                this.bounds.extend(this.markers[i].position);
                
                google.maps.event.addListener(this.markers[i], 'click', function () {
                    window.location.href = '#/' + this.id + '/';
                });
            }
            
            this.map.fitBounds(this.bounds);
        },
        select: function (num) {
            var i = 0,
                large = {
                    url: "http://www.google.com/mapfiles/marker.png",
                    size: new google.maps.Size(40, 68),
                    origin: null,
                    anchor: null,
                    scaledSize: new google.maps.Size(40, 68)
                },
                small = {
                    url: "http://www.google.com/mapfiles/marker.png",
                    size: new google.maps.Size(20, 34),
                    origin: null,
                    anchor: null,
                    scaledSize: new google.maps.Size(20, 34)
                };
            
            for (i = 0; i < this.markers.length; i += 1) {
                if (i === num) {
                    this.markers[i].setIcon(large);
                } else {
                    this.markers[i].setIcon(small);
                }
            }
        }
    });
});