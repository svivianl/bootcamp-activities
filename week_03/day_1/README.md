`./node_modules/.bin/nodemon --watch server -e js <file name>`
  nodemon [options] [script.js] [args]
- watch:
  watch directory "path" or files. use once for each directory or file to watch
- -e:
  extensions to look for, ie. js,jade,hbs

## Chance

This single library can generate random numbers, characters, strings, names, addresses, dice, and pretty much anything else.

It includes the basic building blocks for all these items and is built on top of a Mersenne Twister so it can generate these things with repeatability, if desired.

### chance.gender()
Generate a random gender 
  `
  Chance.gender();
  => 'Female'
  `
Extra genders can be provided using the extraGenders key in the optional options argument:
  `
  Chance.gender({
    extraGenders: ['Agender', 'Genderqueer', 'Trans', 'Pangender']
  });
  `

### chance.prefix()
  // usage
  `chance.prefix()
  chance.prefix({ full: true })`
  Generate a random name prefix

  `chance.prefix();
  => 'Mrs.' `
  By default, returns the shorter version.

  Optionally get back the full version.

  `chance.prefix({ full: true });
  => 'Mister' `
  Optionally specify a gender. Valid options are male, female, or all (the default).

  `chance.prefix({ gender: "male" });
  => 'Mr.'

  chance.prefix({ gender: "female" });
  => 'Miss' `

## md5

A JavaScript function for hashing messages with MD5.
You can use this package on the server side as well as the client side.

# CSS

**ID**s also need be used when you need to reference them from the URL using the anchor hash value (also called the page fragment). Eg: http://yourdomain.com#comments will jump to the element with ID comments.

[Positioning Elements](https://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/)

The [**line-height**](https://www.w3schools.com/cssref/pr_dim_line-height.asp) property specifies the height of a line.

[Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)








