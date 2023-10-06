This repo is a companion to the [You Don't Need That Library][course] course on Frontend Masters.

[![Frontend Masters](images/FrontendMastersLogo.png)][fem]

[Please click here][website] to head to the course website.

[fem]: https://www.frontendmasters.com
[website]: https://firtman.github.io/vanilla/
[course]: https://frontendmasters.com/courses/vanilla-js-apps/

### What I've learned

* A good way to describe what DOM is – it's an in-memory representation of HTML document. Hence, HTML document stays the same, but DOM changes. This is why we have two things in the dev tools – "view source" and DOM inspector.
   * Also, HTML specification allows to omit `<head>` and `<body>` tags. But they are always present in the DOM, because browser builds the DOM for those element even if they are absent in the HTML.
* How to create web-components – it's a class extending from `HTMLElement` (or other classes like `HTMLHeadingElement`, etc)
* The difference between `defer` and `async` when loading `<script>`:
   * `defer` – while parsing HTML, the browser will see a `defer` script, initiate a parallel load of the script and execute it once it has finished reading the rest of the HTML.
   * `async` – while parsing HTML, the browser will see an `async` script, initiate a parallel load of the script and execute it immediately once the script gets loaded.
      * This is useful for measuring scripts, which need to be loaded as soon as possible.
* There's a difference between `DOMContentLoaded` and `load` events:
   * `DOMContentLoaded` – marks the moment when DOM gets available, i.e. loaded in the memory.
   * `load` – is triggered when all of the page resources are loaded: scripts, images, fonts, etc.
* There are two ways to attach a callback to an event in DOM:
   * via `on(event)` property, i.e. `onclick` or `onchange` – DOM element can only have one of those. Reassigning such property wipes the previous callback.
   * `addEventListener` – an element can have multiple listeners, this is useful for separation of different concerns.
* Browser has a special event for when the URL changes – `popstate`. It's not triggered when manually editing the URL or leaves the page.
* DOM Nodes have two seemingly similar properties – `children` and `childNodes`. Most of the time you want to use `children`, as `childNodes` includes things like comments.
* HTML <template> tag, which is not rendered by default but can be conveniently used by web-components as a (no surprise) template.
* Generally, web components consist of three API elements: Custom Elements, Templates and Shadow DOM.
   * Shadow DOM allows us to "encapsulate" components in a way, mostly you can declare styles which would only be scoped for just this web-component.
* If we want to dispatch a global custom event, we use `window.dispatchEvent`, and not `document.dispatchEvent`. This is because Shadow DOM is actually a separate document!
* `npx serve .` to serve everything in the current directory.
* If you don't use a bundler, you must specify module extensions when you import other modules. I wonder how did it become a best practice to omit file extension? 
* MDN has a great in-depth article on ES6 modules – https://hacks.mozilla.org/2015/08/es6-in-depth-modules/
* If you don't like the verbosity of DOM APIs, you can arrange some shortcuts:

```javascript
const $ = function(args){ return document.querySelector(args);}
const $$ = function(args){ return document.querySelectorAll(args);}

HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }
```
