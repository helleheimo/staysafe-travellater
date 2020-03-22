import { Link } from "@chakra-ui/core";
import NextLink from 'next/link'

export default ({ to, isExternal = false, ...props }) =>
  isExternal
    ? <Link fontWeight="bold" rounded="full" w="100%" color="purple.500" href={to} {...props} />
    : <NextLink href={to} passHref>
      <Link rounded="full" color="purple.500" {...props} />
    </NextLink>