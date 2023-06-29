import { useContext, useState, useEffect } from "react";
import Fuse from "fuse.js";
import { ProfileSection } from "./profileSection";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import Loading from "../components/loading";
import Header from "../components/header";
import Card from "../components/card";
import Player from "../components/player";
import { FooterSection } from "./footerSection";

export const BrowseSection = ({ slides }) => {
  const [profile, setProfile] = useState({});
  //console.log(profile);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("series");
  const [search, setSearch] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  const { firebaseApp } = useContext(FirebaseContext);
  const user = firebaseApp.auth().currentUser || {};

  // loading when clicking "who's watching"
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  // loading slides
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  // live search
  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(search).map(({ item }) => item);

    if (slideRows.length > 0 && search.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [search]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.OpenBody />}
      <Header src="joker1">
        <Header.Frame>
          <Header.Nav>
            <Header.Logo src="/images/logo.svg" alt="Logo" to={ROUTES.HOME} />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Nav>

          <Header.Nav>
            <Header.Search search={search} setSearch={setSearch} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Nav>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Nav>
                <Header.Nav>
                  <Header.TextLink onClick={() => firebaseApp.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Nav>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Nav>
        </Header.Frame>

        <Header.FeatureBrowse>
          <Header.Title>Watch Joke Now</Header.Title>
          <Header.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            ipsam libero quaerat numquam ullam error quam magni animi odit amet!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            adipisci!
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.FeatureBrowse>
      </Header>

      <Card.Group>
        {slideRows.map((slideObj) => (
          <Card key={`${category}-${slideObj.title.toLowerCase()}`}>
            <Card.Title>{slideObj.title}</Card.Title>
            <Card.Entities>
              {slideObj.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>

            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterSection />
    </>
  ) : (
    <ProfileSection user={user} setProfile={setProfile} />
  );
};
