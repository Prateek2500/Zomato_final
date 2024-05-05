const passport = require("passport");

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const CLIENT_ID = "178718242386-04qfgeick1o5r4eoi6flhho7p67et01i.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
 
passport.use(new GoogleStrategy({
    clientID:     CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "https://localhost:5500/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});