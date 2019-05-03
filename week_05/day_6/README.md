# Webpack

**Webpack** among other things, allows us to write our client-side JavaScript code in multiple files, just like we do in Node. 


# Babel

**Babel** is a powerful library for translating JavaScript. It lets us use the latest ES6 features in our code, and then creates browser-friendly ES5. Babel can also convert some other languages into JavaScript. This allows us to use languages like TypeScript, Coffee Script, and most importantly, JSX.

# JSX

JSX stands for JavaScript with XML, and it's a dialect of JavaScript. It's a **superset** language of ES6, which means all valid ES6 is valid JSX, but not all valid JSX is valid ES6. In other words, if a language feature works in ES6, we can use it in JSX.

It's **not** meant to be read by the browser directly; in fact, it can't be. Browsers only know how to read JavaScript, not this new JSX nonsense. JSX first has be translated into plain JavaScript before it can be read by the browser.

So we will write some JSX code, use babel to translate it into JavaScript, then have the browser interpret the plain JavaScript files.

## Rules

1) All JSX elements must either consist of an opening and closing tag, or be self closing. It's a little more restrictive than HTML that way. You'll especially have to watch out for <img/>, <br/>, and <hr/>.

2) JSX elements must be in a tree, which means that the next tag to close must match the last one to open.

3) Any JSX expression assigned to a variable or returned from a function must have one root tag.

4) HTML comments won't work, sadly. But it's easy to comment in JSX.

5) Whitespace is totally cool though, which is great for readability.

## Exercises

[Name](https://codepen.io/vshibukawa/pen/wZbNXo)
[Foods])(https://codepen.io/vshibukawa/pen/EJzrpd)
[Fixme](https://codepen.io/vshibukawa/pen/ZZNwMo)

## Props

In the world of React, we set attributes on an element using props, short for properties. Props are how we can define information about how a component should behave, just like we would do in regular old HTML.

Props and attributes have a lot in common, but there's one huge difference between them: HTML attributes can only take in strings. With props, we can pass in all sorts of values, even objects, arrays, and functions.

### Classes

Use **className**

### Styles

There are three important differences between HTML inline style and JSX inline style:

Instead of writing styles as a string, we will write them as an object with key-value pairs for each property and value
We'll write every property name in camel case **backgroundColor**, not spinal case **background-color**, with the values kept as strings
We'll pass the styles object to the style prop using curly braces, not quotations.

### Exercises

[Exercise](https://codepen.io/vshibukawa/pen/gyNpja?editors=0110)

## Dynamic Data

Things that React will render:
- Strings
- Numbers (including NaN, which will show up as NaN)
- Valid JSX expressions
- Arrays containing strings, numbers, and valid JSX expressions

And here's what React will ignore as if it never happened:
- true and false
- undefined and null
- functions

Anything else will raise an error.

### Exercises

[Exercise](https://codepen.io/vshibukawa/pen/WWqvWO)


## Logic and Looping

### Unique "key" prop

Now, if you open up the CodeSandbox console, you might see a warning from React like the following:

`react.js:3580 Warning: Each child in an array or iterator should have
a unique "key" prop. Check the top-level render call using <ul>. See
https://fb.me/react-warning-keys for more information.
    in li`
From a lazy developer standpoint, the most important word in that block of text is "Warning". It's not an error, and your code will work. However, it shouldn't be ignored completely. After all, React only wants those keys so that it make our app update faster.

When we are dealing with data that has unique ids, we can add the id to the element using a **key** prop, and React will be satisfied. It uses this information for performance purposes in its never-ending quest to do as few DOM updates as possible.

If our information had unique ids, we could use those, but for now, let's just use the emoji themselves as keys.

### Exercises

[Exercise](https://codepen.io/vshibukawa/pen/WWqQRM)

## DOM events

So, now let's get the values of those inputs. The form is the target of the event object, and we can get a form's inputs with .elements. If the inputs have name attributes, then we can get them by name from .elements.

BTW, this last function isn't just a React thing; you can do this in Vanilla JS or jQuery as well.

`
function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  alert(`Your email is ${emailInput.value} and your password is ${passwordInput.value}`);

  // reset the inputs
  emailInput.value = passwordInput.value = '';
} 
`

### Exercises

[Exercise](https://codepen.io/vshibukawa/pen/eowBMV)

# React Libraries

React: the library for creating views.
ReactDOM: the library used to actually render the UI in the browser.

We can include these into your project in a few different ways.

## Script tags:

Using normal script tags, we can include both libraries in your HTML file.

`<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>`

## require:

If we are using webpack, and we like ES5, we can require the two libraries into our JavaScript file.

`var React = require('react');
var ReactDOM = require('react-dom');`

## import:

If we are using webpack, and we want to use ES6 features, we can import the two libraries into our JavaScript file. This is the preferred way of doing things, so most examples will do look like this:

`import React from "react";
import ReactDOM from "react-dom";`
Once we have included both libraries, we can start using them to render elements in the browser.

## Notes

The reason that there are two libraries instead of one, is so that the core **react** library doesn't have to be tied to the browser. This means that we can use the **react** library on any platform, like mobile.

In the browser, we have to include **react** and **react-dom**. On mobile, we have to include **react** and **react-native**. The **react** library is the same, but the rendering library changes.

# Components

All component class names **must** begin with a capital letter. JSX treats tags that begin with lower case letters differently than those that begin with upper case letters.

### Exercises

[Exercise](https://codesandbox.io/s/5xqz3j50mn)

# Props

[Exercise](https://codesandbox.io/embed/5xqz3j50mn?fontsize=14)

# State

Unlike props, which are passed into the component from outside, a component is responsible for creating and managing its own **state**. No outside force can directly change a component's **state**.

### State vs Props

A component has two sources of data: the state and the props.

- State is a component's own cache of data, which it manages. It cannot be directly read or changed by any other component, regardless of whether that other component is a parent, child, or sibling to this component.
- Props are sent from parent to child. A child element cannot change the props they are sent, though the parent may change the props sent.
- A component may send data from its state to a child component's props.

# Tic Tac Toe

**Function components** are a simpler way to write components that only contain a render method and don’t have their own state.  Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.

[Tutorial](https://reactjs.org/tutorial/tutorial.html) - my work is [here](https://codepen.io/vshibukawa/pen/MRNWPZ?editors=0010)
