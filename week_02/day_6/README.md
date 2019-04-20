# Stack

A stack often refers to the collection of technologies used in a given system.

For instance, the project you're working on has the following stack:

Web Server: **Node.js**
Middleware: **Express**
Template Engine: **EJS**
Database: None, just an "In-Memory Object"

Depending on your role within a company, your definition of the stack could be also include the infrastructure...

Hosting/Infrastructure: **Heroku** (weekend)

[MEAN](https://en.wikipedia.org/wiki/MEAN_(software_bundle)) is a free and open-source JavaScript software stack for building dynamic web sites and web applications.[1]

The MEAN stack is MongoDB, Express.js, AngularJS (or Angular), and Node.js. Because all components of the MEAN stack support programs that are written in JavaScript, MEAN applications can be written in one language for both server-side and client-side execution environments.

# Event-Driven Architecture 

## Client-Side Events
On the client side (browser), we have the DOM, which has events such as onClick, onFocus, onLoad, as well as custom events.

One library that we will use to demonstrate client-side events is jQuery.

## Server-Side Events
Similarly, on a server running Node.js you can think of an incoming request as an event, with a callback function that handles the event (and could render a response).

The Node.js core API provides an EventEmitter class that is basis for event-driven patterns.

# [DOM](https://www.digitalocean.com/community/tutorials/introduction-to-the-dom)

It is an interface that allows a programming language to manipulate the content, structure, and style of a website. JavaScript is the client-side scripting language that connects to the DOM in an internet browser.

At the most basic level, a website consists of an HTML document. The browser that you use to view the website is a program that interprets HTML and CSS and renders the style, content, and structure into the page that you see.

In addition to parsing the style and structure of the HTML and CSS, the browser creates a representation of the document known as the Document Object Model. This model allows JavaScript to access the text content and elements of the website document as objects.

# [Bubbling and Capturing](http://javascript.info/bubbling-and-capturing)

The **bubbling** principle is simple.

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

It is also possible to prevent an event from continuing its propagation at any stage using `stopPropagation()`.

**Capturing** is rarely used in real code, but sometimes can be useful.

The standard DOM Events describes 3 phases of event propagation:

Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.

# Chrome DevTools

* [Edit DOM](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/edit-dom)
* [Viewing and Changing CSS](https://developers.google.com/web/tools/chrome-devtools/css/)
* [Debugging JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript/)
* [Chrome DevTools Overview](https://developers.google.com/web/tools/chrome-devtools/)
* [Breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints)
* [Network](https://developers.google.com/web/tools/chrome-devtools/network/reference#controls)
* Check performance
  [Rendering tools](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution)
  [Evaluate performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)
  [Inspect and manage storage, databases and caches](https://developers.google.com/web/tools/chrome-devtools/manage-data/local-storage)
