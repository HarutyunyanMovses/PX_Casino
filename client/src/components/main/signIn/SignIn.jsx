import React from "react";
import Fetch from "../../../JS/services/fetch";
import { Link } from "react-router-dom";
import "./signIn.css";
import { useState } from "react";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const sendDataSignin = () => {
    if (email.length > 4 && password.length > 4) {
      Fetch.post("auth/signin", { email, password }).then(data => {
        localStorage.setItem("loggedUser_id", JSON.stringify(data.loggedUser_id));
        localStorage.setItem("token", JSON.stringify(data.token));
        window.location.href = "/casino";
      }).catch(e => console.log(e));
    }
  };

  return (
    <div className="signinBody">
      <div className="signinForm">
        <div className="signIn">
          <h2>Hello!</h2>
          <p>Sing into Tour account</p>

          <input
            className="inp2"
            type="text"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          ></input>

          <input
            className="inp2"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          ></input>

          {/* <Link to="chat" > <button disabled={bool} id="signin">Sign In</button> </Link> */}
          <button onClick={sendDataSignin} id="signin">
            Sign In
          </button>
          <Link to="/signup" id="linkSignUp">
            Create Acaunt
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignIn;