import Link from "../atoms/Link"
import Button from "../atoms/Button"

export const LinkButton = ({ to, ...props }) =>
  <Link to={to} {...props}>
    <Button w="100%" {...props} />
  </Link>

export default LinkButton