import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

function Header() {
  return (
    <div>
      <header>
        <Container className="themed-container">
          <nav>
            <Link exact="true" to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/users">Users</Link>
            <Link to="/register">Register</Link>
          </nav>
        </Container>
      </header>
    </div>
  );
}

export default Header;
