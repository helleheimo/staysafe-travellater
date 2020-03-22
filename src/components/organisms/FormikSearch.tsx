import { Formik, Form, Field } from "formik";
import Grid from "../atoms/Grid";
import InputSearch from "../atoms/InputSearch";
import Router, { useRouter } from "next/router";
import FormikAutoSave from "../molecules/FormikAutosave";

const handleSubmit = query => Router.replace({ pathname: "/search", query });

export default props => {
  const { query } = useRouter();
  return <Formik initialValues={{ name: "", ...query }} onSubmit={handleSubmit}>
    <Grid as={Form}>
      <Field name="name" placeholder="Search for hotels" as={InputSearch} />
      <FormikAutoSave />
    </Grid>
  </Formik>
}