import React from 'react';
import './Navheader.css';
import logo from './logo2.png'
import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navheader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/"
          className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </Link>
        <button className="navbar-toggler"
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span
            className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav">
          <Nav className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item pl-4">
                <Link to="/cart" className="nav-link active" aria-current="page" href="#"><AiOutlineShoppingCart/></Link>
              </li>
              <li className="nav-item px-4">
                <Link to="/login" className="nav-link" aria-current="page" href="#">Login</Link>
              </li>
              
              <li
                className="nav-item pr-4 ">
                <Link to="/signup" className="nav-link px-4 signup" aria-current="page" href="#">Sign up</Link>
              </li>
            </ul>
          </Nav>
        </div>
      </div>
    </nav>
  );
};

export default Navheader;