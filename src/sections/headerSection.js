import Header from "../components/header";
import * as ROUTES from "../constants/routes";
import SubForm from "../components/sub-form";

export const HeaderSection = () => {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src="/images/logo.svg" alt="Logo" to={ROUTES.HOME} />
          <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
        </Header.Frame>

        <Header.Feature>
          <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
          <Header.Subtitle>Watch anywhere. Cancel anytime.</Header.Subtitle>
          <SubForm>
            <SubForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </SubForm.Text>
            <SubForm.Input placeholder="Email address" />
            <SubForm.Button>Get Started</SubForm.Button>
          </SubForm>
        </Header.Feature>
      </Header>
    </>
  );
};
