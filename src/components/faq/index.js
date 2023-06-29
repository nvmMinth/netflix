import React, { useState, createContext, useContext } from "react";
import {
  Container,
  Item,
  Inner,
  Frame,
  Header,
  Body,
  Title,
} from "./styles/faq.styles";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <ToggleContext.Provider value={{ isShown, setIsShown }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { isShown, setIsShown } = useContext(ToggleContext);
  return (
    <Header {...restProps} onClick={() => setIsShown((isShown) => !isShown)}>
      {children}
      {isShown ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="More" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { isShown } = useContext(ToggleContext);
  return (
    <Body className={isShown ? "open" : "close"} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
