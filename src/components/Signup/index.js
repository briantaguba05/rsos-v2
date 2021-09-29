import React, { useEffect, useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import ScrollToTop from "../ScrollToTop";
import fire, { signInWithGoogle } from "../../firebase";
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
} from "./SignUpElements";
import { googleProvider } from "../../authMethods";
import socialAuth from "../../service/auth";

const SignUp = ({ submitForm }, props) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const { emailError, passwordError } = props;

  const handleOnClick = async (provider) => {
    const res = await socialAuth(provider);
    console.log(res);
  };

  /*const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };


  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);*/

  return (
    <>
      <ScrollToTop />
      <Container>
        <FormWrap>
          <FormContent>
            <Form>
              <FormH1>Register Now</FormH1>
              <FormLabel htmlFor="for">Enter your Name</FormLabel>
              <FormInput
                type="text"
                name="fName"
                placeholder="Enter your First Name and Last Name"
                required
                autoFocus
                value={values.fName}
                onChange={handleChange}
              />
              {errors.fName && <ErrorMsg>{errors.fName}</ErrorMsg>}

              <FormLabel htmlFor="for">Phone Number</FormLabel>
              <FormInput
                type="text"
                name="phoneNum"
                placeholder="Enter your 11-digit Phone Number (09XX XXX XXXX)"
                required
                autoFocus
                value={values.phoneNum}
                onChange={handleChange}
              />
              {errors.phoneNum && <ErrorMsg>{errors.phoneNum}</ErrorMsg>}
              <FormLabel htmlFor="for">Plate Number</FormLabel>
              <FormInput
                type="text"
                name="plateNum"
                placeholder="Enter your Plate Number"
                required
                autoFocus
                value={values.plateNum}
                onChange={handleChange}
              />
              {errors.plateNum && <ErrorMsg>{errors.plateNum}</ErrorMsg>}
              <FormLabel htmlFor="for">Motorcycle Type</FormLabel>
              <FormInput
                type="text"
                name="motorType"
                placeholder="Enter your Motorcycle Brand & Name"
                required
                autoFocus
                value={values.motorType}
                onChange={handleChange}
              />
              {errors.motorType && <ErrorMsg>{errors.motorType}</ErrorMsg>}

              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                autoFocus
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
              <ErrorMsg className="errorMsg">{emailError}</ErrorMsg>

              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                name="password"
                placeholder="Enter your Password"
                required
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
              <ErrorMsg className="errorMsg">{passwordError}</ErrorMsg>

              <FormLabel htmlFor="for">Confirm Password</FormLabel>
              <FormInput
                type="password"
                name="confirmpassword"
                placeholder="Retype your password"
                required
                value={values.confirmpassword}
                onChange={handleChange}
              />
              {errors.confirmpassword && (
                <ErrorMsg>{errors.confirmpassword}</ErrorMsg>
              )}
              <div className="btnContainer">
                <>
                  <FormButton1 onClick={handleSubmit} noValidate>
                    REGISTER ACCOUNT
                  </FormButton1>
                  <br></br>
                  <FormButton2 onCLick={() => handleOnClick(googleProvider)}>
                    SIGN IN WITH GOOGLE
                  </FormButton2>

                  <FormLabel> Already Have an Account?{""} </FormLabel>
                  <FormButton3 to="/signin">
                    <Text>Login Now!</Text>
                  </FormButton3>
                </>
              </div>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;

/*import React, { useState } from "react";
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
} from "./SignUpElements";

const SignUp = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    emailError,
    passwordError,
    confirmpassword,
    setConfirmPassword,
    firstName,
    lastName,
    checkValidation,
    isError,
  } = props;

  return (
    <Container>
      <FormWrap>
        <Icon to="/">RSOS</Icon>
        <FormContent>
          <Form>
            <FormH1>Register Now</FormH1>
            <FormLabel htmlFor="for">First Name</FormLabel>
            <FormInput
              type="text"
              required
              autoFocus
              value={firstName}
              pattern="[a-zA-Z ]"
              minLength="4"
              maxLength="12"
            />
            <FormLabel htmlFor="for">Last Name</FormLabel>
            <FormInput
              type="text"
              required
              autoFocus
              value={lastName}
              pattern="[a-zA-Z ]"
              minLength="4"
              maxLength="12"
            />

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
              onChange={
                (e) => setPassword(e.target.value) //&& validate(e.target.value)
              }
            />

            <FormLabel htmlFor="for">Confirm Password</FormLabel>
            <FormInput type="password" required value={confirmpassword} />
            <br></br>
            <br></br>
            <div className="btnContainer">
              <>
                <FormButton1 onClick={handleSignup}>
                  REGISTER ACCOUNT
                </FormButton1>
                <ErrorMsg className="errorMsg">{isError}</ErrorMsg>

                <ErrorMsg className="errorMsg">{passwordError}</ErrorMsg>
                <FormLabel> Already Have an Account?{""} </FormLabel>
                <FormButton3 to="/signin">
                  <Text>Login Now!</Text>
                </FormButton3>
              </>
            </div>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUp;
*/
