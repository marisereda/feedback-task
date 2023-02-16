import { Input, Label } from "./Field.styled";

export const Field = ({
  name,
  type = "text",
  placeholder,
  required,
  multiline,
  rows = 4,
}) => {
  const placeholderText = required ? `${placeholder}*` : placeholder;
  return (
    <>
      <Label>
        {multiline ? (
          <Input
            as="textarea"
            name={name}
            placeholder={placeholderText}
            required={required}
            rows={rows}
          ></Input>
        ) : (
          <Input
            name={name}
            type={type}
            placeholder={placeholderText}
            required={required}
          ></Input>
        )}
      </Label>
    </>
  );
};
