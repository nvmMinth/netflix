import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 805;
`;

export const Title = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`;
export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;
export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  &:hover {
    font-weight: 500;
    color: #e5e5e5;
  }
`;
export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
`;
export const User = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  cursor: pointer;
  &:hover ${Picture} {
    border: 3px solid white;
    transition: all 0.25s ease;
  }
  &:hover ${Name} {
    font-weight: 500;
    color: white;
    transition: all 0.25s ease;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
