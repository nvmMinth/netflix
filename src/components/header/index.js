import {
  Background,
  Frame,
  Logo,
  ButtonLink,
  Feature,
  FeatureBrowse,
  Title,
  Subtitle,
  Text,
  PlayButton,
  Nav,
  TextLink,
  Dropdown,
  Profile,
  Picture,
  Search,
  SearchIcon,
  SearchInput,
} from "./styles/header.styles";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};
Header.ButtonLink = function HeaderButton({ to, children, ...restProps }) {
  return (
    <Link to={to}>
      <ButtonLink {...restProps}>{children}</ButtonLink>
    </Link>
  );
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Header.Subtitle = function HeaderSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
Header.FeatureBrowse = function HeaderFeatureBrowse({
  children,
  ...restProps
}) {
  return <FeatureBrowse {...restProps}>{children}</FeatureBrowse>;
};
Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Picture = function HeaderPicture({ src, children, ...restProps }) {
  return (
    <Picture {...restProps} src={`images/users/${src}.png`}>
      {children}
    </Picture>
  );
};
Header.Search = function HeaderSearch({ search, setSearch, ...restProps }) {
  const [isSearching, setIsSearching] = useState(false);
  console.log(isSearching);
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setIsSearching(!isSearching)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        placeholder="Search films and series"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        isSearching={isSearching}
      ></SearchInput>
    </Search>
  );
};
