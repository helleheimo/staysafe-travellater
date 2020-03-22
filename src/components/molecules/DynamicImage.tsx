import { Box } from "@chakra-ui/core"

export const DynamicImage = props => <Box rounded={["1rem", "2rem"]} backgroundImage={`url(${props.src})`} backgroundSize="cover" backgroundAttachment="fixed" />
export default DynamicImage