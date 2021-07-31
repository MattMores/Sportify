import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./Login.css"
import therock from "./therock.svg"

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

  return (
    <>
      <div className="header-3">Spotify Says...</div>
      <div className="header-2">Log In</div>
      <div className="content"></div>
      <div className='image-2'>
        <img className="img" src={therock} alt=""/>
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
      </div>
    </>
  );
}

export default LoginForm;
