import Grid from "../atoms/Grid";

export default props =>
  <Grid h="100vh" minH="600px" p={[4, 12]} >
    <Grid p={0} {...props} />
  </Grid>