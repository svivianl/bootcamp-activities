# Nodemon
  `npm i --save-dev nodemon`
  Run your application with the following command
  `./node_modules/.bin/nodemon -L <name of the file>`
  When using nodemon with files in a shared filesystem in vagrant, we must use the -L flag. For more information, see the [documentation](https://github.com/remy/nodemon#application-isnt-restarting).
  Edit the scripts section of your package.json to look like the following:
  `"scripts": {
    "start": "./node_modules/.bin/nodemon -L express_server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }`
  From now on, start the server by runing `npm start`

# [Git branching](https://web.compass.lighthouselabs.ca/days/w02d3/activities/673)

  // to create new branches:
  name of the branch:
    `<feature or bug>/<name of the change>`
  git checkout -b `<name of the branch>`
  // to check if you have done what you think you have done
  git branch
  //...make the changes with git add and git commit as usual

  // you are in the branch and you want to push into the branch and continue 
  // to work in the same branch
  git push --set-upstream origin `<name of the branch>`
  // after that, we can do git push to the correct branch
  
  // to reverse a commit and go to an older branch
  git checkout `<name of the older branch>`

  // to do the branch merge    
  git checkout master
  // after that
  git merge `<name of the branch>`
  // and done



  ------------------------------
  git pull

  git status

  git checkout -b develop

  git checkout -b feature/create_db

  git branch

  git status
  // get the name of the branch

  git add and commit as usual
  
  git push origin feature/create_db

  git checkout develop
  
  git merge feature/create_db
  
  git push origin develop

  then, go to the github, click in the pull request, compare and pull
   choose the development, make sure you are in the development to the master
  
  git checkout develop

  git checkout -b feature/login

  // to pull the develop to the branch
  git pull origin develop

# [Cookies](https://web.compass.lighthouselabs.ca/activities/136)
  `
    var express = require("express");
    var app     = express();

    var cookieParser  = require('cookie-parser');
    app.use(cookieParser());

    //login
    app.post("/login", (req, res) => {
      res.cookie("username", req.body.username);
      res.redirect("/urls");
    });
    //logout
    app.post("/logout", (req, res) => {
      res.clearCookie("username");
      urlDatabase = {};
      res.redirect("/urls");
    });
  `
  You need to pass `username: req.cookies["username"]` in the routes you want to use the username in the res.render 
  
  Test methods in the terminal
  curl [URL]

  **delete**
  curl -X POST -i localhost:8080/urls/:id/delete

  **post**
  curl -X POST -d 'text=...' -H "Content-Type: application/x-www-form-urlencoded" http://127.0.0.1:8080/tweets
