import * as ROUTES from "../constants/routes";
import Header from "../components/header";
import Profile from "../components/profile";

export function ProfileSection({ user, setProfile }) {
  console.log(user);
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src="/images/logo.svg" alt="Logo" to={ROUTES.HOME} />
        </Header.Frame>
      </Header>

      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profile.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
}
