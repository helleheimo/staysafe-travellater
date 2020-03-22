import Grid from "../atoms/Grid"
import Heading from "../atoms/Heading"
import Image from '../atoms/Image'
import Text from '../atoms/Text'
import { LinkButton } from "../molecules/LinkButton"

export const Hotel = () =>
  <Grid templateColumns={["1fr", "1fr 1fr"]}>
    <Image src="/images/landing/hotel_F6_courtyard.png" />
    <Grid p={[4, 12]} bg="purple.50" alignContent="start">
      <Heading>The first hotel of the campaign – Hotel F6</Heading>
      <Text>Hotel F6 is the guests’ favourite and ranks #1 on Tripadvisor in Finland. The friendly staff accompanied by Runar, the hotel dog, welcomes everyone with the same, sincere enthusiasm. Hotel F6 is a family-owned hotel and it's shown in everything they do; making the hotel a home-like place, more than just a place to stay.</Text>
      <LinkButton to="/hotel/hotel-f6">See More</LinkButton>
    </Grid>
  </Grid>