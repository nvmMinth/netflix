import { useState, useContext } from "react";
import Form from "../components/form";
import Header from "../components/header";
import { FooterSection } from "../sections/footerSection";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const { firebaseApp } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  console.log(emailInput);
  console.log(passwordInput);
  console.log(error);

  const isInValid = passwordInput === "" || emailInput === "";

  const signInHandler = (e) => {
    e.preventDefault();

    //firebase
    return firebaseApp
      .auth()
      .signInWithEmailAndPassword(emailInput, passwordInput)
      .then(() => {
        // navigate to browse page
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailInput("");
        setPasswordInput("");
        setError(error.message);
      });
  };

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src="/images/logo.svg" alt="Logo" to={ROUTES.HOME} />
        </Header.Frame>
        <Form>
          <Form.Title>SIGN IN</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Frame method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <Form.Submit
              disabled={isInValid}
              type="submit"
              onClick={signInHandler}
            >
              Sign In
            </Form.Submit>
          </Form.Frame>
          <Form.Text>
            New to Netflix?
            <Form.Link to={"/signup"}> Sign Up Now</Form.Link>
          </Form.Text>
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
