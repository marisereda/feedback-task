import { Input, Label } from "./Field.styled";

export const Field = ({
  name,
  type = "text",
  placeholder,
  required,
  multiline,
  rows = 4,
  value,
  onChange,
}) => {
  const handleChange = (e) => onChange(e.target.value);
  const placeholderText = required ? `${placeholder}*` : placeholder;
  return (
    <Label>
      {multiline ? (
        <Input
          as="textarea"
          name={name}
          placeholder={placeholderText}
          required={required}
          rows={rows}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <Input
          name={name}
          type={type}
          placeholder={placeholderText}
          required={required}
          value={value}
          onChange={handleChange}
        />
      )}
    </Label>
  );
};
