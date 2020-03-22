import Grid from "../atoms/Grid";
import Heading from "../atoms/Heading";
import { Box } from "@chakra-ui/core";
import { MdHome, MdCardGiftcard, MdFlightTakeoff } from "react-icons/md";

export const ValueProps = () =>
  <Grid>
    <Grid p={[4, 12]} bg="cyan.50">
      <Heading m="auto" maxW="40rem" textAlign="center">The COVID-19 outbreak is wreaking havoc on the hospitality industry.
      Hotels are closing their doors to prevent the virus from spreading.
It's time to be responsible and help them fight the common enemy.</Heading>
    </Grid>
    <Grid templateColumns={["1fr", "1fr 1fr 1fr"]}>
      <Grid bg="red.50" p={[4, 12]} justifyContent="center" alignContent="center" textAlign="center" justifyItems="center">
        <Box as={MdHome} size="4rem" />
        <Heading textAlign="center">
          Be responsible,<br /> stay at home for now.
        </Heading>
      </Grid>
      <Grid bg="blue.50" p={[4, 12]} justifyContent="center" alignContent="center" HeadingAlign="center" justifyItems="center">
        <Box as={MdCardGiftcard} size="4rem" />
        <Heading textAlign="center">
          Be helpful,<br /> buy a gift card, save money and help the hoteliers in need
        </Heading>
      </Grid>
      <Grid bg="green.50" p={[4, 12]} justifyContent="center" alignContent="center" HeadingAlign="center" justifyItems="center">
        <Box as={MdFlightTakeoff} size="4rem" />
        <Heading textAlign="center">
          Be free,<br /> travel when it's safe again
        </Heading>
      </Grid>
    </Grid>
  </Grid>