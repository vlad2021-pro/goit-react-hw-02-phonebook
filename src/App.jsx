import React from "react";
import { nanoid } from "nanoid";
import Form from "./Form/Form";

class App extends React.Component {
  state = {
    contacts: [
      {
        name: "",
        id: "",
      },
    ],

    name: "",
  };

  hadleContactsName = nanoid();
  hadleContactsId = nanoid();

  addContacts = ({ name, number }) => {
    const userContact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(userContact);
  };

  render() {
    return (
      <div>
        <Form onSumbit={this.addContacts}></Form>

        <div>
          <ul>
            {" "}
            Contacts
            <li name={this.hadleContactsName} id={this.hadleContactsId}>
              Jon Benn
            </li>
            <li name={this.hadleContactsName} id={this.hadleContactsId}>
              Eden Klinec
            </li>
            <li name={this.hadleContactsName} id={this.hadleContactsId}>
              Tom Hardy
            </li>
            <li name={this.hadleContactsName} id={this.hadleContactsId}>
              Lee Kun
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
