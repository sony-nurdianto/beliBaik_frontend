import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
// import "../../style.css"

const navbar = () => {
  return (
    <Navbar
      className="animate__animated animate__fadeIn"
      style={{ animationDuration: "2s", animationDelay: "1s" }}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand>
        <Link to="/" style={{ textDecoration: "none" }}>
          <strong className="span">
            <span className="brand1">
              B<span className="brand2">e</span>li Baik
            </span>
          </strong>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <HashLink className="nav-link" to="/#tentang">
            <strong>Tentang</strong>
          </HashLink>
          <HashLink className="nav-link" to="/#bank">
            <strong>Fitur & Bank Pilihan</strong>
          </HashLink>
          {/* <Link className="nav-link" to="/artikel">
            <strong>Testimoni</strong>
          </Link> */}
          <HashLink className="nav-link" to="/#artikel">
            <strong>Artikel</strong>
          </HashLink>
          <HashLink className="nav-link" to="/#kontak">
            <strong>Kontak</strong>
          </HashLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
