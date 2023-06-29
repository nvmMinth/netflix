import Jumbotron from "../components/jumbotron";
import jumboData from "../data/jumbotron.json";

export const JumbotronSection = () => {
  return (
    <div>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
            </Jumbotron.Pane>

            <Jumbotron.Pane>
              <Jumbotron.Image
                src={item.image}
                alt={item.alt}
              ></Jumbotron.Image>
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
};
