import { InputGroup, InputLeftElement, Icon, Input, InputRightElement, Spinner } from "@chakra-ui/core";
import { useField, useFormikContext } from "formik";

export default props => {
  const { isSubmitting } = useFormikContext()
  const [field, meta, helper] = useField(props)
  return <InputGroup size="lg" >
    <InputLeftElement><Icon name="search" color="purple.500" /></InputLeftElement>
    <Input rounded="2rem" focusBorderColor="purple.500" {...field} {...props} />
    {isSubmitting && <InputRightElement><Spinner color="purple.500" /></InputRightElement>}
  </InputGroup>
}
