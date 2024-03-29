/* App.jsx */

import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { initialContacts } from "../DataContacts";
import { nanoid } from "nanoid";
import styles from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    actions.resetForm();
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
