import SmallContainer from '../molecules/SmallContainer';
import LinkButton from '../molecules/LinkButton';

export default () =>
  <SmallContainer backgroundImage="url(https://images.unsplash.com/photo-1578922290419-520d6f772401?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)" >
    <LinkButton to="/search">Browse gift card offers</LinkButton>
  </SmallContainer>