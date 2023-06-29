import { Container, Input, Button, Text } from "./styles/sub-form.styles";

export default function SubForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SubForm.Input = function SubFormInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};
SubForm.Button = function SubFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Submit" />
    </Button>
  );
};
SubForm.Text = function SubFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
