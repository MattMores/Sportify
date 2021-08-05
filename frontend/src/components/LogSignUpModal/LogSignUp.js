import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./Login.css"
import therock from "./therock.svg"
import anothertry from "./anothertry.png"

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Passwords Must Match']);
  };

  return (
    <>
      {/* <div className="header-3">The Rock Says...</div>
      <div className="header-2">Sign Up</div> */}
      <div className="content"></div>
      <div>
        <img className="img-anothertry" src={anothertry} alt=""/>
      </div>
      <div className="form-2">
      <form onSubmit={handleSubmit}>
        <div className="error">
          {errors.map((error, idx) => <div key={idx}>{error}</div>)}
        </div>
        <div className="form-group">
        <label className="label">Email</label>
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
        <div className="form-group">
        <label className="label">Username</label>
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          </div>
        <div className="form-group">
        <label className="label">Password</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
        <div className="form-group">
        <label className="label">Confirm Password</label>
          <input
            className="input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="footer-2">
        <button className="auth-btn" type="submit">Sign Up</button>
        </div>
      </form>
      </div>
    </>
  );
}

export default SignupFormPage;
