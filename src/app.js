const express = require('express');
const cookieSession = require('cookie-session');
const cors = require('cors');
const env = require('dotenv');
const passport = require('passport');
env.config();

/* passport */
const passportStrategy = require('./passport');

/* auth routes */
const authRoute = require('./routes/auth');

const app = express();

/* cookie-session */
app.use(
  cookieSession({
    name: 'session',
    keys: ['billie'],
    maxAge: 24 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

/* cors */
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true,
  })
);
app.use(express.json());

/* routes */
app.use('/auth', authRoute);

app.listen(process.env.PORT, () => {
  console.log('App is listening on port', process.env.PORT);
});
