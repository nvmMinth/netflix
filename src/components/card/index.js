import React, { useState, createContext, useContext } from "react";
import {
  Container,
  Group,
  Item,
  Text,
  Title,
  SubTitle,
  Meta,
  Image,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Entities,
} from "./styles/card.styles";

export const CardContext = createContext();

// PROVIDER
export default function Card({ children, ...restProps }) {
  const [showItem, setShowItem] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <CardContext.Provider
      value={{ showItem, setShowItem, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </CardContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};
Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

// ITEM CONTEXT
Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setItemFeature, setShowItem } = useContext(CardContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowItem(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};
Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

// FEATURE CONTEXT - click item -> show feature
Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { showItem, setShowItem, itemFeature, setItemFeature } =
    useContext(CardContext);
  return showItem ? (
    <Feature
      {...restProps}
      src={`images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowItem(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};
