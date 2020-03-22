import Airtable from 'airtable';
import Image from '../components/atoms/Image'
import Grid from '../components/atoms/Grid';
import SmallContainer from '../components/molecules/SmallContainer';
import FormikSearch from '../components/organisms/FormikSearch';
import Contact from '../components/organisms/Contact';
import Footer from '../components/organisms/Footer';
import { SocialMedia } from '../components/organisms/SocialMedia';
import HotelList from '../components/organisms/HotelList';
import Link from '../components/atoms/Link';


const LandingMini = () =>
  <Link to="/">
    <SmallContainer backgroundSize="cover" backgroundPosition="50% 50%" backgroundImage="url(/images/landing/shutterstock_180199115.jpg)" justifyContent="center" alignContent="center">
      <Grid rounded="full" background="hsla(120, 50%, 0%, 0.8)" minH="300px" h="50%" minW="300px" w="50%">
        <Image p={[12]} ratio={3} src="/images/landing/valpas.png" objectFit="contain" />
      </Grid>
    </SmallContainer>
  </Link>

const Index = ({ data }) => <>
  <Grid p={[4, 12]}>
    <LandingMini />
    <Grid p={[4, 12]} bg="orange.50">
      <FormikSearch />
      <HotelList data={data} />
    </Grid>
    <SocialMedia />
    <Contact />
    <Footer />
  </Grid>
</>

Index.getInitialProps = async ({ query }) => {
  const { name = "" } = query
  const base = new Airtable({ apiKey: process.env.VALPAS_STAYSAFE_AIRTABLE_SECRET }).base(process.env.VALPAS_STAYSAFE_AIRTABLE_BASE);
  const data = await base('Hotels').select({ view: "Grid view", filterByFormula: `SEARCH(LOWER("${name}"),LOWER({Name}&{Country Name}&{City Name}))` }).all()
  return { data }
}

export default Index