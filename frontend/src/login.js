import React, { useState } from 'react';

export default function Login() {
  const [panelActive, setPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setPanelActive(true);
  };

  const handleSignInClick = () => {
    setPanelActive(false);
  };

  return (
    <div className={`main-container ${panelActive ? "right-panel-active" : ""}`}>
      <div className="aside">
        <div className="logo">
          <span><img className="site-logo" src="site-logo_2.png" alt=""/></span>
        </div>
        <div className="nav-toggler">
          <span></span>
        </div>
        <ul className="nav"></ul>
      </div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" id="name" />
            <input type="email" placeholder="Email" id="email" />
            <input type="password" placeholder="Password" id="password" />
            <button type="button" onClick={SignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Log in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" id="lname" />
            <input type="password" placeholder="Password" id="lpassword" />
            <button type="button" onClick={Loginfunc}>Log In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>BOOK AN AMBULANCE</h1>
              <p>To continue with us please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>Log In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Start your journey with us</h1>
              <p></p>
              <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Function to handle Sign Up
function SignUp() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch(`http://127.0.0.1:8000/register/name=${name}&email=${email}&password=${password}`)
    .then(response => response.json())
    .then(data => window.location.href = '../index.html');
}

// Function to handle Login
function Loginfunc() {
  const email = document.getElementById('lname').value;
  const password = document.getElementById('lpassword').value;

  fetch(`http://127.0.0.1:8000/login/email=${email}&password=${password}`)
    .then(response => response.json())
    .then(data => window.location.href = '../index.html');
}
