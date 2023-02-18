import { useEffect, useState } from "react";

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

  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success("Your feedback was sent. Thank you!");
      setName("");
      setEmail("");
      setMessage("");
    }
    if (status === "rejected") {
      toast.error(`Your feedback wasn't sent.\n${error}.`);
    }
  }, [status, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendFeedBack({ name, email, message }));
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <Box>
        <Field
          type="text"
          name="name"
          placeholder="Your name"
          minLength={4}
          required
          value={name}
          onChange={setName}
        />
        <Field
          type="email"
          name="email"
          placeholder="Your e-mail"
          required
          value={email}
          onChange={setEmail}
        />
        <Field
          name="message"
          placeholder="Your message"
          minLength={10}
          required
          multiline
          rows={4}
          value={message}
          onChange={setMessage}
        />
      </Box>
      <Button
        text="Send message"
        loadingText="Sending..."
        isLoading={status === "pending"}
      />
    </StyledForm>
  );
};
