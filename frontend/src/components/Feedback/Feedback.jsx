import { Form } from "../Form";
import { Container } from "../Container";
import { Heading, Section } from "./Feedback.styled";

export const Feedback = () => {
  return (
    <Section>
      <Container>
        <Heading>Reach out to us!</Heading>
        <Form />
      </Container>
    </Section>
  );
};
