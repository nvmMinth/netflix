import Accordion from "../components/faq";
import faqData from "../data/faq.json";
import SubForm from "../components/sub-form";

export const FaqSection = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <SubForm>
        <SubForm.Text>Ready to watch? Enter your email to create or restart your membership.</SubForm.Text>
        <SubForm.Input placeholder="Email address" />
        <SubForm.Button>Get Started</SubForm.Button>
      </SubForm>
    </Accordion>
  );
};
