import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import axios from "axios";

function Login() {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", input)
      .then(res => {
        console.log("Logged in", res);
      })
      .catch(err => {
        console.log("Login error:", err);
      });
  }

  return (
    <div>
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={input.username}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter Password"
              value={input.password}
              onChange={handleChange}
            />
          </FormGroup>
          <Button>Log In</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
