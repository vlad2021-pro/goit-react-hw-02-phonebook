import React, { Component } from "react";

class Form extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  hadleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubbmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  handleChange = (event) => {
    this.setState({ number: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubbmit}>
          <label>
            {" "}
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.hadleNameChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            {" "}
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
