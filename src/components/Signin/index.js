import React from "react";
import { signInWithGoogle } from "../../firebase";
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <ErrorMsg className="errorMsg">{emailError}</ErrorMsg>
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ErrorMsg className="errorMsg">{passwordError}</ErrorMsg>

            <div className="btnContainer">
              <>
                <FormButton1 onClick={handleLogin}>LOG IN</FormButton1>
                <br></br>
                <FormButton2 onClick={signInWithGoogle}>
                  SIGN IN WITH GOOGLE
                </FormButton2>
                <FormLabel> Don't Have An Account?{""} </FormLabel>
                <FormButton3 to="/signup">
                  <Text>Register Now!</Text>
                </FormButton3>
              </>
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
