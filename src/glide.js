/*!
 * glide.js
 * Author: Ryan Mitchell
 * Git: https://github.com/rmitchellnet/glide.js
 * License: MIT
 */
(function (window, root, factory) {
    var pluginName = 'Glide';

    if (typeof define === 'function' && define.amd) {
        define([], factory(window, pluginName));
    } else if (typeof exports === 'object') {
        module.exports = factory(window, pluginName);
    } else {
        root[pluginName] = factory(window, pluginName);
    }
}(window, this, function (window, pluginName) {
    'use strict';

    var defaults = {
        easing: window.Glide && window.Glide.easing ? window.Glide.easing : 'cubic-bezier(.2,.62,.2,.94)',
        duration: 0.8,
        custom: window.Glide && window.Glide.custom ? window.Glide.custom : function (instance, y) {
            //console.log(y);
            if (instance.element.style.transition == '') {
                instance.element.style.transition = 'transform ' + instance.options.duration + 's ' + instance.options.easing;
            }
            instance.element.style.transform = 'translateY(' + y + 'px)';
        }
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
        this.defaults = defaults;
        this.options = extend(this.defaults, options);
        this.element.style['position'] = 'fixed';
    }

    // Plugin prototype
    Plugin.prototype = {
        start: function () {
            this.scrollLoop = requestAnimationFrame(this.start.bind(this));
            this.element.parentNode.style['height'] = this.element.clientHeight + 'px';
            this.options.custom(this, -window.scrollY);
        },
        stop: function () {
            cancelAnimationFrame(this.scrollLoop);
        }
    };
    return Plugin;
}));