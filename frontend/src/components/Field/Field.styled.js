import styled from "styled-components";

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 30px 46px;
  font-family: "Apercu Arabic Pro";
  font-size: 18px;
  line-height: 1.8;
  color: #2d2d2d;
  background-color: white;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  outline: none;

  :focus {
    border-color: #fad34f;
  }
  :not(:placeholder-shown):invalid {
    border-color: #f472b7;
  }
  ::placeholder {
    color: #575757;
  }

  @media (max-width: 640px) {
    padding: 25px;
  }
`;

export const Label = styled.label`
  display: block;
`;
