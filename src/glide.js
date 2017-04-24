/*!
 * glide.js
 * Author: Ryan Mitchell
 * Git: https://github.com/rmitchellnet/glide.js
 * License: MIT
 */
(function (root, factory) {
    var pluginName = 'Glide';

    if (typeof define === 'function' && define.amd) {
        define([], factory(pluginName));
    } else if (typeof exports === 'object') {
        module.exports = factory(pluginName);
    } else {
        root[pluginName] = factory(pluginName);
    }
} (this, function (pluginName) {
    'use strict';

    var defaults = {
        easing: 'M0,0 C0.11,0.494 0.128,0.756 0.254,0.882 0.386,1.014 0.504,1 1,1'
    };

    /**
     * Merge defaults with user options
     * @param {Object} defaults Default settings
     * @param {Object} options User options
     */
    var extend = function (target, options) {
        var prop, extended = {};
        for (prop in defaults) {
            if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
                extended[prop] = defaults[prop];
            }
        }
        for (prop in options) {
            if (Object.prototype.hasOwnProperty.call(options, prop)) {
                extended[prop] = options[prop];
            }
        }
        return extended;
    };


    /**
     * Some private helper function
     */
    var privateFunction = function () {
        // private helper code goes here
    };

    /**
     * Plugin Object
     * @param element The html element to initialize
     * @param {Object} options User options
     * @constructor
     */
    function Plugin(element, options) {
        this.element = document.querySelector(element);
        this.options = extend(defaults, options);
        this.element.style['position'] = 'fixed';
    }

    // Plugin prototype
    Plugin.prototype = {
        start: function () {
            //this.element.innerHTML = this.options.someDefaultOption;
            this.scrollLoop = requestAnimationFrame(this.start.bind(this));
            this.element.parentNode.style['height'] = this.element.clientHeight + 'px';
            var scrollY = -window.scrollY;
            TweenMax.to(this.element, 0.8, {
                y: scrollY,
                ease: this.options.easing
            });
        },
        cancel: function () {
            cancelAnimationFrame(this.scrollLoop);
        }
    };
    return Plugin;
}));
