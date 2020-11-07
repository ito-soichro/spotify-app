import React from 'react';
import '../login/Login.css';
import { loginUrl } from '../../spotify';

function Login() {
  return (
    <div className="login">

      <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/e/efumotokazumi/20180212/20180212103755.jpg"
      alt="" 
      />

      {/* Spotify logo */}
      {/* Login with Spotify button */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

    </div>
  );
}

export default Login;
