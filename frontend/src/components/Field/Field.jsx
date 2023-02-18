import { Input, Label } from "./Field.styled";

export const Field = ({
  name,
  type,
  placeholder,
  minLength,
  required,
  multiline,
  rows,
  value,
  onChange,
}) => {
  const handleChange = (e) => onChange(e.target.value);

  const placeholderText = required ? `${placeholder}*` : placeholder;
  const pattern =
    type === "email" ? "^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$" : null;

  return (
    <Label>
      <Input
        as={multiline ? "textarea" : "input"}
        type={type}
        name={name}
        placeholder={placeholderText}
        minLength={minLength}
        pattern={pattern}
        required={required}
        rows={rows}
        value={value}
        onChange={handleChange}
      />
    </Label>
  );
};
