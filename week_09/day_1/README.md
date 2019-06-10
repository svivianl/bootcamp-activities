# Creating packages

[repo](git@github.com:vshibukawa/1st-package.git)
[lecture repo](https://github.com/alex-wilmer-ws/my-very-cool-awesome-thingy-majig)

version:
  - major (1st digit)
    - release
  - minor (2nd digit)
    - bug fixes
  - patch (last digit)
    - is not ready to publish it

entry point:
  - main program

after commit
`npm publish`

`npm view <name of the package you have creates>`

`npm add user <username>`

`npm version patch` to change only the patch

To create a react package, insert the babel in the package.json
```
scripts:{
  build: "babel -- presents @babel/preset-react <filename> --out-file dist.js"
}
```
and `npm i --save-dev babel-cli @babel/core`

It creates a new file (dist.js) to be run (bundle and transcript in one file)
