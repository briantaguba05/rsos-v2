import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import { Filler } from "../About/AboutElements";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { signInWithGoogle } from "../../firebase";
import Select from "react-select";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  const loginOptions = [
    { value: "User", label: "Login as User" },
    { value: "Admin", label: "Login as Admin" },
    { value: "Family", label: "Login as Family" },
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    if (selectedOptions.value === "User") {
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        history.push("/dashboard/user");
      } catch {
        setError("Please check your email and password!");
      }
    } else if (selectedOptions.value === "Family") {
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        history.push("/dashboard/family");
      } catch {
        setError("Please check your email and password!");
      }
    } else if (selectedOptions.value === "Admin") {
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        history.push("/dashboard/admin");
      } catch {
        setError("Please check your email and password!");
      }

      setLoading(false);
    }
  }

  const [agree, setAgree] = useState(false);
  const [value, setValue] = useState("");

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Filler />

      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <div>
              <input type="checkbox" id="agree" onChange={checkboxHandler} />
              <label htmlFor="agree">
                I agree to{" "}
                <b>
                  <Link to="/termsconditions">terms and conditions</Link> and{" "}
                  <Link to="/privacypolicy">privacy policy</Link>
                </b>
              </label>
            </div>
            <h3>Choose Login Method Below</h3>
            <Select
              options={loginOptions}
              value={selectedOptions}
              onChange={handleChange}
            />
            <Button disabled={!agree} className="w-100" type="submit">
              Log In
            </Button>

            {/*<GoogleButton disabled={!agree} onClick={signInWithGoogle}>
              SIGN IN WITH GOOGLE
            </GoogleButton>*/}
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      <br></br>
    </>
  );
};

export default Login;

/*const GoogleButton = styled.button`
    transition: background-color .3s, box-shadow .3s;
    
    padding: 12px 16px 12px 42px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    width: auto;
    height: auto;
    
    color: #757575;
    font-size: 14px;
    font-weight: 500;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;
    
    &:hover {
      box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
    }
    
    &:active {
      background-color: #eeeeee;
    }
    
    &:focus {
      outline: none;
      box-shadow: 
        0 -1px 0 rgba(0, 0, 0, .04),
        0 2px 4px rgba(0, 0, 0, .25),
        0 0 0 3px #c8dafc;
    }
    
    &:disabled {
      filter: grayscale(100%);
      background-color: #ebebeb;
      box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
      cursor: not-allowed;
    }
  }*/
