import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./Login.css"
import anothertry from "./anothertry.png"
import { useHistory } from "react-router";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleDemo = (e) => {
    e.preventDefault();
    setErrors([]);
    const credential = 'demouser@gmail.com';
    const password = 'password';
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
};

  return (
    <>
      <div className="content"></div>
      <div>
        <img className="img-anothertry" src={anothertry} alt=""/>
      </div>
      <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="error">
          {errors.map((error, idx) => (
            <div key={idx}>{error}</div>
          ))}
        </div>
        <div className="form-group-2">
        <label className="label"></label>
          Username or Email
          <input
            className="input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
        <div className="form-group-2">
          <label className="label"></label>
            Password
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        </div>
        <div className="footer-2">
        <button className="auth-btn" type="submit">Log In</button>
        </div>
      </form>
      <div>
        <form onSubmit={handleDemo}>
        <button className="auth-btn-2" type="submit" id="demo">Demo Login</button>
        </form>
      </div>
      </div>
    </>
  );
}

export default LoginForm;
