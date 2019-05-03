There is no way of making a **property private** in JavaScript. If a property exists, like the size property, it can always be set by any code that has access to the object. So we need some way of communicating to other developers that they shouldn't access the property directly, even though they can.

The way we do this in JavaScript is by adding an **_** to the beginning of the property name. So `this.size` becomes `this._size`. Adding an **_** doesn't change the behaviour, it just tells other developers not to access the property directly.
