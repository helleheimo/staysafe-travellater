import { Image, AspectRatioBox } from '@chakra-ui/core'
export default ({ ratio = 0, ...props }) =>
  <AspectRatioBox ratio={ratio} gridColumn={props.gridColumn} gridRow={props.gridRow}>
    <Image objectFit="cover" w="100%" rounded={["1rem", "2rem"]} fallbackSrc="https://gradientjoy.com/300x300?id=130" {...props} />
  </AspectRatioBox>