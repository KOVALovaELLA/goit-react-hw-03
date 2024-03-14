/* ContactForm.jsx */

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Name is required")
          .min(3, "Min 3 characters")
          .max(50, "Max 50 characters"),
        number: Yup.string()
          .required("Number is required")
          .min(3, "Min 3 characters")
          .max(50, "Max 50 characters"),
      })}
      onSubmit={onAddContact}
    >
      <Form className={styles.form}>
        <Field
          className={styles.field}
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <ErrorMessage className={styles.error} name="name" />
        <Field
          className={styles.field}
          type="text"
          name="number"
          placeholder="Enter number"
        />
        <ErrorMessage className={styles.error} name="number" />
        <button className={styles["submit-btn"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
