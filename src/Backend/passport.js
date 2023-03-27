const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");



const GOOGLE_CLIENT_ID = "92049937923-3sdhe7d12h166v7j8eun5ku712htmlo7.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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"; // when deplying we should use env file



passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
);



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
