import { Grid, ThemeProvider, CSSReset } from "@chakra-ui/core";
import { DefaultSeo } from 'next-seo';

import theme from "../utils/theme";
import SEO from '../utils/seo';

export default ({ Component, pageProps }) =>
  <ThemeProvider theme={theme}>
    <DefaultSeo {...SEO} />
    <CSSReset />
    <Grid bg="gray.50" as={Component} {...pageProps} />
  </ThemeProvider>