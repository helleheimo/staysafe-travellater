import { Input } from "@chakra-ui/core";
import { useField } from "formik";


export default props => {
  const [field, meta, helper] = useField(props);
  return <Input {...field} {...props} />
}