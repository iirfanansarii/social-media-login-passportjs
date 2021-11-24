import React from 'react';
import Google from '../img/google.png';
import Facebook from '../img/facebook.png';
import Github from '../img/github.png';

function Login() {
  const googleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  const githubLogin = () => {
    window.open('http://localhost:5000/auth/github', '_self');
  };

  const facebookLogin = () => {
    window.open('http://localhost:5000/auth/facebook', '_self');
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a login method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={googleLogin}>
            <img alt="" src={Google} className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebookLogin}>
            <img alt="" src={Facebook} className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={githubLogin}>
            <img alt="" src={Github} className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
