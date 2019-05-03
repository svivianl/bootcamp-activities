# Algorithm

An algorithm is a set of instructions or steps for accomplishing a specific task. 

# Search

Linear x binary/log

# Big O notation

Big O notation, written as O(), describes how the number of steps in an algorithm scales relative to it's input. As we increase the amount of data, does the algorithm grow linearly, exponentially, or logarithmically?

When we evaluate an algorithm using Big O notation, there are three main things to remember:

- We only care about arbitrarily large input.
What does the run time of binary search look like when we give it an array of one million items?
- We drop the non-dominant terms.
When our algorithm had a running time of (n^2+n)/2, it was the n^2 that was hurting us. So we'll just forget about everything else.
- We drop constant terms.
If you graph `(n^3)/2 or (n^3)*2`, it has pretty much the same curve as n^3, so let's just get rid of the constant 2.

# Asymptotic notation

Three forms of it: big-Θ notation, big-O notation, and big-Ω notation.

When we say that a particular running time is Θ(n), we're saying that once n gets large enough, the running time is at least k1.n and at most k2.n for some constants k1 and k2. 
The running time must be sandwiched between k1.n and k2.n. As long as these constants k1 and k2 exist, we say that the running time is Θ(n).
​When we use big-Θ notation, we're saying that we have an **asymptotically tight bound** on the running time. "Asymptotically" because it matters for only large values of n. "Tight bound" because we've nailed the running time to within a constant factor above and below.

We use big-O notation for **asymptotic upper bounds**, since it bounds the growth of the running time from above for large enough input sizes.
If you go back to the definition of big-Θ notation, you'll notice that it looks a lot like big-O notation, except that big-Θ notation bounds the running time from both above and below, rather than just from above. If we say that a running time is Θ(f(n)) in a particular situation, then it's also O(f(n)). For example, we can say that because the worst-case running time of binary search is Θ(log n), it's also O(log n).

Sometimes, we want to say that an algorithm takes at least a certain amount of time, without providing an upper bound. We use big-Ω notation. We use big-Ω notation for **asymptotic lower bounds**, since it bounds the growth of the running time from below for large enough input sizes.

# Google Interview

Check [here](https://youtu.be/XKu_SEDAykw)

# Automate Testing

In order to test in console you must "require ('chai')". HOWEVER, if you are testing in browser do not include "require ('chai')" or it won't work.

[Browser and Node testing using Mocha and Chai](https://web.archive.org/web/20171022003328/https://www.sitepoint.com/unit-test-javascript-mocha-chai/) - the exercise is [here](day_5/1-testing)

## Describe

Although you can write anything in the describe string, it's common to prefix functions and instance method names with a **#** symbol and class methods with a **.** symbol.

## Context

When writing the message for context, it's common to start the description with "when" or "with".
