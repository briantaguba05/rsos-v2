import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import { signInWithGoogle } from "../../firebase";
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

const SignUp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <Container>
      <FormWrap>
        <Icon to="/">RSOS</Icon>
        <FormContent onSubmit={handleSubmit} noValidate>
          <Form>
            <FormH1>Register Now</FormH1>
            <FormLabel htmlFor="for">First Name</FormLabel>
            <FormInput
              type="text"
              name="fName"
              placeholder="Enter your First Name"
              required
              autoFocus
              value={values.fName}
              onChange={handleChange}
            />
            {errors.fName && <ErrorMsg>{errors.fName}</ErrorMsg>}
            <FormLabel htmlFor="for">Last Name</FormLabel>
            <FormInput
              type="text"
              name="lName"
              placeholder="Enter your Last Name"
              required
              autoFocus
              value={values.lName}
              onChange={handleChange}
            />
            {errors.lName && <ErrorMsg>{errors.lName}</ErrorMsg>}

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
                <FormButton1>REGISTER ACCOUNT</FormButton1>
                <br></br>
                <FormButton2 onClick={signInWithGoogle}>
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
