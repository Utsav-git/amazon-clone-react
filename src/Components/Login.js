import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../CSS/Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.prevent.default();
  };
  const createAccount = (e) => {
    e.prevent.default();
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     if (auth) {
    //       history.push("/");
    //     }
    //   })
    //   .catch((e) => {
    //     alert(e.message);
    //   });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="Logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1 className="login_header">Sign in</h1>
        <form>
          <label className="login_label1">E-mail</label>
          <input
            type="text"
            className="login_input1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login_label2">Password</label>
          <input
            type="password"
            className="login_input2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button type="submit" className="login_button" onClick={signIn}>
            Sign In
          </button>
          <small>New Here..? Create Amazon Account</small>
          <button className="createAccount_button" onClick={createAccount}>
            Create Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
