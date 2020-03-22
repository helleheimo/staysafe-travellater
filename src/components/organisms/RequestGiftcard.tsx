//@ts-nocheck
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Grid from "../atoms/Grid";
import { Formik, Form, useFormikContext, useField } from "formik";
import {
  Box,
  RadioButtonGroup,
  Textarea,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from "@chakra-ui/core";
import React from "react";
import Axios from "../../utils/axios";
import { FaEuroSign } from 'react-icons/fa'

const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;
  return (
    <Button
      ref={ref}
      variantColor={isChecked ? "purple" : "gray"}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  );
});

const PriceSelector = (props) => {
  const [{ onChange, ...field }, meta, helpers] = useField(props);
  return <>
    <RadioButtonGroup
      onChange={helpers.setValue}
      isInline
      {...props}
      {...field}
    >
      <CustomRadio value="100">100€</CustomRadio>
      <CustomRadio value="200">200€</CustomRadio>
      <CustomRadio value="300">300€</CustomRadio>
      <CustomRadio value="500">500€</CustomRadio>
    </RadioButtonGroup>
  </>
}

const fillTemplate = (hotel, amount, name) => `
Hello, ${hotel}!

I'm not traveling right now to stay safe, but I would love to stay at your hotel later.
I would like to buy a gift card for ${amount} euros.

Could you send me the information on how to proceed with the gift card purchase?

Best regards,
${name}
`;


const TextEmail = (props) => {
  const [{ onChange, ...field }, meta, helpers] = useField(props);
  const { values } = useFormikContext();
  return <Textarea p={4} rounded="2rem" {...props} {...field} height="20rem" onChange={helpers.setValue}
    value={fillTemplate(values.hotel, values.amount, values.name)} />
}

const handleSubmit = onClose => showSuccess => async (values) => {
  try {
    const { name, from, to, subject, hotel, amount } = values;
    const content = fillTemplate(hotel, amount, name).replace("\r\n", "<br>");
    await Axios.post('/send_mail', { name, hotel, from, to, subject, content });
    showSuccess();
    onClose();
  } catch (err) {
    console.log("Error submitting request", err);
  }
};

const InputRow = ({ label, rightIcon, color, ...props }) =>
  <InputGroup>
    <InputLeftElement
      borderWidth="2px"
      borderColor={color}
      borderRadius="2rem"
      backgroundColor={color}
      color="white"
      width="6rem">{label}</InputLeftElement>
    <Input pl="6.5rem" border="2px" borderRadius="2rem" focusBorderColor={color} {...props} />
    {rightIcon && <InputRightElement children={<Box as={rightIcon} color={color} />} />}
  </InputGroup>

const FormikGiftCard = (props) => {
  const toast = useToast();
  const successParams = {
    title: "Gift card requested!",
    description: "Check your email and wait for an answer.",
    status: "success",
    duration: 5000,
    isClosable: true,
  };
  const showSuccess = () => toast(successParams);
  const closeModal = () => {
    props.disclosure.onClose();
  }
  return (
    <Formik
      initialValues={{
        hotel: props.hotel,
        to: props.infomail,
        amount: "200",
        from: "",
        name: "",
        subject: "Staying safe for now, buying a gift card for later",
        content: "",
      }}
      onSubmit={(values) => { handleSubmit(closeModal)(showSuccess)(values) }}
    >
      <Grid as={Form} gap={4}>
        <Text>Choose your gift card!</Text>
        <PriceSelector name="amount" />
        <InputRow label="Amount" name="amount" rightIcon={FaEuroSign} color="purple.500" />
        <InputRow label="Email" placeholder="My Email" name="from" color="purple.500" />
        <InputRow label="Name" placeholder="My Name" name="name" color="purple.500" />
        <Button type="submit">Send request!</Button>
        <Text>The email we will forward to the hotel:</Text>
        <InputRow label="From" placeholder="My Email" name="from" color="gray.500" />
        <InputRow label="To" name="to" color="gray.500" />
        <InputRow label="Subject" name="subject" color="gray.500" />
        <TextEmail name="content" />
      </Grid>
    </Formik>
  )
};

const RequestGiftcard = props => (
  <Grid>
    <Heading>Request a gift card for {props.hotel}</Heading>
    <Box>
      <Text>{props.hotel} does not collaborate with us yet.</Text>
      <Text>Once they do, we can get you some discounts and an easier checkout.</Text>
      <Text>
        For now, we can help you get a gift card by sending them an email instead!
      </Text>
    </Box>
    <FormikGiftCard {...props} />
  </Grid>
);

export default RequestGiftcard;
