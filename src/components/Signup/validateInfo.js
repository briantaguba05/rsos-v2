export default function validateInfo(values) {
  let errors = {};

  if (!values.fName.trim()) {
    errors.fName = "First Name required!";
  }
  if (!values.lName.trim()) {
    errors.lName = "Last Name required!";
  } //else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  errors.lname = "Enter a valid name!";

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid!";
  }
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more!";
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = "Password is required!";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "Passwords do not match!";
  }
  return errors;
}
