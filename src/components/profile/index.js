import React from "react";
import {
  Container,
  Title,
  List,
  User,
  Picture,
  Name,
} from "./styles/profile.styles";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Profile.List = function ProfileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Profile.User = function ProfileUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};

Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Profile.Picture = function ProfilePicture({ src, children, ...restProps }) {
  return <Picture {...restProps} src={src? `/images/users/${src}.png` : `/images/misc/loading.gif`}>{children}</Picture>;
};
