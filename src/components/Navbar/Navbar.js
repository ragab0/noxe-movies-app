import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";
import SearchForm from "../Search/SearchForm";

export default function Navbar() {
  return (
    <nav>
      <div className="container nav-content">
        <Logo />
        <ul className="pages-list">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">movies</NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
          <li>
            <NavLink to="/tv">tv</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/networks">networks</NavLink>
          </li>
        </ul>
        <SearchForm />
        <ul className="icons-list"></ul>
        <ul className="auth-list">
          <li>
            <NavLink to={"/login"} className="btn login-btn">
              login
            </NavLink>
          </li>
          <li>
            <NavLink to={"/signup"} className="btn login-btn">
              signup
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
