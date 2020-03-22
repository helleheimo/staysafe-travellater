import Container from "../molecules/Container"
import Grid from "../atoms/Grid"
import Image from '../atoms/Image'

export const Landing = () =>
  <Container backgroundSize="cover" backgroundPosition="50% 50%" backgroundImage="url(/images/landing/shutterstock_180199115.jpg)" justifyContent="center" alignContent="center">
    <Grid rounded="full" background="hsla(120, 50%, 0%, 0.8)" minH="300px" h="50%" minW="300px" w="50%">
      <Image p={[12]} ratio={3} src="/images/landing/valpas.png" objectFit="contain" />
    </Grid>
  </Container>

export default Landing