import Grid from '../atoms/Grid'
import Text from '../atoms/Text'
import Link from '../atoms/Link'

export const Footer = () =>
  <Grid>
    <Grid p={[4, 12]} bg="yellow.50">
      <Text textAlign="center" fontSize="xs">{"Made with <3 for HackTheCrisisFinland.com by Valpas"} <Link to="https://www.valpashotels.com/hotels" isExternal>https://www.valpashotels.com/hotels</Link>
      <br/>This is a pro bono campaign by Valpas. To support the hotels all sales are commission-free.</Text>
      {/* <Link to="/">Privacy policy</Link> */}
    </Grid>
  </Grid>

export default Footer