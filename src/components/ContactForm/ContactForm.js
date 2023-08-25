import { Formik, Form, Field } from 'formik';

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <Field type="text" name="name" />
        <Field type="email" name="number" />
        <button type="submit">Submit</button>
      </Form>
      )
    </Formik>
  );
};
