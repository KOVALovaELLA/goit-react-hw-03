/* Contact.jsx */
/* import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.contact}>
      {contact.name}: {contact.number}
      <button
        className={styles["delete-btn"]}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact; */
import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div className={styles.contact}>
      <span className={styles["contact-name"]}>{contact.name}</span>
      <span className={styles["contact-number"]}>{contact.number}</span>
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
