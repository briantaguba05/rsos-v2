import React from "react";
import { googleProvider, facebookProvider } from "../../authMethods";
import { signInWithFacebook, signInWithGoogle } from "../../firebase";
import socialAuth from "../../service/auth";
import Facebook from "../Facebook/Facebook";
import "./login.css";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton1,
  Text,
  ErrorMsg,
  FormButton3,
  FormButton2,
  GoogleButton,
  FacebookButton,
} from "./SigninElements";

const SignIn = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
  } = props;

  const handleOnClick = async (provider) => {
    const res = await socialAuth(provider);
    console.log(res);
  };
  return (
    <Container>
      <FormWrap>
        <Icon to="/">RSOS</Icon>
        <FormContent>
          <Form>
            <FormH1>Login to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput
              type="email"
              required
              autoFocus
              value={email}
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <ErrorMsg className="errorMsg">{emailError}</ErrorMsg>
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput
              type="password"
              required
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ErrorMsg className="errorMsg">{passwordError}</ErrorMsg>

            <div className="btnContainer">
              <FormButton1 onClick={handleLogin}>LOG IN</FormButton1>
              <br></br>
            </div>
            <div className="btnContainer">
              <br></br>
              <GoogleButton onClick={signInWithGoogle}>
                SIGN IN WITH GOOGLE
              </GoogleButton>
            </div>
            <div className="btnContainer">
              <br></br>
              <FormLabel> Don't Have An Account?{""} </FormLabel>
              <FormButton3 to="/signup">
                <Text>Register Now!</Text>
              </FormButton3>
            </div>
            <div className="btnContainer">
              <br></br>
              <Facebook />
            </div>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;

/*
return (
    <section className="login">
      <div className="loginContainer">
        <label>Email</label>
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label htmlFor="for">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>LOG IN</button>
              <p> Don't Have An Account?{""} </p>
              <span onClick={() => setHasAccount(!hasAccount)}>
                Register Now!
              </span>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Signup</button>
              <p> Already Have An Account?{""} </p>
              <span onClick={() => setHasAccount(!hasAccount)}>
                Register Now!
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  );

  */
