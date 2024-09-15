import React from "react";
import "./Signup.css";

export default function SignupPage() {
  return (
    <div className="signup-page">
      <div className="container">
        <h2>Signup Now</h2>
        <form className="signup-form auth-form">
          <label>
            <span>name:</span>
            <input type="text" name="name" />
          </label>
          <label>
            <span>email:</span>
            <input type="email" name="email" />
          </label>
          <label>
            <span>password:</span>
            <input type="password" name="password" />
          </label>
          <label>
            <span>password confirm:</span>
            <input type="password" name="password" />
          </label>
          <button type="submit">register</button>
        </form>
      </div>
    </div>
  );
}
