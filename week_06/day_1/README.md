# setState

[Exercise](https://codesandbox.io/s/3063wonnr5?fontsize=14)

# Props

[Exercise](https://codesandbox.io/s/4rxn326wrx?fontsize=14)

# Lifecycle Methods

## Mounting

Create the entire tree from scratch and add it to the virtual DOM
It occurs exactly once when a component is created and added to the DOM

`
constructor(props) **
componentWillMount() *
render()
componentDidMount() *

* Can use this.setState()
** Can set state directly (constructor only)
`


### componentWillMount

This method occurs just before the first render. 
It used to be where you were more likely to set up your initial state.

### render

The point of render() is to take the current data and return presentation, which means that it's not an appropriate place to actually change data. 
** Don't use this.setState in the render() function. **
The render function should just be all about taking our current state and props and returning some JSX.

### componentDidMount

componentDidMount() is to React what the "document.ready" funcion is to jQuery. It starts running stuff after it's available on the DOM.

After the first time that this component's children have been added to the DOM, componentDidMount() runs. That makes this the ideal place to do two big things:
- Trigger async actions that we want to do when this component is created (like the first big data grab), and
- Target the DOM imperatively for any of the following:
  - Add global event listeners
  - Draw on a canvas
  - Start animation timers
  - Listen to notification sources (e.g. Web Sockets)
  - Run any other imperative browser APIs
For about 90% of the time, when we're writing simple data-driven client apps, we'll be doing a lot of the first thing.

### Exercise

[Exercise](https://codesandbox.io/s/4rxn326wrx?fontsize=14)

## Updating

It could occur any number of times, when a component's props or state changes.

## Unmounting

Removing a component from the Virtual DOM is unmounting.
It may occur once or not at all, depending on whether or not this component exists throughout the entire lifetime of the app or is removed from the DOM.

# Functional component

It's a simple signature: it takes in props, and spits out React.

* There's no state, no DOM manipulation.
* There should be no side effects.
* This is strictly presentational.

# Controlled Inputs

Controlled Inputs are how we synchronize input values with variables in React so that a change to one is immediately available to the other. This lets us perform input validation, auto-complete, and more.

[Exercise](https://codepen.io/vshibukawa/pen/joELgv?editors=0111)

# Container Pattern

The presenter is a functional component that renders a representation based on the props. This one will either show a loader or a list of cities.
There is no restriction that all the state of the app be held in the top of the app. If there are pieces further down the hierarchy that have state that does not affect their ancestors (or siblings or cousins or aunts or uncles or nieces or nephews or whatever), they may be stateful: they must then continue the pattern, and become containers of their own.

[Exercise](https://codesandbox.io/s/32jwk8pnvm?fontsize=14)

# Webpack


# Babel

npm i babel-cli
npm i babel-preset-es2015

.babelrc

# babel-loader

npm i babel-loader 
combine babel and webpack

# webpack-dev-server

reload

# Boilerplate

Boilerplate code distills the essence of a project that can be used repeatedly.

# if es6

() ? : ;
() &&

# Lecture Notes

simple-react-app == create-react-app
React is a library (you don't need to do any configuration to make things work)
