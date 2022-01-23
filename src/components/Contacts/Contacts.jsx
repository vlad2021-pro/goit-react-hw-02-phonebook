import React from "react";

const ContactsList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            {/* <button>
              Delete
            </button>  */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
