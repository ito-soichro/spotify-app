import React from 'react';
import './Login.scss';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className="login">

      <img src="https://hd2.tudocdn.net/733420?w=646&h=284"
      alt="" 
      />

      {/* Spotify logo */}
      {/* Login with Spotify button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

    </div>
  );
}

export default Login;
