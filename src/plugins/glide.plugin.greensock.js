/*
 * glide.js greensock plugin
 */
(function (window) {
    window.Glide = {};
    window.Glide.easing = 'M0,0 C0.11,0.494 0.128,0.756 0.254,0.882 0.386,1.014 0.504,1 1,1';
    window.Glide.custom = function (instance, y) {
        //console.log(this.options.easing);
        TweenMax.to(instance.element, 0.8, {
            y: y,
            ease: instance.options.easing
        });
    }
})(window);