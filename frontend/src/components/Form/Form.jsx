import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Field } from "../Field";
import { Button } from "../Button";
import { Box, StyledForm } from "./Form.styled";
import { sendFeedBack } from "../../redux/operations";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const error = useSelector((state) => state.error);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(sendFeedBack({ name, email, message })).unwrap();
      toast.success("Your feedback was sent. Thank you!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(`Your feedback wasn't sent.\n${error}.`);
    }
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <Box>
        <Field
          name="name"
          placeholder="Your name"
          required
          value={name}
          onChange={setName}
        />
        <Field
          name="email"
          type="email"
          placeholder="Your e-mail"
          required
          value={email}
          onChange={setEmail}
        />
        <Field
          name="message"
          placeholder="Your message"
          required
          multiline
          value={message}
          onChange={setMessage}
        />
      </Box>
      <Button
        text="Send message"
        loadingText="Sending..."
        isLoading={isLoading}
      />
    </StyledForm>
  );
};
