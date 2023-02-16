import { Field } from "../Field";
import { Button } from "../Button";
import { Box, StyledForm } from "./Form.styled";

export const Form = () => {
  return (
    <StyledForm autoComplete="off">
      <Box>
        <Field name="name" placeholder="Your name" required />
        <Field name="email" type="email" placeholder="Your e-mail" required />
        <Field name="message" placeholder="Your message" required multiline />
      </Box>
      <Button>Send message</Button>
    </StyledForm>
  );
};
