import { Box } from "@chakra-ui/core";
import Grid from "../atoms/Grid";

export default props =>
  <Box h="50vh" minH="600px">
    <Grid h="100%" p={0} bg="orange.50" backgroundSize="cover" backgroundPosition="50% 50%" justifyContent="center" alignContent="center" {...props} />
  </Box>