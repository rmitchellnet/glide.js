__glide.js__ is a simple library for adding smooth scrolling to a website.

# Basic Usage

```javascript
var glide = new Glide('.el-to-scroll');
glide.start();
```

# Options

| options | description | default |
| --- | --- |  -------------------------   |
| easing | css easing function, value type can change based on plugins used (e.g. greensock) | cubic-bezier(.2,.62,.2,.94) |
| duration | duration of scroll transition | 0.8 |
| custom | callback on scroll, (parameters: (Glide instance, scrolled amount)) |  cubic-bezier(.2,.62,.2,.94) |

# Advanced Usage

### Disable On Mobile

Since mobile will already scroll smoothly, you can disable the smooth scroll using only CSS:

```css
.el-to-scroll {
    position: relative !important; // or static !important
    transform: none !important; // or translate3d(0) !important
}
```

In this case, the JS will still run, but it makes it easier to turn it off and on. If you do want to completely stop it from running, you can use the **stop** method1:

```js
glide.stop();
```

# Examples

[Basic](examples/basic.html)

[Greensock](examples/greensock.html)

[Parallax](examples/parallax.html)

# Plugins

### Greensock

Make sure Greensock is included before Glide. Plugins must be loaded before the core library.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
<script src="../src/plugins/glide.plugin.greensock.js"></script>
<script src="../src/glide.js"></script>
```