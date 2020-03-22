import Grid from "../atoms/Grid"
import Text from '../atoms/Text'
import Image from '../atoms/Image'
import Heading from '../atoms/Heading'

export const HowCanYouHelp = () =>
  <Grid>
    <Grid bottom="3rem" templateColumns={["1fr", "1fr 1fr"]}>
      <Grid p={[4, 12]} gridRow="span 2" bg="gray.50" alignContent="start">
        <Heading>#StaySafeTravelLater</Heading>
        <Text>Hospitality industry is one of the industries feeling the most immediate impact of the coronavirus outbreak. Resorts and hotels that were booked by both business and leisure travelers are constantly receiving cancellation calls. Multiple hotels have lost already over 80% of their reservations and many have decided to close their hotel temporarily to help control the spreading of the virus.</Text>
        <Text>We have partnered up with hotels to offer you special discounts for future travel. By paying it forward with a gift card, you help ensure jobs and support independent hoteliers through this tough time.</Text>
        <Text>When it's safe to travel again you will have already something planned: a lovely hotel stay!</Text>
      </Grid>
      <Grid p={[4, 12]} bg="orange.50" alignContent="center">
        <Heading textAlign="center">In short</Heading>
        <Text textAlign="center" fontSize={["1rem", "1.25rem"]} >Multiple hotels have lost already over 80% of their reservations</Text>
        <Text textAlign="center" fontSize={["1rem", "1.25rem"]} >By buying the gift card now, you will help hotels in need and save money</Text>
        <Text textAlign="center" fontSize={["1rem", "1.25rem"]} >When the time comes to travel again, you can fully enjoy your favourite hotel</Text>
      </Grid>
      <Image src="/images/landing/hotel_F6_bed.jpg" ratio={2} />
    </Grid>
  </Grid>

export default HowCanYouHelp