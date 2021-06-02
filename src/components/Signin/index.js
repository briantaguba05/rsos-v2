import React from "react";
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
  FormButton2,
  Text,
  ErrorMsg,
} from "./SigninElements";

const SignIn = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <Container>
      <FormWrap>
        <Icon to="/">RSOS</Icon>
        <FormContent>
          <Form>
            <FormH1>Signin to your account</FormH1>
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
              {hasAccount ? (
                <>
                  <FormButton1 onClick={handleLogin}>LOG IN</FormButton1>
                  <FormLabel> Don't Have An Account?{""} </FormLabel>
                  <Text onClick={() => setHasAccount(!hasAccount)}>
                    Register Now!
                  </Text>
                </>
              ) : (
                <>
                  <FormButton2 onClick={handleSignup}>Signup</FormButton2>
                  <FormLabel> Already Have An Account?{""} </FormLabel>
                  <Text onClick={() => setHasAccount(!hasAccount)}>
                    Login Now
                  </Text>
                </>
              )}
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
