import React, { useState } from "react";
import "./Login.css";

export default function LoginPage() {
  function formHandler(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    e.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="container">
        <h2>Login Now</h2>
        <form onSubmit={formHandler} className="login-form auth-form">
          <label>
            <span>email</span>
            <input type="email" name="email" />
          </label>
          <label>
            <span>password</span>
            <input type="password" name="password" />
          </label>
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
}
