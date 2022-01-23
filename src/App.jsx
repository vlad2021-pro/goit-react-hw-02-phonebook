import React from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form/Form";
import ContactsList from "./components/Contacts/Contacts";
import Filter from "./components/Filter/filter";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContacts = ({ name, number }) => {
    const userContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [userContact, ...prevState.contacts],
    }));

    console.log(userContact);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  changeInputFilter = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getVisibleContacts = () => {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return this.state.contacts?.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <div>
        <Form onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeInputFilter} />
        <ContactsList contacts={visibleContacts} />
      </div>
    );
  }
}
export default App;
