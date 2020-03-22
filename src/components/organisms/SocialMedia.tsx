import Grid from "../atoms/Grid"
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import { useClipboard } from "@chakra-ui/core"
import { LinkButton } from "../molecules/LinkButton"

export const SocialMedia = props => {
  const { onCopy, hasCopied } = useClipboard("https://staysafe.valpashotels.net");
  return <Grid bg="purple.50" p={[4, 12]}>
    <Heading textAlign="center">#StaySafeTravelLater</Heading>
    <Grid templateColumns={["1fr 1fr", "1fr 1fr 1fr 1fr"]}>
      <LinkButton isExternal to="https://www.facebook.com/sharer/sharer.php?u=https://staysafe.valpashotels.net">Facebook</LinkButton>
      <LinkButton isExternal to="https://twitter.com/home?status=https://staysafe.valpashotels.net">Twitter</LinkButton>
      <a href="whatsapp://send?text=https://staysafe.valpashotels.net" data-action="share/whatsapp/share">
        <Button w="100%">Whatsapp</Button>
      </a>
      <Button onClick={onCopy}>{hasCopied ? "Copied" : "Copy Link"}</Button>
    </Grid>
  </Grid>
}

export default SocialMedia