const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";
const util = require('util');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var states = { };
var randomstring = require("randomstring");
var moment = require('moment');
const nodeRequest = require('request');
const users = [];
const session = require('express-session')
let user = null;


router.use(session({
  secret: 'cats',
  //additions by Kyra
  resave: false,
  saveUninitialized: false
}));


const UCL_CLIENT_ID = "7129627437092132.5959063320602171";
const UCL_CLIENT_SECRET = "64780e92c6bed8abef428d88fade87cc8b0b8c4d9b1e16d93629538cea7b5354"; 




router.get("/ucl", function(req, res) {
  var state = randomstring.generate();
  states[state] = moment();
  var url = util.format('https://uclapi.com/oauth/authorise?client_id=%s&state=%s', UCL_CLIENT_ID, state);
  res.redirect(url);
});


router.get("/ucl/callback", function(request, response) {
  var timeNow = moment();
  if (request.query.state in states) {
    if (moment(states[request.query.state]).add(300, 'seconds') > timeNow) {
      if (request.query.result == "denied") {
        var deniedText = util.format('The login operation for state %s was denied', request.query.state);
        response.send(deniedText);
      } else {
        // Successful login
        var tokenUrl = util.format('https://uclapi.com/oauth/token?client_id=%s&client_secret=%s&code=%s', UCL_CLIENT_ID, UCL_CLIENT_SECRET, request.query.code);
        var token = "";
        var name = "";
        nodeRequest(tokenUrl, { json: true }, (err, res, body) => {
          if (err) { return console.log(err); }
          token = body.token;
          var userDataUrl = util.format('https://uclapi.com/oauth/user/data?client_secret=%s&token=%s', UCL_CLIENT_SECRET, token);
          nodeRequest(userDataUrl, {json: true}, (err, res, body) => {
            if (err) { 
              failureRedirect= "/login/failed";
              response.redirect(failureRedirect);
              return console.log(err); }
            
            name = body.full_name;
            var protectionKey = randomstring.generate();
            user = {
              "name": body.full_name,
              "department": body.department,
              "token": token,
              "auth_key": protectionKey
            };

            if (user) {
              request.session.token = token;
              response.redirect("http://localhost:3000/main")

      
            }else{
              console.log('Error')
              res.send('Error Happened')
              res.redirect("/login/failed")
            }
          });
        });
      }
    } else {
      response.send("Authorisation took more than 5 minutes, so it has failed");
    }
  } else {
    response.send("state does not exist");
  }
});

// Use the user variable in the router.post("/login" module
router.post("/login", function(request, response) {
  console.log(req.user)
  if (request.body.username == user.name && request.body.password == user.department) {
    response.redirect("http://localhost:3000/main")
  } else {
    response.send("Incorrect username or password");
  }
});






router.get("/login/success", (req, res) => {
  console.log(req.user)
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});


router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect(CLIENT_URL);
  });
});
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/main",
    failureRedirect: "/login/failed",
  })
);

module.exports = router