import dynamic from 'next/dynamic'
import Heading from "../../components/atoms/Heading";
import Text from "../../components/atoms/Text";
import Grid from "../../components/atoms/Grid";
import Image from '../../components/atoms/Image'
import { Box } from "@chakra-ui/core";
import Container from "../../components/molecules/Container";
const GiftupSnippet = dynamic(() => import('../../components/atoms/GiftupSnippet'), { ssr: false })

const Giftup = props =>
  <Box {...props}>
    <Heading textAlign="center" p="0.5rem">Going live on Monday!</Heading>
    <div data-site-id="f12c71ce-35a3-4519-bdd1-d298da683be3" data-platform="Other" className="gift-up-target"></div>
    <GiftupSnippet />
  </Box>

export default props =>
  <Grid maxW="1200px" m="auto">
    <Container bg="red.50" >
      <Grid p={[4, 12]} alignContent="start" templateColumns={["1fr", "1fr 1fr"]} >
        <Heading gridColumn={["", "span 2"]}>Hotel F6</Heading>
        <Grid gridColumn={["", "span 2"]} templateColumns={["1fr", "1fr 1fr"]}>
          <Image src="/images/landing/hotel_F6_breakfast.jpg" ratio={1} />
          <Image src="/images/landing/hotel_F6_runar.jpg" ratio={1} />
        </Grid>
        <Grid >
          <Text>Hotel F6 is the guests’ favourite and ranks #1 on Tripadvisor for the whole of Finland. The friendly staff accompanied by Runar, the hotel dog, welcomes everyone with the same, sincere enthusiasm. The philosophy at the F6 is based on having the right staff at the hotel, and pairing them with high-quality hotel amenities, products and services.</Text>
          <Text>There’s a strong sense of place in the air that makes the atmosphere feel like home, like an exciting home. Spacious rooms are decorated with well-picked furniture and art, not to mention the luxurious beds that guarantee a good night’s sleep.</Text>
          <Text>The locally-sourced breakfast is served at the hotel café that turns into a trendy bar that offers some of the city’s finest drinks every day, all day. Free use of bicycles is available for guests wishing to explore Helsinki on wheels.</Text>
        </Grid>
        <Giftup gridRow="span 3" />
        <Grid gridColumn={["", "span 2"]}>
          <Image src="/images/landing/hotel_F6_case.jpg" ratio={2} />
        </Grid>
      </Grid>
    </Container>
  </Grid>