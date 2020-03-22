import Contact from '../components/organisms/Contact';
import { SocialMedia } from '../components/organisms/SocialMedia';
import { Footer } from '../components/organisms/Footer';
import { Landing } from '../components/organisms/Landing';
import { ValueProps } from '../components/organisms/ValueProps';
import { Hotel } from '../components/organisms/Hotel';
import { HowCanYouHelp } from '../components/organisms/HowCanYouHelp';
import Container from '../components/molecules/Container';
import SearchBox from '../components/organisms/SearchBox';

export default () =>
  <>
    <Landing />
    <Container>
      <ValueProps />
      <SearchBox />
      <Hotel />
      <HowCanYouHelp />
      <SocialMedia />
      <Contact />
      <Footer />
    </Container>
  </>
