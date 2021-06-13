/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../components/Signup/Forms.css";
import SignUp from "../components/Signup";
import FormSuccess from "../components/Signup/FormSuccess";
import Dashboard from "../pages/dashboard";

const SignUpPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmitted ? <SignUp submitForm={submitForm} /> : <Dashboard />}
      </div>
    </>
  );
};

export default SignUpPage;

/*import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import SignUp from "../components/Signup";
import fire from "../firebase";
// eslint-disable-next-line no-unused-vars
import Navbar from "../components/Navbar";
import Dashboard from "../pages/dashboard";
import Footer from "../components/Footer";
import FormSuccess from "../components/Signup/FormSuccess";

const SignUpPage = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const [isError, setIsError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setConfirmpassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPassword("");
    setConfirmpassword("");
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/wrong.password":
            setPasswordError(err.message);
            break;
        }
      });
    return true;
  };

  const handleLogout = () => {
    fire.auth().signOut();
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
  }, []);
  return (
    <>
      <ScrollToTop />
    {user ? (
      <Dashboard handleLogout={handleLogout} />
    ) : (
      <SignUp
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
    )}
    <Footer />
  </>
  );
};

export default SignUpPage;*/
