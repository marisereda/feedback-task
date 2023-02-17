import { StyledButton, Spinner } from "./Button.styled";

export const Button = ({ text, loadingText, isLoading }) => {
  return (
    <StyledButton disabled={isLoading}>
      {isLoading && <Spinner />}
      {isLoading ? loadingText : text}
    </StyledButton>
  );
};
