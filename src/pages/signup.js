import { useState, useContext } from "react";
import Form from "../components/form";
import Header from "../components/header";
import { FooterSection } from "../sections/footerSection";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const { firebaseApp } = useContext(FirebaseContext);
  //state
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || emailAddress === "" || password === "";

  const signupHandler = (e) => {
    e.preventDefault();
    //firebase
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random()*5) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setError(error.message);
        setFirstName("");
        setPassword("");
        setEmailAddress("");
      });
  };
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src="/images/logo.svg" alt="Logo" to={ROUTES.HOME} />
        </Header.Frame>
        <Form>
          <Form.Title>SIGN UP</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Frame method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              onClick={signupHandler}
            >
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user?
              <Form.Link to="/signin"> Sign In Now</Form.Link>
            </Form.Text>
          </Form.Frame>

          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </Header>
      <FooterSection />
    </>
  );
};
