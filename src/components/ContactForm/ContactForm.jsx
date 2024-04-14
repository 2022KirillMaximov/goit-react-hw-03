import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from './ContactForm.module.css'
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3, "Name is too short").max(50, "Name is too long"),
  number: Yup.string().required("Phone number is required"),
});

export default function ContactForm({ onAdd }) {
  const contactNameId = useId();
  const contactNumberId = useId();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const id = nanoid(); 
    const newContact = { id, name, number };
    onAdd(newContact); 
    actions.resetForm();
    console.log(number)
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={contactNameId}>Name</label>
        <Field type="text" name="name" id={contactNameId} className={css.textInForm}  />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={contactNumberId}>Phone</label>
        <Field type="text" name="number" id={contactNumberId} />
        <ErrorMessage name="number" component="span" />

        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
