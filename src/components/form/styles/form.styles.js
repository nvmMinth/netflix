import styled from "styled-components/macro";
import { Link as FormLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  margin: auto;
  padding: 60px 68px 40px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;
export const Error = styled.div`
  background-color: #e87c03;
  color: white;
  font-size: 16px;
  border-radius: 3px;
  padding: 10px 20px;
  margin-bottom: 16px;
`;
export const Title = styled.h1`
  color: white;
  font-size: 32px;
  margin-bottom: 28px;
`;
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;
export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  color: #8c8c8c;
`;
export const Link = styled(FormLink)`
  color: white;
`;
export const Input = styled.input`
  padding: 16px;
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: #333;
  color: white;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;
export const Submit = styled.div`
  background: #e50914;
  width: 100%;
  color: white;
  padding: 16px;
  border-radius: 3px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  margin: 16px 0;
  &:disabled {
    opacity: 0.5;
  }
`;
