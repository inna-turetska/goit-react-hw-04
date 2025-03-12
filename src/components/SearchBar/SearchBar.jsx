import { Form, Field, Formik } from "formik";
import styles from "./SearchBar.module.css";
import { showToast } from "../ToastProvider/ToastProvider";

export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{
          image: "",
        }}
        onSubmit={(values, actions) => {
          if (!values.image.trim()) {
            showToast("Please enter a search term.", "error");
          } else {
            onSearch(values.image);
            actions.resetForm();
          }
        }}
      >
        <Form className={styles.form}>
          <Field
            className={styles.input}
            type="text"
            name="image"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
