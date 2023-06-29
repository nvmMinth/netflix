import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div``;
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

`;
export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 0 3.5rem;
  padding-top: 20px;
`;
export const Logo = styled.img`
  width: 8.375rem;
`;
export const ButtonLink = styled.div`
  display: block;
  background: #e50914;
  height: fit-content;
  color: white;
  border-radius: 3px;
  padding: 7px 17px;
  font-size: 16px;
  cursor: pointer;
`;
export const Feature = styled.div`
  padding: 70px 45px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 950px;
  margin: auto;
`;
export const Title = styled.h1`
  color: white;
  font-size: 50px;
  max-width: 640px;
  font-weight: 600;
  margin: 0;
`;
export const Subtitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: 500;
  margin: 0;
`;
export const Text = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 400;
  margin: 20px 0;
`;
export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;
export const FeatureBrowse = styled.div`
  padding:  70px 45px 170px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 800px;
  @media screen and (max-width: 1000px) {
    padding: 45px
    
  }
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
`;
export const TextLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "600" : "normal")};
  transition: all 0.25s ease;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 150px;
  top: 32px;
  right: 0;
  button {
    margin-right: 10px;
  }
  p {
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 0;
  }
  ${Nav} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  display: flex;
  align-items: center;
  /* margin-left: 20px; */
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  font-family: "Poppins";
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ isSearching }) => (isSearching === true ? "10px" : "0")};
  padding: ${({ isSearching }) => (isSearching === true ? "0 10px" : "0")};
  opacity: ${({ isSearching }) => (isSearching === true ? "1" : "0")};
  width: ${({ isSearching }) => (isSearching === true ? "200px" : "0px")};
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
export const SearchIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;
