import styled from "@emotion/styled";

const color = "blue";

export const FormAddContact = styled.form`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 6em;
`;
export const ContactInput = styled.input`
  cursor: pointer;
`;

export const BtnSubmit = styled.button`
  width: 70px;
  margin-top: 20px;
  padding: 5px;
  text-align: center;
  background-color: white;
  color: black;
  font-size: 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px 1px #a9a9a9;
  &:hover {
    color: white;
    background-color: ${color};
    cursor: pointer;
  }
`;
