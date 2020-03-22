import Heading from "../atoms/Heading"
import Text from '../atoms/Text'
import { Box } from "@chakra-ui/core"
import Grid from "../atoms/Grid"
import Link from "../atoms/Link"

const ContactCard = ({ area, name = "", email, phoneNumber = "", ...props }) =>
  <Grid gap={0} rounded={["1rem", "2rem"]} p={[4, 12]} bg="purple.50" {...props}>
    <Heading mb={[4, 12]}>{area}</Heading>
    <Text>{name}</Text>
    <Link isExternal to={`mailto:${email}`}>{email}</Link>
    <Link isExternal to={`tel:${phoneNumber}`}>{phoneNumber}</Link>
  </Grid>

const AddressCard = ({ city, address, postalCode, country }) =>
  <Box rounded={["1rem", "2rem"]} p={[4, 12]} bg="green.50">
    <Heading mb={[4, 12]}>{city}</Heading>
    <Text>{address}</Text>
    <Text>{postalCode}</Text>
    <Text>{country}</Text>
  </Box>

const Contact = () => <Grid templateColumns={["1fr", "1fr 1fr"]}>
  <ContactCard area="Hoteliers" name="Do you want to see your hotel on this list? Join for free by contacting us at " email="info@valpas.io" phoneNumber="" />
  <ContactCard area="General inquiries" name="Valpas" email="info@valpas.io" phoneNumber="+358407042132" bg="green.50" />
</Grid>

export default Contact