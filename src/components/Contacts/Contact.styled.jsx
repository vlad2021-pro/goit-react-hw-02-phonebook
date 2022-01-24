import styled from "@emotion/styled";

export const ContactList = styled.div`
  padding: 7px;
  color: black;
  border-radius: 5px;
  margin: auto;
  width: 200px;
  list-style-type: none;
`;

export const ContactItem = styled.li``;

export const ContactData = styled.p`
  display: inline-block;
  margin-bottom: 10px;
  vertical-align: top;
  text-align: center;
  line-height: normal;

  :first-of-type {
    margin-right: 10px;
  }
`;

export const ContactButton = styled.button`
  display: inline-block;
  margin-bottom: 10px;
  vertical-align: top;
  text-align: center;
  line-height: normal;
`;
