import Grid from "../atoms/Grid"
import { Box, useDisclosure } from "@chakra-ui/core"
import Heading from "../atoms/Heading"
import Button from "../atoms/Button"
import Image from '../atoms/Image'
import Text from '../atoms/Text'

import Modal from "../molecules/Modal";
import RequestGiftcard from "../organisms/RequestGiftcard";
import LinkButton from "./LinkButton"

export const HotelCard = (props) => {
  const disclosure = useDisclosure();
  return <Grid gap={4}>
    <Image ratio={1} src={props["Preview Image"] && props["Preview Image"][0].thumbnails.large.url} alt="" />
    <Box px={8}>
      <Heading fontSize="md">{props["Name"]}</Heading>
      <Text>{props["City Name"]}, {props["Country Name"]}</Text>
    </Box>
    {props["Name"] === "Hotel F6" && <LinkButton to="/hotel/hotel-f6">Buy gift card</LinkButton>}
    {props["Name"] !== "Hotel F6" && props["OwnService"] && <LinkButton isExternal to={props['OwnService']}>Buy gift card</LinkButton>}
    {props["Name"] !== "Hotel F6" && !props["OwnService"] &&
      <Modal modal={disclosure} OpenButton={props => <Button {...props}>Buy gift card</Button>}>
        <RequestGiftcard disclosure={disclosure} hotel={props["Name"]} infomail={props["Infomail"]} />
      </Modal>
    }
  </Grid>
}

export default HotelCard