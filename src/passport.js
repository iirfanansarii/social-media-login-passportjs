const passport = require('passport');
const env = require('dotenv');
env.config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// gihub strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// facebook strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

/* serialize and deserialize */

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
