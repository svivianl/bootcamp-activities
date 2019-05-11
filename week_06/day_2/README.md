# Component State and Props

One thing to remember is that a component cannot change its own props. This is by design. If a child component needs different props, they have to be changed by a parent component and fed back into the child component.

# Flux library

Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.

# Lecture notes

setState is asynchronous. If you have several calls, it will update only once and it keeps consistent. It waits the state update. It has a better performance.

derived state

hook
