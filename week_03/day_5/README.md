# [SASS](https://sass-lang.com/guide)

`npm install -g sass`

Once Sass is installed, you can compile your Sass to CSS using the sass command. You'll need to tell Sass which file to build from, and where to output CSS to. For example, running `sass input.scss output.css` from your terminal would take a single Sass file, input.scss, and compile that file to output.css.

You can also watch individual files or directories with the `--watch` flag. The watch flag tells Sass to watch your source files for changes, and re-compile CSS each time you save your Sass. If you wanted to watch (instead of manually build) your input.scss file, you'd just add the watch flag to your command, like so:

`sass --watch input.scss output.css`

You can watch and output to directories by using folder paths as your input and output, and separating them with a colon. In this example:

`sass --watch app/sass:public/stylesheets`
Sass would watch all files in the app/sass folder for changes, and compile CSS to the public/stylesheets folder.

Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable. Here's an example:

# HTML Data Attributes

You can read [here](http://html5doctor.com/html5-custom-data-attributes/) and watch a video [here](https://www.youtube.com/watch?v=3r7dkLersKA)

## Data Attributes using jQuery
Read the following documentation about the .data(...) function available on jQuery objects.

When you set a custom data attribute, plant.setAttribute('data-fruit','7');, does it show up on the DOM element? (Use Chrome Developer Tools to inspect.)
Yes

When you set a custom data attribute using jQuery, does it show up as an attribute on the DOM element?
No

Can jQuery's data() function access data- attributes on DOM elements?
Yes

Conversely, can ordinary JavaScript .getAttribute() access attributes set by jQuery's data()?
No

# Responsive Design

[Media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

[Viewport units](https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/)
The viewport is the total window area rendered by the browser. We can size and position elements based on a percentage system relative the size, height, and width of the browser window. For example, 1vw is 1/100th of the size of the width of the viewport.

The [**em** and **rem**](https://www.futurehosting.com/blog/web-design-basics-rem-vs-em-vs-px-sizing-elements-in-css/) measurements offer an alternative to using px to size elements and type on the page. em units are sized relative to its parent element, whereas rem, or root em, are sized relative to the font size or the root element - usually, this is the `<html>` element.

Ems have a problem. Because everything is sized relative to its parent element, the meaning of an em changes as elements are nested. If we take the same scenario we discussed above: a `<div>` with a font-size of 22px containing a `<p>` with an font-size of 0.5 em but add a `<blockquote>` inside the `<p>` with a font size of 0.5em too, the result might not be what we want. The font-size in the `<p>` will be equal to 11px, but the font-size inside the `<blockquote>` would be half of that again, because em is relative the immediate ancestor (the paragraph), not the div.

Rems, root ems, are always relative to the font-size of the `<html>` element. It doesn’t matter how deeply nested an element is, its rem lengths will always be a proportion of the font-size of `<html>`.

Rems are awesome in theory, and mostly awesome in practice. There are some cases where simple proportional scaling doesn’t work out quite right — some text gets too small or too large relative to the surrounding text. Chris Coyer has an excellent article over on CSS tricks that details how he prefers to use a mix of all three.

[**Flexbox**](http://tympanus.net/codrops/css_reference/flexbox/) is a layout module that dynamically positions elements on a page, without properties such as floats or columns. Flexbox is well supported by browsers, but not always consistent (so make sure to test in different browsers).
Check the [frog flexbox](https://flexboxfroggy.com)

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Flexbugs](https://github.com/philipwalton/flexbugs) - Flexbox inconsistencies between browsers

# Heroku

## Cloud Computing
  
IaaS, PaaS, SaaS

