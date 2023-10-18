import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css';

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [familyname, setFamilyname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Implement sign up logic

    console.log("Sign up successful!");
  };

  return (
    <div className="signup-box">
      <div className="signup-headtext">create your oddspot account<br/>to join our community</div>
        <div className="signup-elements">
            <div className="signup-element">
                <label className="signup-label">
                    First Name
                <input
                    className="signup-input"
                    placeholder="enter your first name"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                </label>
            </div>

            <div className="signup-element">
                <label className="signup-label">
                    Family Name
                <input
                    className="signup-input"
                    placeholder="enter your family name"
                    type="text"
                    value={familyname}
                    onChange={(e) => setFamilyname(e.target.value)}
                />
                </label>
            </div>

            <div className="signup-element">
                <label className="signup-label">
                    E-Mail
                <input
                    className="signup-input"
                    placeholder="enter your email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </label>
            </div>

            <div className="signup-element">
                <label className="signup-label">
                    Password
                <input
                    className="signup-input"
                    placeholder="enter a password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
            </div>

            <div className="signup-element">
                <label className="signup-label">
                    repeat Password
                <input
                    className="signup-input"
                    placeholder="enter a password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
            </div>
        </div>

        <form onSubmit={handleSubmit}>

        <button className="signup-button" type="submit">Sign up</button>
      </form>

      <p className="signup-text">
        Already have an account? <Link className="login-link" to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;