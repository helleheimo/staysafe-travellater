import Grid from "../atoms/Grid"
import { HotelCard } from "../molecules"

export const HotelList = ({ data }) => data.length > 0 ?
  <Grid templateColumns="repeat(auto-fill, minmax(20rem, 1fr))" gap={[24, 12]}>
    {data.map(({ id, fields }) => <HotelCard key={id} {...fields} />)}
  </Grid> : <Grid>No hotels found</Grid>

export default HotelList