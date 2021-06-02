import { getAuth, RecaptchaVerifier } from "firebase/auth";

const auth = getAuth();
const [signInSubmit, onSignInSubmit] = "";
window.recaptchaVerifier = new RecaptchaVerifier(
  "sign-in-button",
  {
    size: "invisible",
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    },
  },
  auth
);
